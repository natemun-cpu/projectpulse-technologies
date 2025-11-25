import Link from "next/link";

export const metadata = {
  title: "Services | ProjectPulse",
  description:
    "Custom software, workflow automation, and project operating systems for founders who are done duct-taping tools together.",
};

const packages = [
  {
    name: "Launch System",
    tag: "For founders getting their delivery out of their head and into a system.",
    price: "From $4,500",
    billing: "one-time",
    highlights: [
      "Systems audit + strategy intensive",
      "Blueprint of your ideal delivery pipeline",
      "Implementation of a core project operating system",
      "1–2 high-impact automations (intake, handoff, or reporting)",
      "Training session + recorded Loom library for your team",
    ],
  },
  {
    name: "Scale System",
    tag: "For teams feeling the strain of growth and headcount.",
    price: "From $9,500",
    billing: "one-time",
    highlights: [
      "Everything in Launch System",
      "Multi-team delivery architecture (Sales → Ops → Success)",
      "Custom internal tools or dashboards",
      "3–5 automations across your existing stack",
      "Playbooks + documentation so new hires ramp faster",
    ],
    featured: true,
  },
  {
    name: "Systems Partner Retainer",
    tag: "For founders who want a fractional Head of Systems on speed dial.",
    price: "From $2,000",
    billing: "per month",
    highlights: [
      "Dedicated block of hours for improvements & experiments",
      "Ongoing automation tweaks as your offers evolve",
      "New dashboards, reports, and views as you scale",
      "Priority support for issues, questions, and small builds",
    ],
  },
];

const carePlans = [
  {
    name: "Essentials Care",
    price: "From $250",
    billing: "per month",
    highlights: [
      "Managed hosting for your site or internal tools",
      "Uptime monitoring & basic security updates",
      "Monthly status report",
    ],
  },
  {
    name: "Growth Care",
    price: "From $750",
    billing: "per month",
    highlights: [
      "Everything in Essentials Care",
      "Performance tuning & database housekeeping",
      "1 small feature or automation tweak each month",
    ],
  },
  {
    name: "Partner Care",
    price: "Custom",
    billing: "engagement",
    highlights: [
      "Priority roadmap & feature support",
      "Dedicated systems engineer on retainer",
      "Co-design of new internal tools & dashboards",
    ],
  },
];

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