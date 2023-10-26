/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};

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
        // sans: ['var(--font-pretendard)'],
      },
    },
  },
  plugins: [],
};
