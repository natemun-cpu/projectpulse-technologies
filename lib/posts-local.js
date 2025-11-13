/**
 * Local blog posts data source
 * Each post must have: slug, title, excerpt, date, thumbnail, tags, component (JSX)
 * Component should be a React Server Component
 */

// Example post component
const ExamplePost = () => (
  <article className="max-w-4xl mx-auto px-6 py-20">
    <h1 className="text-4xl font-bold">Welcome to ProjectPulse Blog</h1>
    <p className="mt-4 text-cyan-100/90">This is the default post. Replace it with your blog content.</p>
  </article>
);

export const posts = [
  {
    slug: "getting-started",
    title: "Getting Started with ProjectPulse",
    excerpt: "Learn how to build custom software and automation that scales.",
    date: new Date("2025-01-01"),
    thumbnail: "/blog/placeholder.png",
    tags: ["automation", "software", "systems"],
    component: ExamplePost
  }
  // Add more posts here following the same structure
];
