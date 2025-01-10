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

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 3000;
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 2000;
    }

    starGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(starPositions, 3)
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

    /** ✨ Swirling Stars */
    const swirlingGeometry = new THREE.BufferGeometry();
    const swirlingCount = 2500;
    const swirlingPositions = new Float32Array(swirlingCount * 3);

    for (let i = 0; i < swirlingCount * 3; i++) {
      swirlingPositions[i] = (Math.random() - 0.5) * 10;
    }

    swirlingGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(swirlingPositions, 3)
    );

    const swirlingMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.005,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const swirlingStars = new THREE.Points(swirlingGeometry, swirlingMaterial);
    scene.add(swirlingStars);

    /** 🎥 Animation Loop */
    const animate = () => {
      requestAnimationFrame(animate);

      // Infinite star field movement
      stars.rotation.y += 0.0002; // Reduced Y-axis rotation for distant stars

      // Swirling stars movement
      swirlingStars.rotation.y += 0.0004; // Reduced Y-axis swirl
      swirlingStars.rotation.x += 0.0002; // Reduced X-axis swirl

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
