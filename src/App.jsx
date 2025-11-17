import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Trust from './components/Trust';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-30 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600" />
            <span className="font-semibold">Locat8</span>
          </div>
          <a href="#waitlist" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700">Join waitlist</a>
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
  // Minimal client-side analytics for key events
  React.useEffect(() => {
    const handler = (e) => {
      const detail = e.detail || {};
      fetch(`${backend}/api/analytics`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: detail.type || 'view', email: detail.email, page: window.location.pathname, source: new URLSearchParams(window.location.search).get('utm_source') || 'landing' })
      }).catch(() => {});
    };

    // Fire a view event
    window.dispatchEvent(new CustomEvent('analytics', { detail: { type: 'view' } }));

    window.addEventListener('analytics', handler);
    return () => window.removeEventListener('analytics', handler);
  }, []);
  return null;
}

export default App;