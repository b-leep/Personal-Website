'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Typewriter Effect Component
const Typewriter: React.FC<{ text: string; speed?: number }> = ({ text, speed = 100 }) => {
    const [displayedText, setDisplayedText] = useState<string>('');
  
    useEffect(() => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex++;
        if (currentIndex === text.length) {
          clearInterval(intervalId);
        }
      }, speed);
      return () => clearInterval(intervalId);
    }, [text, speed]);
  
    const academics = displayedText.slice(0, 9); // "Academics"
    const and = displayedText.slice(9, 13); // "and"
    const experiences = displayedText.slice(13, 24); // "Experiences"
  
    return (
      <h1 className="text-2xl font-bold mb-8">
        <span className="text-blue-300">{academics}</span>{' '}
        <span className="text-white">{and}</span>{' '}
        <span className="text-orange-300">{experiences}</span>
      </h1>
    );
  };  

// Main Component
export default function AcademicsAndExperiences() {
  const experiences = [
    {
      title: 'Founder',
      company: 'Metanoia.dhk',
      duration: 'Jun 2023 - Present · 1 yr 8 mos',
      location: 'Dhaka, Bangladesh · Hybrid',
      description: [
        'Managed all aspects of the projects, from design to overseeing process and assurance.',
        'Engaged in discussions and planning sessions to brainstorm issues, generate new ideas, and assess performance.',
        'Successfully executed the event "Project Hygiene" to raise hygiene awareness among underprivileged people in Sector-4 slums, distributing essential supplies like soap, scrubber, and comb.',
      ],
    },
    {
      title: 'Member of Budgeting Dept.',
      company: 'Silver Lining Organisation',
      duration: '2021 - Present · 4 yrs 1 mo',
      description: ['Organised logistics of statistical records of costs for an event named "Root for Trees".'],
    },
    {
      title: 'Prefect of Business Club; Journalism & Photography Club',
      company: 'The Aga Khan School, Dhaka',
      duration: 'Aug 2022 - Apr 2024 · 1 yr 9 mos',
      description: [
        'Organised AKS Business Week 2022-2023: an event simulating real-life business scenarios for students.',
        'Organised Photography competition "Capturing Emotions" in October 2023, with an exhibition showcasing emotional photography.',
      ],
    },
    {
      title: 'Campus Ambassador',
      company: 'Scholastica Economics and Business Summit IV',
      duration: 'Oct 2022 · 1 mo',
      description: ['Represented AKS, brought in participants, and managed the application process.'],
    },
    {
      title: 'Teaching Assistant',
      company: 'GNOSIS Uttara',
      duration: 'Sep 2022 - Mar 2023 · 7 mos',
      location: 'Uttara, Dhaka, Bangladesh · On-site',
      description: [
        'Coordinated exam invigilation for up to 45+ students.',
        'Provided 1:1 and group support for class activities and outdoor recreation.',
        'Offered constructive feedback to students to improve self-esteem.',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Hong Kong Baptist University',
      duration: '2024',
    },
    {
      degree: 'High School',
      institution: 'The Aga Khan School, Dhaka',
      duration: '2008 - 2024',
      achievements: [
        '7 A*, 1 A in CAIE IGCSE (2022); 3 A*, 1 A in CAIE A Levels (2024).',
        'Winner of AKS Photography Contest (2023), AKS Inter-school Badminton Tournament, and Scholastica Economics Summit (2022).',
        'World Scholar’s Cup: 11 medals in 2019 and 2022.',
        'Scholarship holder since grade 7 (need + merit based).',
      ],
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full h-screen bg-transparent text-white p-6">
      <div className="flex flex-col items-center">
        <Typewriter text="Academics and Experiences" speed={100} />
      </div>
      <div className="w-full max-w-3xl mx-auto overflow-y-auto h-[calc(100vh-150px)]">
        <h2 className="text-xl font-semibold text-blue-300 mb-4">Experiences</h2>
        <ul className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.li
              key={index}
              className="border-b border-gray-600 pb-4"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-md font-bold text-orange-300">{exp.title}</h3>
              <p className="text-sm text-gray-300">{exp.company}</p>
              <p className="text-xs text-gray-400">{exp.duration}</p>
              {exp.location && <p className="text-xs text-gray-400">{exp.location}</p>}
              <ul className="mt-2 list-disc list-inside text-sm">
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold text-blue-300 mt-8 mb-4">Education</h2>
        <ul className="space-y-6">
          {education.map((edu, index) => (
            <motion.li
              key={index}
              className="border-b border-gray-600 pb-4"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-md font-bold text-orange-300">{edu.degree}</h3>
              <p className="text-sm text-gray-300">{edu.institution}</p>
              <p className="text-xs text-gray-400">{edu.duration}</p>
              {edu.achievements && (
                <ul className="mt-2 list-disc list-inside text-sm">
                  {edu.achievements.map((achieve, idx) => (
                    <li key={idx}>{achieve}</li>
                  ))}
                </ul>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
