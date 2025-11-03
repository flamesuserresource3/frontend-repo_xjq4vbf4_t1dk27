import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              <span className="text-[#1764CE]">PKL Program</span> with LKP Indo Jaya
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-prose">
              Gain real-world experience through structured internships designed to develop
              technical and professional skills. Learn, build, and grow with mentorship and
              industry-relevant projects.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#programs"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('programs');
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-flex items-center rounded-md bg-[#1764CE] px-6 py-3 text-white font-semibold shadow hover:bg-blue-700"
              >
                See Programs
              </a>
              <a
                href="#registration"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('registration');
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-flex items-center rounded-md border border-[#1764CE]/30 px-6 py-3 text-[#1764CE] font-semibold hover:bg-blue-50"
              >
                How to Register
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-xl bg-white shadow-lg ring-1 ring-black/5 overflow-hidden">
              <img
                alt="Students collaborating during internship"
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#efad06]/30 blur-2xl" />
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-[#1764CE]/20 blur-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
