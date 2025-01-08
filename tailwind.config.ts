import type { Config } from 'tailwindcss';

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluegrey: '#050510',
      },
      boxShadow: {
        glow: '0 0 20px 4px rgba(255, 255, 255, 0.8)', // Adds the glow effect
      },
      transitionTimingFunction: {
        smooth: 'ease-in-out', // Optional: Add smoother transitions
      },
      transitionDuration: {
        300: '300ms', // Explicit 300ms for consistency
      },
      animation: {
        twinkle: 'twinkle 2s infinite ease-in-out', // Star twinkle animation
        shoot: 'shootingStar 2s linear infinite', // Shooting star animation
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: "0.8" },
          '50%': { opacity: "1" },
        },
        shootingStar: {
          '0%': { transform: 'translate3d(-100vw, -100vh, 0)' },
          '100%': { transform: 'translate3d(100vw, 100vh, 0)' },
        },
      },
      fontFamily: {
        bradley: ['"Bradley Hand ITC"', 'cursive'], // Custom font
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
