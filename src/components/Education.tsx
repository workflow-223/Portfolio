import { motion } from 'framer-motion'
import { useInView } from '../lib/use-in-view'

const education = [
  {
    degree: 'B.Sc. in Computer Science',
    school: 'University of Technology',
    period: '2023 - 2027',
    gpa: '3.85 / 4.0',
    details: [
      'Dean\'s List: Fall 2024, Spring 2025, Fall 2025',
      'Relevant Coursework: Machine Learning, Distributed Systems, Compilers, Computer Vision',
      'President of Computer Science Student Association',
      'Teaching Assistant for Data Structures & Algorithms (2 semesters)',
    ],
  },
  {
    degree: 'High School Diploma',
    school: 'Science & Technology Academy',
    period: '2019 - 2023',
    gpa: '4.0 / 4.0',
    details: [
      'Valedictorian',
      'USACO Gold Division',
      'AP Scholar with Distinction',
      'Founder of Coding Club',
    ],
  },
]

const courses = [
  'Machine Learning', 'Distributed Systems', 'Compilers', 'Computer Vision',
  'Operating Systems', 'Database Systems', 'Algorithms', 'Networking',
  'Software Engineering', 'AI', 'Cryptography', 'Graphics',
]

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.15 })

  return (
    <section id="education" ref={ref} className="py-20 sm:py-28 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="gradient-text">Education</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="glass rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-primary-500 font-medium">{edu.school}</p>
                </div>
                <span className="text-sm font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
                  {edu.period}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm rounded-lg font-medium">
                <span>🎓</span>
                <span>{edu.gpa}</span>
              </div>

              <ul className="space-y-2">
                {edu.details.map((detail, j) => (
                  <li key={j} className="text-slate-600 dark:text-slate-400 text-sm flex gap-2">
                    <span className="text-primary-500 mt-1">▹</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-center text-slate-900 dark:text-white mb-6">
            Relevant Coursework
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {courses.map((course, i) => (
              <motion.span
                key={course}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                className="glass px-4 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-500 hover:border-primary-500/30 transition-all duration-200 cursor-default"
              >
                {course}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
