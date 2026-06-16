import { motion } from 'framer-motion'
import { useInView } from '../lib/use-in-view'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'Python', 'Java', 'Dart', 'HTML / CSS'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Flutter', 'Canvas / WebGL', 'Tkinter'],
  },
  {
    title: 'Backend & DevOps',
    skills: ['Node.js', 'Spring Boot', 'FastAPI', 'Docker / Compose', 'GitHub Actions'],
  },
  {
    title: 'Tools & Frameworks',
    skills: ['REST API', 'WebSockets', 'SQLite', 'CLI'],
  },
]

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.05 })

  return (
    <section id="skills" ref={ref} className="py-20 sm:py-28 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="gradient-text">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto"
        >
          Technologies featured across the projects in this portfolio.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-500" />
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.15 + j * 0.05 }}
                    className="px-4 py-2 text-sm font-medium rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800/50"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
