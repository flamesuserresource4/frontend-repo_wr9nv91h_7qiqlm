import { useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Trust from './components/Trust';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#EFEFEF] text-[#393E46]">
      <header className="sticky top-0 z-30 w-full border-b border-black/5 bg-[#EFEFEF]/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#393E46]" />
            <span className="font-semibold">Locat8</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#features" className="hidden sm:inline-flex rounded-lg border border-[#393E46]/30 px-4 py-2 text-sm font-semibold text-[#393E46] hover:border-[#393E46]">Learn more</a>
            <a href="#waitlist" className="rounded-lg bg-[#F96167] px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-95">Join waitlist</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Showcase />
        <Trust />
      </main>

      <Footer />

      <Analytics />
    </div>
  );
}

function Analytics() {
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
  useEffect(() => {
    const handler = (e) => {
      const detail = e.detail || {};
      fetch(`${backend}/api/analytics`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: detail.type || 'view', email: detail.email, page: window.location.pathname, source: new URLSearchParams(window.location.search).get('utm_source') || 'landing' })
      }).catch(() => {});
    };

    window.dispatchEvent(new CustomEvent('analytics', { detail: { type: 'view' } }));

    window.addEventListener('analytics', handler);
    return () => window.removeEventListener('analytics', handler);
  }, [backend]);
  return null;
}

export default App;
