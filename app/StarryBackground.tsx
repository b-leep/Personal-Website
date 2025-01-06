"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function StarryBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    /** 🌌 Scene, Camera, Renderer Setup */
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    /** 🌟 Infinite Starfield */
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 3000;
    const positions = [];

    for (let i = 0; i < starCount; i++) {
      positions.push(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000
      );
    }

    starGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.2,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    /** 🌠 Shooting Star with Glow and Trail */
    const shootingStarGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const shootingStarMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });
    const shootingStar = new THREE.Mesh(shootingStarGeometry, shootingStarMaterial);

    const shootingStarLight = new THREE.PointLight(0xffd700, 2, 5);
    shootingStar.add(shootingStarLight);
    scene.add(shootingStar);

    let shootingStarActive = false;

    /** ✨ Glow Effect */
    const glowMaterial = new THREE.SpriteMaterial({
      map: new THREE.TextureLoader().load('/glow.png'),
      color: 0xffd700,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const glow = new THREE.Sprite(glowMaterial);
    glow.scale.set(1, 1, 1);
    shootingStar.add(glow);

    /** 🖱️ Mouse Movement for Interaction */
    const mouse = { x: 0, y: 0 };
    document.addEventListener('mousemove', (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    /** 🎥 Animate Scene */
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();

      // Infinite Star Movement
      stars.rotation.x += 0.0001;
      stars.rotation.y += 0.0001;

      // Star Field Mouse Interaction
      stars.rotation.x += (mouse.y * 0.05 - stars.rotation.x) * delta;
      stars.rotation.y += (mouse.x * 0.05 - stars.rotation.y) * delta;

      // Shooting Star Animation
      if (!shootingStarActive && Math.random() < 0.002) {
        shootingStar.position.set(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          -10
        );
        shootingStarActive = true;
      }

      if (shootingStarActive) {
        shootingStar.position.z += 0.5;
        shootingStarLight.intensity = 2 + Math.sin(clock.elapsedTime * 10) * 0.5;

        if (shootingStar.position.z > 10) {
          shootingStarActive = false;
          shootingStar.position.z = -10;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    /** 📐 Resize Handling */
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    /** 🧹 Cleanup */
    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="star-background absolute top-0 left-0 w-full h-full z-50 pointer-events-auto"
    />
  );
}