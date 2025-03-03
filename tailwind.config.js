// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './docs/**/*.{md,mdx}',
      './blog/**/*.{md,mdx}',
    ],
    theme: {
      extend: {
        backgroundImage: {
          'sukuna': "url('/img/sukuna.png')",
          'cube': "url('/img/cube.png')",
        },
      },
    },
    darkMode: 'class', // Enable dark mode
    plugins: [],
  };