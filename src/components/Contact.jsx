import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Globe, Send } from 'lucide-react';

export default function Contact() {
  return (
    <>
      {/* Activities */}
      <section id="activities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Activities</h2>
            <p className="mt-3 text-gray-600">
              A glimpse of student projects, workshops, and field activities during the internship.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="aspect-video rounded-lg overflow-hidden bg-white shadow"
              >
                <img
                  src={`https://source.unsplash.com/random/800x450?sig=${i}&education,students,computer`}
                  alt={`Internship activity ${i}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section id="registration" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Registration Info</h2>
            <p className="mt-3 text-gray-600">
              Follow these steps to join the PKL program. We welcome students from vocational and
              higher education backgrounds.
            </p>
            <ol className="mt-6 space-y-4">
              {[
                'Fill out the registration form and choose your program focus.',
                'Consultation & schedule confirmation via WhatsApp.',
                'Submit required documents and complete payment (if applicable).',
                'Start your internship and meet your mentor!',
              ].map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#efad06] text-gray-900 font-bold grid place-items-center text-xs">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#1764CE] px-6 py-3 text-white font-semibold shadow hover:bg-blue-700"
              >
                <MessageCircle className="w-5 h-5" /> Register Now via WhatsApp
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 rounded-md border border-[#1764CE]/30 px-6 py-3 text-[#1764CE] font-semibold hover:bg-blue-50"
              >
                <Send className="w-5 h-5" /> Ask a Question
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-xl p-6 border border-blue-100">
            <h3 className="font-semibold text-gray-900">Requirements</h3>
            <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-2">
              <li>Active student letter from school/university</li>
              <li>Curriculum vitae / portfolio (for design & multimedia)</li>
              <li>Copy of ID / student card</li>
              <li>Commitment to schedule and program rules</li>
            </ul>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900">Program Duration</h4>
              <p className="mt-2 text-gray-700">Flexible 1–6 months based on school requirements.</p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-900">Mentoring & Assessment</h4>
              <p className="mt-2 text-gray-700">
                Weekly evaluations, project-based assessment, and final certificate of completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Contact</h2>
            <p className="mt-3 text-gray-600">Reach us for consultation, partnership, or registration.</p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1764CE] mt-1" />
                <p className="text-gray-700">Jl. Example No. 123, Kota, Provinsi, Indonesia</p>
              </div>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-[#1764CE] mt-1" />
                <p className="text-gray-700 group-hover:underline">+62 812-3456-7890 (WhatsApp)</p>
              </a>
              <a href="mailto:info@lkpindojaya.id" className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-[#1764CE] mt-1" />
                <p className="text-gray-700 group-hover:underline">info@lkpindojaya.id</p>
              </a>
              <a href="https://lkpindojaya.id" target="_blank" rel="noreferrer" className="flex items-start gap-3 group">
                <Globe className="w-5 h-5 text-[#1764CE] mt-1" />
                <p className="text-gray-700 group-hover:underline">lkpindojaya.id</p>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md bg-[#1764CE] px-6 py-3 text-white font-semibold shadow hover:bg-blue-700"
              >
                Contact via WhatsApp
              </a>
              <a
                href="#registration"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center rounded-md border border-[#1764CE]/30 px-6 py-3 text-[#1764CE] font-semibold hover:bg-blue-50"
              >
                View Registration Info
              </a>
            </div>
          </div>

          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow border border-blue-100 bg-white">
            <iframe
              title="LKP Indo Jaya Location"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6841155574606!2d106.827153!3d-6.175392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e5f0b1dfbf%3A0x9f0b52b1f4e6f8f!2sMonas!5e0!3m2!1sen!2sid!4v1700000000000"
            />
          </div>
        </div>

        <div className="mt-16 text-center text-sm text-gray-600">
          © 2025 LKP Indo Jaya – Shaping Skilled and Professional Talent.
        </div>
      </section>
    </>
  );
}
