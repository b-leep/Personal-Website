"use client";

import { useState } from "react";

export default function PoetryPage() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedPoem, setSelectedPoem] = useState<string | null>(null);

  const constellations = [
    {
      name: "Heart",
      genre: "Love",
      points: [
        { x: 5, y: 5 },
        { x: 15, y: 10 },
        { x: 25, y: 5 },
        { x: 30, y: 10 },
        { x: 15, y: 25 },
        { x: 0, y: 10 },
      ],
    },
    {
      name: "Kite",
      genre: "Life",
      points: [
        { x: 15, y: 0 },
        { x: 25, y: 10 },
        { x: 15, y: 30 },
        { x: 5, y: 10 },
      ],
    },
    {
      name: "Sword",
      genre: "Hardship",
      points: [
        { x: 15, y: 5 },
        { x: 15, y: 25 },
        { x: 12, y: 30 },
        { x: 18, y: 30 },
        { x: 15, y: 25 },
        { x: 15, y: 40 },
      ],
    },
  ];

  const poems = {
    Love: [
      {
        title: "Two Birds",
        content: `Two birds,\nFeathers untied\nYet unsure,\nOf what beholds\nTwo birds,\nAwaiting fate\nTo call upon\nThe divine state.\nCall to Thee,\nResisting flight,\nFor who knows if,\nThe spell is untied?\nTwo birds,\nPondering in hope.\nFor one sign,\nTo turn to scope.\nHopeful,\nFor a breeze.\nTo carry\nTheir souls at ease.\nThe books are closed,\nThe fate is sealed.\nBut who knows,\nWhat awaits?`,
      },
      {
        title: "For All the Times",
        content: `For every time you stayed a minute more,\nFor the nights you stayed awake,\nFor the moments you embraced me while crying,\nFor each day you chose to be here.\nFor all the times you stayed when I asked you to leave,\nFor holding on when I wanted to let go,\nFor keeping our snow from melting away.\nTo all those times you held me with your heart,\nTo the nights you stayed until I slept,\nTo the countless moments you stayed calm when I burned with rage.\nFor all the tears you shed,\nFor every time you kept me close,\nFrom sunset to sunrise.\nTo all the times you spared a moment,\nAnd to the countless times you showered me with love\nThank you,\nfor not giving up`,
      },
    ],
    Life: [
      {
        title: "Notun Shadhinota",
        content: `...`,
      },
      {
        title: "That One Leaf",
        content: `that one leaf,\nclinging high atop the city of lights-\ntoo light to cast a shadow,\ntoo small to be seen.\nwhile the lights drizzle,\nIt drifts, listening from afar,\ndo they see its soft sways,\nOr is it a shadow the brightness denies?\nonce, it bloomed,\na spark unmatched-\nnow it stretches-\nstretches its veins, brittle and bare.\ntrembling in the breeze,\nwaiting to fade,\nwondering if the lights might reach,\nor remain in silence,\nunseen...\non a moonless winter night.`,
      },
      {
        title: "Losing Now; Winning Late",
        content: `In the swirl of time, trials come to light\nLosing now, in shadows to fight\nColors fade; each thread erodes,\nYet, deep within, a glimmer of dreams untold.\nBond once strong, now stitched with scars\nLosing now, the notes synced apart.\nUnspoken words, a silent embrace\nIn vulnerability, hope to be chased.\nAmidst the storm, sailing through baits\nLosing now, but hope lies in wait,\nA chance to heal, hearts conjoined\nIn quiet moments, the bond blooms rays.`,
      },
    ],
    Hardship: [
      {
        title: "Lies & Deceit",
        content: `Trust's veil, now torn wide\nSelfish desires, hearts unwind.\nMasks removed, souls in despair\nBroken bonds- life's harsh snare\nTwisted mirrors breed lies\nWith deception's chain, cores are tied.\nDesire's pull, keeps one caged\nObscured truths; a stumbled rage.\nTime's a blur.\nPardon lost.\nLike fragile wings, are human bonds.\nYet scars speak; wounds unsealed,\nLessons carved in shadow's mist.\nIn life's maze, we're confined\nNo strength to mend, souls maligned`,
      },
      {
        title: "A Broken Paradox",
        content: `She's a shattered glass.\nPieces torn to wonders,\nLost and afraid of what the pieces might form\nFear of denial, paralyzed by loss,\nShe's become a broken paradox.\nGazing into a void,\nAfraid- what if she's caged?\nA torment yet to ponder, a wildfire ablaze\nA frenzy of panic - her world spinning\nLook left, look right, her words speared down with knives.\nShe's caged, she's trapped, she's chained to despair,\nGasping for breath, nowhere to hide\nAfraid to wander-drowning in fright.\nHoping for flight, but her wings pinned with thorns\nShe screams, she weeps, but only lets out a sigh,\nSinking into doubt, her lungs betrayed by fear.\nHer silence bleeds a desperate plea\nBut only if one could hear.\nWhile her fury is all that's seen,\nShe wishes for them to fade.\nHer mere existence now feels like a mistake`,
      },
    ],
  };

  return (
    <div className="relative min-h-screen text-white bg-navy">
      {/* Title */}
      <h1 className="font-bradley text-4xl text-center text-blue-400 mb-6 absolute top-[4%] left-1/2 transform -translate-x-1/2 z-20">
        My
      </h1>
      <h1 className="font-bradley text-4xl text-center text-blue-300 mb-6 absolute top-[10%] left-1/2 transform -translate-x-1/2 z-20">
        Poetry
      </h1>

      {/* Blue Border */}
      <div
        className="left-1/2 transform -translate-x-1/2 w-[50%] h-[90vh] border-4 border-blue-300 relative z-10"
        style={{
          borderImage: "linear-gradient(to top, #495980, transparent 90%) 1",
          borderStyle: "solid",
          borderWidth: "4px",
          marginTop: "20px",
        }}
      >
        {/* Frosted Glass Effect */}
        {(selectedGenre || selectedPoem) && (
          <div className="absolute inset-0 bg-navy/50 backdrop-blur-md flex items-center justify-center z-20">
            <div className="text-center relative z-30 w-3/4 max-h-[50vh] overflow-y-auto">
              {selectedPoem ? (
                <>
                  <h2 className="text-2lg font-bold text-blue-400 mb-4">
                    {selectedPoem}
                  </h2>
                  <p className="text-sm text-gray-300 whitespace-pre-wrap font-roboto mt-8 text-center ">
                    {
                      poems[selectedGenre as keyof typeof poems]?.find((poem) => poem.title === selectedPoem)?.content
                    }
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-blue-400">
                    {selectedGenre}
                  </h2>
                  <ul className="mt-4 text-lg text-gray-300">
                    {poems[selectedGenre as keyof typeof poems]?.map((poem, index) => (
                      <li
                        key={index}
                        className="hover:text-orange-200 cursor-pointer"
                      >
                        {poem.title}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <button
                className="mt-4 px-4 py-2 bg-gray-400 hover:bg-orange-200 text-black rounded-md"
                onClick={() => {
                  setSelectedPoem(null);
                  setSelectedGenre(null);
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Constellations */}
      <div className="absolute top-0 left-0 w-full h-full">
        {constellations.map((constellation, index) => (
          <div
            key={index}
            className="absolute animate-pulse group"
            style={{
              top: `${index * 25 + 10}%`,
              left: "10%",
            }}
            onClick={() => setSelectedGenre(constellation.genre)}
          >
            {/* Lines */}
            <svg
              className="w-40 h-40"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              {constellation.points.map((point, i) => {
                const nextPoint =
                  constellation.points[(i + 1) % constellation.points.length];
                return (
                  <line
                    key={i}
                    x1={point.x}
                    y1={point.y}
                    x2={nextPoint.x}
                    y2={nextPoint.y}
                    stroke="white"
                    strokeWidth="0.5"
                    className="group-hover:stroke-orange-200 transition-colors duration-300"
                  />
                );
              })}
              {/* Points */}
              {constellation.points.map((point, i) => (
                <circle
                  key={i}
                  cx={point.x}
                  cy={point.y}
                  r="1"
                  fill="white"
                  className="group-hover:fill-orange-200 transition-colors duration-300"
                />
              ))}
            </svg>

            {/* Genre Label on Hover */}
            <p className="absolute left-[1rem] bottom-[calc(100%+0.2rem)] text-sm text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity">
              {constellation.genre}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
