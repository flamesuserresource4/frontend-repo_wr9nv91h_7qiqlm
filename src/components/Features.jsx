import { motion } from 'framer-motion';
import { MapPin, ListChecks, Share2, Sparkles } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'AI-powered discovery',
    desc: 'Drop in screenshots or links from social and let Locat8 identify venues automatically.'
  },
  {
    icon: ListChecks,
    title: 'Organized lists',
    desc: 'Turn inspiration into tidy, searchable collections for trips, date nights, and more.'
  },
  {
    icon: Share2,
    title: 'Made to share',
    desc: 'Collaborate with friends and swap lists in a tap. Build the perfect plan together.'
  },
  {
    icon: Sparkles,
    title: 'Smart picks',
    desc: 'Get recommendations based on your tastes, context, and what’s trending.'
  },
];

export default function Features() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 md:text-4xl"
        >
          From chaos to curated
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <f.icon className="h-6 w-6 text-blue-600" />
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
