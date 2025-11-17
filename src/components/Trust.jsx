import { motion } from 'framer-motion';
import { User, Users } from 'lucide-react';

const personas = [
  { title: 'The Planner', desc: 'Curates spots for trips and date nights.' },
  { title: 'The Foodie', desc: 'Saves every must-try restaurant from Reels.' },
  { title: 'The Concierge', desc: 'Shares lists with friends visiting the city.' },
];

export default function Trust() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 md:text-3xl"
            >
              Built for how you actually save places
            </motion.h3>
            <p className="mt-4 text-gray-600">Early interest from hundreds of planners, foodies, and creators.</p>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <Users className="h-5 w-5 text-blue-600" /> 1,200+ people joined the waitlist
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {personas.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-900">{p.title}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
