/* Custom styles and simple animation helpers.
   Uses Tailwind for most styling; put overrides and additional animations here. */

/* Smooth scrolling for browsers that support it */
html {
  scroll-behavior: smooth;
}

/* Animation helper classes used by JS */
.fade-in {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 600ms ease, transform 600ms ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Slight card hover for feature / testimonial / pricing cards */
.feature-card,
.testimonial-card,
.pricing-card {
  /* enabling stacking context for transform */
  will-change: transform;
}

/* Simple responsive tweaks (can be extended) */
@media (max-width: 640px) {
  /* ensure hero text doesn't overflow on very small screens */
  h1 { font-size: 1.6rem; }
}

/* Utility: visually hidden, for accessibility messages (if needed) */
.visually-hidden {
  position: absolute !important;
  height: 1px; width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
}
