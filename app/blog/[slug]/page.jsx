import { posts as localPosts } from "@/lib/posts-local";

export async function generateStaticParams() {
  return localPosts.map(p => ({ slug: p.slug }));
}

export default async function BlogPage({ params }) {
  const post = localPosts.find(p => p.slug === params.slug);
  if (!post) return <div className="max-w-4xl mx-auto px-6 py-20">Not found</div>;
  const Component = post.component;
  return <Component />;
}