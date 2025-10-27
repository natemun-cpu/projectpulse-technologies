export default function HomePage() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 opacity-30 gradient-hero" />
      <div className="relative max-w-5xl mx-auto px-6">
        <p className="uppercase tracking-widest text-cyan-200/80 text-sm mb-3">Founder & CEO — ProjectPulse Technologies</p>
        <h1 className="text-5xl font-extrabold leading-tight">
          Systems that scale your business.
        </h1>
        <p className="mt-5 text-lg text-cyan-100/90 max-w-3xl">
          Custom software, workflow automation, and project management systems — built for velocity and reliability.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="mailto:natemun@gmail.com" className="px-6 py-3 rounded-2xl bg-white text-violet-700 font-semibold">Book a Consultation</a>
          <a href="/blog" className="px-6 py-3 rounded-2xl border border-white/20">Read Insights</a>
        </div>
      </div>
    </section>
  );
}