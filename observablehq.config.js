// See https://observablehq.com/framework/config for documentation.
export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "Clear Picture SA",
  description: "Helping industrial teams build displays that show what matters, when it matters  — using Situation Awareness (SA) design principles.",

  pages: [
    { name: "Home", path: "index" },
    {
      name: "SA Concepts",
      pages: [
        { name: "Overview", path: "sa-principles/index" },
        { name: "Information Timeliness", path: "sa-principles/information-timeliness" },
        { name: "Deviation", path: "sa-principles/deviation" },
        { name: "Classification", path: "sa-principles/chunking" },
        { name: "ETA", path: "sa-principles/eta" },
        { name: "Data Confidence", path: "sa-principles/dataconfidence" }
      ]
    },
        {
      name: "SA Design Patterns",
      pages: [
        { name: "Overview", path: "sa-design-patterns/index" },
        { name: "User-Driven & Flexibility", path: "sa-design-patterns/ds1" },
        { name: "High-Level & Drill-Down", path: "sa-design-patterns/ds2" },
        { name: "Multi-Asset Overview", path: "sa-design-patterns/ds3" },
        { name: "Embedded Context", path: "sa-design-patterns/ds4" }
      ]
    },
  { name: "Implemented Designs", path: "implemented-designs/implementeddesigns" },
  { name: "SA Enemies", path: "others/saenemies" },
  { name: "Did you know...", path: "sa-principles/didyouknow" },
  { name: "Daily Moments of SA", path: "sa-principles/dailymomentssa" },
  { name: "Awareness Futures", path: "others/awareness_futures" },
  { name: "SA Vendor Listing", path: "platform-support/sa-vendor-listing" },
  {
      name: "Approach",
      pages: [
        { name: "Overview", path: "design-approach/introduction" },
        //{ name: "SA-Tools Design Services", path: "design-approach/sa-tools-design-services" },
        //{ name: "Vendor Participation & Feedback", path: "design-approach/vendor-participation" }
      ]
    },
    {
      name: "About",
      pages: [
        { name: "Clear Picture SA", path: "about/index" },
        { name: "Team", path: "about/team/index" },
        { name: "Abel Padilla", path: "about/team/abel-padilla" }
      ]
    }
  ],

  // Content to add to the head of the page, e.g. for a favicon:
head: `
<script defer data-domain="framework.clearpicturesa.com" src="https://plausible.io/js/script.outbound-links.js"></script>
<script>window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }</script>
<link rel="icon" href="observable.png" type="image/png" sizes="32x32">
<style id="force-light-theme">
  :root,
  html[data-theme="dark"],
  body[data-theme="dark"],
  .theme-dark {
    background-color: #ffffff !important;
    color: #222222 !important;
    --color-text: #222222 !important;
    --color-heading: #222222 !important;
    --color-foreground: #222222 !important;
    --color-background: #ffffff !important;
    --color-border: #dddddd !important;
    --color-link: #1a0dab !important;
  }

  html[data-theme="dark"] a,
  .theme-dark a {
    color: #1a0dab !important;
  }

  /* Force heading color */
  h1, h2, h3, h4, h5, h6 {
    color: #222222 !important;
    font-weight: 700 !important;
  }

  html[data-theme="dark"] h1,
  html[data-theme="dark"] h2,
  html[data-theme="dark"] h3,
  html[data-theme="dark"] h4,
  html[data-theme="dark"] h5,
  html[data-theme="dark"] h6,
  .theme-dark h1,
  .theme-dark h2,
  .theme-dark h3,
  .theme-dark h4,
  .theme-dark h5,
  .theme-dark h6 {
    color: #222222 !important;
    font-weight: 700 !important;
  }

  /* Observable variable overrides */
  :root {
    --color-heading: #222222 !important;
    --theme-heading: #222222 !important;
  }

  /* ✅ Fix table header and body cell color */
  th, td {
    color: #222222 !important;
  }

  html[data-theme="dark"] th,
  html[data-theme="dark"] td,
  .theme-dark th,
  .theme-dark td {
    color: #222222 !important;
  }

  /* ✅ Fix muted/secondary style in tables and labels */
  .markdown-body .muted,
  .markdown-body .secondary,
  .theme-dark .muted,
  .theme-dark .secondary {
    color: #222222 !important;
  }

  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.dataset.theme = "light";
  });
</script>
`,

  // The path to the source root.
  root: "src"
};