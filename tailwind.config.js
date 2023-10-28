/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          600: '#9B84F8',
        },
        gray: {
          900: '#191919',
        },
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
        newyork: ['var(--font-newyork)'],
      },
      backgroundImage: {
        'cloud-pattern': "url('../assets/images/cloud.png')",
        'star-pattern': "url('../assets/images/stars.png')",
        sample: "url('../assets/images/sample.png')",
      },
    },
  },
  plugins: [
    require('tailwindcss-safe-area'),
    require('tailwind-scrollbar-hide'),
  ],
};
