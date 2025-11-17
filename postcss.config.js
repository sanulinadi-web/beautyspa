// PostCSS configuration: runs TailwindCSS and Autoprefixer.
// In production, cssnano is added for minification.
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production'
      ? [require('cssnano')({ preset: 'default' })]
      : [])
  ]
};
