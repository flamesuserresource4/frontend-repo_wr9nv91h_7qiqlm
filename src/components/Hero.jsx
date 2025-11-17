import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#EFEFEF]/60 via-[#EFEFEF]/85 to-[#EFEFEF]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold tracking-tight text-[#393E46] sm:text-5xl lg:text-6xl"
            >
              AI that turns social posts into venue lists you can actually use.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg leading-relaxed text-[#393E46]/80 md:max-w-xl"
            >
              Energetic, urban, and built for the way you explore. Drop screenshots, paste links, and watch Locat8 curate your city.
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
        alert("You're on the list! We'll be in touch soon.");
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
        <input name="email" type="email" required placeholder="Email address"
          className="w-full rounded-lg border border-[#393E46]/30 bg-white px-4 py-3 text-[#393E46] placeholder:text-[#393E46]/50 focus:border-[#F96167] focus:outline-none focus:ring-2 focus:ring-[#F96167]/20" />
        <button type="submit" className="shrink-0 rounded-lg bg-[#F96167] px-5 py-3 font-semibold text-white shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#F96167]/30">
          Join waitlist
        </button>
      </div>
      <input name="name" type="text" placeholder="Your name (optional)" className="w-full rounded-lg border border-[#393E46]/30 bg-white px-4 py-2 text-[#393E46] placeholder:text-[#393E46]/50 focus:border-[#F96167] focus:outline-none focus:ring-2 focus:ring-[#F96167]/20" />
      <p className="text-xs text-[#393E46]/70">By joining, you agree to receive occasional emails about Locat8. Unsubscribe anytime.</p>
    </form>
  );
}
