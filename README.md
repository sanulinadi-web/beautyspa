# Marketing Landing — Tailwind Build (PostCSS)

This project has been converted from Tailwind CDN usage to a PostCSS + Tailwind build workflow. The final CSS is produced at `dist/styles.css`.

## Setup

1. Install dependencies:
   npm install

2. Development (watch for changes and rebuild CSS):
   npm start
   This runs: `postcss src/input.css -o dist/styles.css --watch`

3. Production build (purges unused styles and minifies):
   npm run build
   This runs: `cross-env NODE_ENV=production postcss src/input.css -o dist/styles.css`

4. Serve your static site (use any static server or integrate into your deployment pipeline). The index.html references `dist/styles.css`.

## Notes

- Tailwind purge is controlled by `tailwind.config.js` content paths — add any additional template paths there.
- Custom CSS is located in `css/style.css` and is imported from `src/input.css`, so it is processed together.
- Contact form currently POSTs to a placeholder URL — replace with your backend endpoint.
- Replace placeholder images in the `index.html` or place local assets in an `images/` folder and update the `src` attributes.

## Troubleshooting

- If you need Tailwind plugins or theme extensions, update `tailwind.config.js`.
- For Windows users: `cross-env` is included to ensure NODE_ENV works consistently.
