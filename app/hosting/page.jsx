export default function HostingPage() {
  const tiers = [
    { name: "Launch", price: "$79/mo", setup: "$450", features: ["SSL + daily backups", "WP hardening & updates", "Email support (2 biz days)"] },
    { name: "Growth", price: "$179/mo", setup: "$950", features: ["Everything in Launch", "CDN + staging", "Monthly report + 1h dev", "24h response"] },
    { name: "Scale", price: "$399/mo", setup: "$1,900", features: ["Dedicated server (Cloudways)", "WAF + 7d retention", "3h dev time", "Priority support"] }
  ];
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <p className="uppercase tracking-widest text-cyan-200/80 text-sm mb-2">Hosting & Care</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Reliable sites. Proactive maintenance.</h1>
        <p className="mt-3 text-cyan-100/90">White‑label hosting for clients, with real SLAs and engineering behind it.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map(t => (
          <div key={t.name} className="rounded-2xl border border-white/10 card-sheen p-6 flex flex-col">
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <div className="mt-2 text-3xl">{t.price}</div>
            <div className="text-cyan-200/80">Setup {t.setup}</div>
            <ul className="mt-4 space-y-2 text-cyan-100/90">
              {t.features.map(f => <li key={f}>• {f}</li>)}
            </ul>
            <a href="mailto:natemun@gmail.com" className="mt-6 px-5 py-3 rounded-2xl bg-white text-violet-700 font-semibold text-center">Book a Consultation</a>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <p className="text-cyan-200/80">Need Enterprise? Get a custom architecture and SLA.</p>
        <a href="mailto:natemun@gmail.com" className="underline">Contact us</a>
      </div>
    </section>
  );
}