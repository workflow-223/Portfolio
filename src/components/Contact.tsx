import { motion } from 'framer-motion'
import { useInView } from '../lib/use-in-view'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2 })

  return (
    <section id="contact" ref={ref} className="py-20 sm:py-28 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="gradient-text">Get In Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto"
        >
          I'm currently open to internship opportunities and exciting projects.
          Whether you have a question or just want to say hi, feel free to reach out!
        </motion.p>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-slate-900 dark:text-white">Email</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">alics242@outlook.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-slate-900 dark:text-white">Location</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Mississauga, ON</p>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              {[
                { name: 'GitHub', url: 'https://github.com/workflow-223' },
                { name: 'Resume', url: `${import.meta.env.BASE_URL}Resume.pdf` },
              ].map(platform => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-slate-500 dark:text-slate-400 hover:text-primary-500 flex items-center justify-center transition-all duration-200"
                >
                  {platform.name[0]}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3 glass rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-5"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-500">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Feel free to send me an email! I'll get back to you as soon as possible.
            </p>
            <a
              href="mailto:alics242@outlook.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-all duration-200 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
