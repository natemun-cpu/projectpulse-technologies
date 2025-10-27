import { posts as localPosts } from "@/lib/posts-local";
import BlogCard from "@/components/blog/BlogCard";

export default async function BlogIndexPage() {
  const posts = localPosts;
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <p className="uppercase tracking-widest text-cyan-200/80 text-sm mb-2">Insights</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Ideas that <span className="text-transparent bg-clip-text gradient-hero">scale</span>
        </h1>
        <p className="mt-4 text-cyan-100/90">Automation, software, and systems that move business forward.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </div>
    </section>
  );
}