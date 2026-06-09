import { motion } from 'framer-motion'
import { useInView } from '../lib/use-in-view'

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'TypeScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'Go', level: 75 },
      { name: 'C++', level: 70 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'HTML / CSS', level: 92 },
      { name: 'Framer Motion', level: 78 },
    ],
  },
  {
    title: 'Backend & DevOps',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'FastAPI', level: 80 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'Docker / K8s', level: 72 },
      { name: 'AWS', level: 68 },
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'PyTorch', level: 82 },
      { name: 'TensorFlow', level: 70 },
      { name: 'NLP / Transformers', level: 75 },
      { name: 'Computer Vision', level: 65 },
    ],
  },
]

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.3 })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-sm font-mono text-primary-500">{level}%</span>
      </div>
      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent"
        />
      </div>
    </div>
  )
}

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
          Technologies and tools I've worked with throughout my academic and professional journey.
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
              {cat.skills.map((skill, j) => (
                <SkillBar key={skill.name} {...skill} index={j} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
