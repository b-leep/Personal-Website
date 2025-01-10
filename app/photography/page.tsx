'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Carousel Component
const PhotographyCarousel = ({ genres, onGenreSelect }: { genres: { genre: string }[]; onGenreSelect: (genre: string) => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextGenre = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % genres.length);
  };

  const prevGenre = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + genres.length) % genres.length);
  };

  return (
    <motion.div
      className="w-full h-screen flex flex-col items-center justify-center relative bg-transparent"
      animate={{
        y: [0, -10, 0], // Floating effect
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'mirror',
      }}
    >
      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-100 mb-10 select-none">Select Genre</h1>

      {/* Left Arrow */}
      <button
        onClick={prevGenre}
        className="absolute left-10 text-yellow-400 text-5xl z-10 hover:scale-125 transition-all"
      >
        &#9664;
      </button>

      {/* Carousel Container */}
      <div className="relative w-128 h-60 flex items-center justify-center">
        <AnimatePresence>
          {genres.map((genre, index) => {
            const isCurrent = index === currentIndex;
            const isNext = index === (currentIndex + 1) % genres.length;
            const isPrevious =
              index === (currentIndex - 1 + genres.length) % genres.length;

            return (
              <motion.div
                key={genre.genre}
                className={`absolute w-96 h-48 flex items-center justify-center rounded-xl backdrop-blur-md bg-white/10 shadow-lg transition-all ${
                  isCurrent
                    ? 'z-20 scale-100'
                    : isNext
                    ? 'z-10 scale-75 translate-x-40'
                    : isPrevious
                    ? 'z-10 scale-75 -translate-x-40'
                    : 'z-0 scale-50 opacity-0'
                }`}
                animate={{
                  opacity: isCurrent || isNext || isPrevious ? 1 : 0,
                  scale: isCurrent ? 1.1 : 0.75,
                  x: isCurrent
                    ? 0
                    : isNext
                    ? 150
                    : isPrevious
                    ? -150
                    : 0,
                  zIndex: isCurrent ? 20 : isNext || isPrevious ? 10 : 0,
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                onClick={() => onGenreSelect(genre.genre)} // Pass selected genre to parent
              >
                <h2 className="text-3xl text-white font-semibold">{genre.genre}</h2>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextGenre}
        className="absolute right-10 text-yellow-400 text-5xl z-10 hover:scale-125 transition-all"
      >
        &#9654;
      </button>
    </motion.div>
  );
};

// Genre Page Component
const PhotographyGenrePage = ({ selectedGenre, onBack }: { selectedGenre: string; onBack: () => void }) => {
  const [photos, setPhotos] = useState<{ images: string; caption: string; date: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('/photography.json'); // Fetch the JSON file
        if (!response.ok) throw new Error('Failed to fetch photos');
        const data = await response.json();
        const genreData = data.filter((item: { genre: string }) => item.genre === selectedGenre);
        setPhotos(genreData);
      } catch (error) {
        console.error('Error fetching photos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [selectedGenre]);

  if (loading) {
    return <div className="w-full h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  return (
    <div className="w-full h-screen flex flex-col items-center bg-transparent text-white overflow-y-auto">
      <button
        className="absolute top-4 left-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-md"
        onClick={onBack}
      >
        Back
      </button>
      <h1 className="text-4xl font-bold mb-6">{selectedGenre} Photography</h1>
      <div className="flex flex-col items-center space-y-10">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative w-full max-w-4xl flex flex-col items-center"
          >
            <span className="text-sm text-yellow-400 mb-2">
              {photo.date}
            </span>
            <img
              src={photo.images}
              alt={photo.caption}
              className="w-96 h-72 object-cover rounded-lg shadow-md"
            />
            <p className="mt-2 text-gray-200 text-sm">{photo.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Component
export default function PhotographyPage() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const genres = [
    { genre: 'Astrophotography' },
    { genre: 'Landscape' },
    { genre: 'Macro' },
    { genre: 'Food' },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {selectedGenre ? (
        <PhotographyGenrePage
          selectedGenre={selectedGenre}
          onBack={() => setSelectedGenre(null)}
        />
      ) : (
        <PhotographyCarousel genres={genres} onGenreSelect={setSelectedGenre} />
      )}
    </div>
  );
}
