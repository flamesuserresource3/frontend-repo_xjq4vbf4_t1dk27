import { motion } from 'framer-motion';
import { Video, PenTool, Calculator, Server } from 'lucide-react';

const programs = [
  {
    title: 'Multimedia',
    icon: Video,
    color: 'from-blue-500 to-blue-600',
    desc:
      'Video production, editing, motion graphics, and content creation workflows using industry tools.',
  },
  {
    title: 'Graphic Design',
    icon: PenTool,
    color: 'from-yellow-400 to-[#efad06]',
    desc: 'Branding, layout, typography, and visual communication with practical design projects.',
  },
  {
    title: 'Accounting',
    icon: Calculator,
    color: 'from-blue-500 to-[#1764CE]',
    desc: 'Bookkeeping, financial reports, and accounting software practice for real cases.',
  },
  {
    title: 'Networking',
    icon: Server,
    color: 'from-blue-600 to-blue-700',
    desc: 'Network basics, routing, device configuration, and troubleshooting in lab simulations.',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">PKL Programs</h2>
          <p className="mt-3 text-gray-600">
            Choose a focus that matches your interests. Every program blends hands-on practice with
            mentorship and career-ready skills.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map(({ title, icon: Icon, color, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} text-white grid place-items-center shadow`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
