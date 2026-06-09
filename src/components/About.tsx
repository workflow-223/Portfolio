import { motion } from 'framer-motion'
import { useInView } from '../lib/use-in-view'

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    label: 'Languages',
    items: 'TypeScript, Python, Java, C++, Go',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    label: 'Frameworks',
    items: 'React, Next.js, Node.js, FastAPI, PyTorch',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: 'Interests',
    items: 'AI/ML, Distributed Systems, Cloud Computing',
  },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2 })

  return (
    <section id="about" ref={ref} className="py-20 sm:py-28 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="gradient-text">About Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent rounded-3xl rotate-6 opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent rounded-3xl rotate-3 opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-primary-100 to-accent/30 dark:from-primary-900/50 dark:to-accent/10 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-700">
                    <span className="text-8xl">👨‍💻</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-5"
          >
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              I'm a fourth-year Computer Science student at{' '}
              <span className="text-primary-500 font-medium">University of Technology</span>,
              expected to graduate in May 2027. My journey in tech started with
              building simple websites and has since evolved into developing
              full-scale applications and exploring the frontiers of AI.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source
              projects, participating in hackathons, or diving into research
              papers on machine learning and distributed systems.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <span className="text-primary-500">🎓</span>
                <span>4th Year CS Student</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <span className="text-primary-500">📍</span>
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <span className="text-primary-500">💼</span>
                <span>Open for Internships</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <span className="text-primary-500">🏆</span>
                <span>3x Hackathon Winner</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
              className="glass rounded-2xl p-6 text-center group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                {h.icon}
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                {h.label}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{h.items}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
