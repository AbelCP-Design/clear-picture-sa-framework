// See https://observablehq.com/framework/config for documentation.
export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "Clear Picture SA Framework",
  description: "Helping industrial teams build displays that show what matters, when it matters  — using Situation Awareness (SA) design principles.",

pages: [
    { name: "Home", path: "index" },
    { name: "SA Principles", pages: [
      { name: "Overview", path: "sa-principles/index" },
      { name: "Information Timeliness", path: "sa-principles/information-timeliness" }      
    ]},
    { name: "SA Principles Support", path: "platform-support/sa-principles-support" },   
    { name: "Design Approach", pages: [
      { name: "Introduction", path: "design-approach/introduction" },
      { name: "Methodology", path: "design-approach/methodology" },
      { name: "Vendor Participation & Feedback", path: "design-approach/vendor-participation" }
    ]},
    { name: "About", pages: [
      { name: "Clear Picture", path: "about/index" },
      { name: "Team", path: "about/team/index" },
      { name: "Abel Padilla", path: "about/team/abel-padilla" }
    ]},
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',

  // The path to the source root.
  root: "src",

  // Some additional configuration options and their defaults:
  // theme: "default", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  // footer: "Built with Observable.", // what to show in the footer (HTML)
  // sidebar: true, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  // search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  // preserveExtension: false, // drop .html from URLs
  // preserveIndex: false, // drop /index from URLs
};
