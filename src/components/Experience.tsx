import { motion } from 'framer-motion'
import { useInView } from '../lib/use-in-view'

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'TechCorp Inc.',
    period: 'Jun 2026 - Present',
    description: [
      'Built and deployed microservices handling 10K+ RPM using Go and PostgreSQL',
      'Reduced API latency by 40% through query optimization and caching strategies',
      'Led migration of legacy monolith to event-driven architecture on AWS',
    ],
    tags: ['Go', 'PostgreSQL', 'AWS', 'Kubernetes'],
  },
  {
    role: 'Full-Stack Developer (Co-op)',
    company: 'StartupXYZ',
    period: 'Sep 2025 - Apr 2026',
    description: [
      'Developed React-based dashboard with real-time analytics using WebSockets',
      'Designed RESTful APIs with FastAPI, serving 50K+ daily active users',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
    ],
    tags: ['React', 'FastAPI', 'WebSockets', 'Docker'],
  },
  {
    role: 'Research Assistant',
    company: 'University AI Lab',
    period: 'Jan 2025 - Aug 2025',
    description: [
      'Researched transformer-based models for code generation tasks',
      'Published paper on efficient fine-tuning of LLMs at a workshop',
      'Developed evaluation framework for measuring code quality metrics',
    ],
    tags: ['PyTorch', 'Python', 'Transformers', 'NLP'],
  },
  {
    role: 'Teaching Assistant',
    company: 'University of Technology',
    period: 'Sep 2024 - Dec 2024',
    description: [
      'TA for Data Structures & Algorithms course with 120+ students',
      'Conducted weekly office hours and graded assignments',
      'Created supplemental learning materials improving pass rate by 15%',
    ],
    tags: ['Java', 'Python', 'Algorithms'],
  },
]

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section id="experience" ref={ref} className="py-20 sm:py-28 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-accent to-primary-400 md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="hidden md:block flex-1" />

              <div className="absolute left-4 md:left-1/2 top-1 w-4 h-4 -translate-x-1/2 rounded-full bg-primary-500 border-4 border-white dark:border-slate-900 z-10" />

              <div className={`flex-1 pl-10 md:pl-0 ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                <div className="glass rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                  <span className="text-sm font-mono text-primary-500">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                    {exp.role}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium mb-3">
                    {exp.company}
                  </p>
                  <ul className={`space-y-2 ${i % 2 === 0 ? 'md:text-left' : ''}`}>
                    {exp.description.map((item, j) => (
                      <li key={j} className="text-slate-600 dark:text-slate-400 text-sm flex gap-2">
                        <span className="text-primary-500 mt-1 flex-shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`flex flex-wrap gap-2 mt-4 ${i % 2 === 0 ? 'md:justify-start' : ''}`}>
                    {exp.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
