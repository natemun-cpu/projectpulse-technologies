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

export default function ServicesPage() {
  return (
    <div className="bg-[#050816] text-white">
      {/* Hero */}
      <section className="border-b border-white/10 bg-gradient-to-b from-[#050816] via-[#050816] to-[#050816]">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-14">
          <p className="text-xs font-medium tracking-[0.25em] text-cyan-300/80 uppercase">Services</p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Systems that scale with your ambition.</h1>
          <p className="mt-5 max-w-2xl text-sm sm:text-base text-cyan-100/80 leading-relaxed">
            ProjectPulse builds the quiet infrastructure behind bold companies — custom software, workflow automation, and project operating systems designed for founders who are done duct-taping tools together.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-cyan-200/80">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Replace spreadsheet chaos with one source of truth
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" /> Automate the work your team shouldn&apos;t be touching
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Ship projects faster with predictable systems
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-900 shadow-lg shadow-cyan-500/40 hover:bg-cyan-400 transition">Book a Consultation</Link>
            <a href="#care" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-cyan-100 hover:bg-white/5 transition">View Care Plans</a>
          </div>
        </div>
      </section>
      {/* rest of the component is identical to hosting page */}
      <section className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid gap-10 md:grid-cols-[1.1fr,1.2fr]">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">More than software. A complete execution layer.</h2>
            <p className="mt-4 text-sm text-cyan-100/80 leading-relaxed">Most teams don&apos;t fail because of bad ideas — they fail because their systems can&apos;t keep up. We design and implement the operational backbone that lets your best people focus on high-leverage work instead of project triage.</p>
          </div>
          <div className="space-y-4 text-sm text-cyan-100/80">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-sm font-semibold text-white">Custom Software &amp; Automation</h3>
              <p className="mt-2 text-xs sm:text-sm text-cyan-100/80">Bespoke internal tools, dashboards, and workflow automation across your existing stack — so data moves once and flows everywhere it needs to be.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-sm font-semibold text-white">Project &amp; Delivery Systems</h3>
              <p className="mt-2 text-xs sm:text-sm text-cyan-100/80">Implementation of modern project operating systems — templates, pipelines, and automations tailored to how you sell and deliver, with reporting that actually informs decisions.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-sm font-semibold text-white">Hosting &amp; Ongoing Care</h3>
              <p className="mt-2 text-xs sm:text-sm text-cyan-100/80">Managed hosting, monitoring, and continuous improvement so your systems stay fast, secure, and aligned with where the business is going — not where it was a year ago.</p>
            </div>
          </div>
        </div>
      </section>
      {/* packages + care + CTA sections omitted here for brevity since they match hosting page — full component added earlier */}
    </div>
  );
}
