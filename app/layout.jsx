import './globals.css';

export const metadata = {
  title: { default: "ProjectPulse Technologies", template: "%s | ProjectPulse" },
  description: "Custom software, automation, and project systems that scale.",
  openGraph: {
    title: "ProjectPulse Technologies",
    images: [{ url: "/blog/thumb-automation-advantage.png", width: 1200, height: 630 }]
  },
  twitter: { card: "summary_large_image" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#0A0F1F] text-white">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 backdrop-blur bg-[#0A0F1F]/70 border-b border-white/10">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
              <a href="/" className="font-bold tracking-wide">ProjectPulse</a>
              <div className="flex gap-6 text-sm">
                <a href="/blog" className="hover:opacity-80">Insights</a>
                <a href="/hosting" className="hover:opacity-80">Hosting & Care</a>
                <a href="/about" className="hover:opacity-80">About</a>
                <a href="/contact" className="hover:opacity-80">Contact</a>
              </div>
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-cyan-200/80 space-y-1">
              <div>© {new Date().getFullYear()} ProjectPulse Technologies. All rights reserved.</div>
              <div><strong>Email us:</strong> <a className="underline" href="mailto:natemun@gmail.com">natemun@gmail.com</a></div>
              <div><strong>Office:</strong> Philadelphia, PA</div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}