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
        { name: "Deviation", path: "sa-principles/deviation" }
      ]
    },
    { name: "SA Vendor Listing", path: "platform-support/sa-vendor-listing" },
    {
      name: "Design Approach",
      pages: [
        { name: "Introduction", path: "design-approach/introduction" },
        { name: "Methodology", path: "design-approach/methodology" },
        { name: "Vendor Participation & Feedback", path: "design-approach/vendor-participation" }
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