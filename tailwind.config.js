/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          600: '#a45cff',
        },
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
        newyork: ['var(--font-newyork)'],
      },
    },
  },
  plugins: [],
};
