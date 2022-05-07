module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 1.2s linear infinite',
        'bounce-slower': 'bounce 1.5s linear infinite',
      },
    },
  },
  plugins: [],
};
