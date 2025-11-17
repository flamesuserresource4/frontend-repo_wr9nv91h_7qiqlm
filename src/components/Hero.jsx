import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Discover venues from social posts—organized by AI.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg leading-relaxed text-gray-700 md:max-w-xl"
            >
              Locat8 turns screenshots, links, and DMs into clean, searchable lists you can explore, plan with, and share—without the chaos.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8"
            >
              <WaitlistForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WaitlistForm() {
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      email: form.get('email'),
      name: form.get('name') || undefined,
      source: new URLSearchParams(window.location.search).get('utm_source') || 'landing',
    };

    try {
      const res = await fetch(`${backend}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data?.ok) {
        window.dispatchEvent(new CustomEvent('analytics', { detail: { type: 'signup', email: payload.email } }));
        alert('You\'re on the list! We\'ll be in touch soon.');
        e.currentTarget.reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      alert('Network error. Please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex w-full max-w-xl flex-col gap-3 rounded-xl bg-white/70 p-3 backdrop-blur-md ring-1 ring-black/5 shadow-sm">
      <div className="flex gap-2">
        <input name="email" type="email" required placeholder="Enter your email"
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
        <button type="submit" className="shrink-0 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30">
          Join waitlist
        </button>
      </div>
      <input name="name" type="text" placeholder="Your name (optional)" className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
      <p className="text-xs text-gray-500">By joining, you agree to receive occasional emails about Locat8. Unsubscribe anytime.</p>
    </form>
  );
}
