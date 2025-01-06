'use client';

import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen text-white flex items-center justify-center p-8 md:p-16 pointer-events-none">
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 pointer-events-auto">
        
        {/* Left Section - Placeholder for Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-96 md:h-96"></div>
        </div>

        {/* Right Section - Text Content */}
        <div className="w-full md:w-1/2 text-left space-y-4">
          <h2 className="text-2xl md:text-3xl text-blue-400 font-bold">Hi! I am</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-400">
            <Typewriter
              words={['OTHOI,']}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={50}
            />
          </h1>
          <p className="text-lg md:text-xl text-blue-200">
            a first-year student at Hong Kong Baptist University, aspiring to study CS. This site resembles not only my interests, but also serves as a collection of tokens that represent me as a whole.
          </p>
          <p className="text-lg md:text-xl text-white">
            This project marks the beginning of my journey, inspired by the guidance of a senior who has been a great influence on me.
          </p>
        </div>
      </div>
    </div>
  );
}
