import { motion } from 'framer-motion'
import { useInView } from '../lib/use-in-view'

const experiences = [
  {
    role: 'Full-Stack Developer (Co-op)',
    company: 'JadeEd — Educational Facilities Explorer',
    period: 'Active Project',
    description: [
      'Developed data visualization platform for educational facilities across Canada using React + Spring Boot',
      'Integrated Leaflet maps with clustering and Recharts for pie/bar chart analytics',
      'Orchestrated multi-service deployment with Docker Compose and automated GitLab CI/CD pipeline',
    ],
    tags: ['React', 'Spring Boot', 'Docker Compose', 'GitLab CI/CD'],
  },
  {
    role: 'Real-Time Systems Developer',
    company: 'Service Health Dashboard',
    period: 'Active Project',
    description: [
      'Built real-time service monitoring with automated endpoint health checks using Node.js',
      'Implemented WebSocket-based live updates pushing check results to UI',
      'Created response time visualization with Chart.js and Dockerized deployment',
    ],
    tags: ['React', 'Node.js', 'WebSockets', 'Chart.js'],
  },
  {
    role: 'Mobile App Developer',
    company: 'Pro Job Tracker — Flutter',
    period: 'Active Project',
    description: [
      'Developed multi-platform job application tracker with SQLite persistence in Flutter',
      'Built dashboard with status tabs, calendar view, and fl_chart visualizations',
      'Supported Android, iOS, Windows, Linux, macOS, and Web from single codebase',
    ],
    tags: ['Flutter', 'Dart', 'SQLite', 'fl_chart'],
  },
  {
    role: 'Software Engineering Project',
    company: 'YATDL — Yet Another To-Do List',
    period: 'Active Project',
    description: [
      'Built full-stack to-do application with React frontend and Spring Boot REST API',
      'Implemented task filtering, color-coded status columns, and statistics dashboard',
      'Configured CI/CD pipeline with quality gates (JaCoCo, SpotBugs, Checkstyle) and Docker Compose deployment',
    ],
    tags: ['React', 'Spring Boot', 'Docker Compose', 'GitLab CI/CD'],
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
