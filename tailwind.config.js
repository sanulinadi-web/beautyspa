// Tailwind configuration. The `content` key ensures unused CSS is purged.
// Add any additional paths where Tailwind classes might appear.
module.exports = {
  content: [
    './index.html',
    './src/**/*.css',
    './js/**/*.js',
    './**/*.html'
  ],
  theme: {
    extend: {
      // Add brand colors or other theme extensions here
    }
  },
  plugins: []
};
