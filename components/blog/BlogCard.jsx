export default function BlogCard({ post }) {
  return (
    <a href={`/blog/${post.slug}`} className="group relative rounded-2xl overflow-hidden border border-white/10 card-sheen">
      <div className="aspect-[16/9] bg-black/30">
        <img src={post.thumbnail} alt="" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"/>
      </div>
      <div className="p-5">
        <div className="text-xs uppercase tracking-wide text-cyan-300/80">
          {new Date(post.date).toLocaleDateString()}
        </div>
        <h3 className="mt-1 text-lg font-semibold leading-snug">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-cyan-100/90">{post.excerpt}</p>
        <div className="mt-4 flex gap-2 flex-wrap">
          {post.tags?.slice(0,3).map(t => (
            <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-white/10 border border-white/10">{t}</span>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-violet-700/20 to-cyan-400/20" />
    </a>
  );
}