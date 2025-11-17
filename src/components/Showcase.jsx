import { motion } from 'framer-motion';

export default function Showcase() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 md:text-3xl"
            >
              Social to list, in seconds
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 text-gray-600"
            >
              Paste posts, drop screenshots, or forward links. Locat8 detects venues, maps addresses, and saves everything to a list you can sort and share.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-lg">
              <div className="aspect-[9/16] w-full rounded-xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="h-16 rounded-lg bg-gray-100" />
                <div className="h-16 rounded-lg bg-gray-100" />
                <div className="h-16 rounded-lg bg-gray-100" />
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-2 -z-0 blur-2xl bg-gradient-to-tr from-blue-400/20 via-fuchsia-400/20 to-emerald-400/20 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
