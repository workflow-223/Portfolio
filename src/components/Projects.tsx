import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../lib/use-in-view'

const categories = ['All', 'Web', 'Systems', 'Mobile', 'Game', 'CLI']

const projects = [
  {
    title: 'AI Chat Dashboard',
    description:
      'Browser-based AI chat interface with conversation management, simulated AI responses with streaming animation, and dark/light mode toggling.',
    image: '💬',
    tags: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    category: 'Web',
    demo: 'https://workflow-223.github.io/ai-chat-dashboard/',
  },
  {
    title: 'Contact Manager',
    description:
      'Full-stack contact management app with a CLI tool, Tkinter GUI, and REST API HTTP server for managing contacts with phone/email validation.',
    image: '📇',
    tags: ['Python', 'Tkinter', 'REST API', 'JSON'],
    category: 'Systems',
    demo: 'https://workflow-223.github.io/contact-manager/',
  },
  {
    title: 'JadeEd Explorer',
    description:
      'Data visualization platform mapping educational facilities across Canada with Leaflet maps, Recharts analytics, multi-service Docker orchestration, and CI/CD pipelines.',
    image: '🗺️',
    tags: ['React', 'Spring Boot', 'Docker Compose', 'GitHub Actions'],
    category: 'Web',
    demo: 'https://workflow-223.github.io/educational-facilities-landscape/',
  },
  {
    title: 'Number Guessing Game',
    description:
      'Classic "guess the number" web game with a FastAPI backend, proximity-based hint system, and session management via UUIDs.',
    image: '🔢',
    tags: ['Python', 'FastAPI', 'HTML/CSS/JS', 'REST API'],
    category: 'Web',
    demo: 'https://workflow-223.github.io/number-guessing-game/',
  },
  {
    title: "Pirate's Bounty",
    description:
      'HTML5 Canvas arcade game where players pilot a pirate ship through treacherous seas, battling enemy AI ships and collecting treasure across waves.',
    image: '🏴‍☠️',
    tags: ['JavaScript', 'Canvas 2D', 'Game AI', 'HTML5'],
    category: 'Game',
    demo: 'https://workflow-223.github.io/pirate-game/',
  },
  {
    title: 'Pro Job Tracker',
    description:
      'Cross-platform Flutter app for tracking job applications with status stages, dashboards, calendar view, and charts for visualizing progress.',
    image: '💼',
    tags: ['Flutter', 'Dart', 'SQLite', 'fl_chart'],
    category: 'Mobile',
    demo: 'https://workflow-223.github.io/ProJobTracker/',
  },
  {
    title: 'Service Health Dashboard',
    description:
      'Real-time monitoring dashboard that tracks web service uptime with automated health checks, live WebSocket updates, and response time charts.',
    image: '📊',
    tags: ['React', 'Node.js', 'WebSockets', 'Docker'],
    category: 'Systems',
    demo: 'https://workflow-223.github.io/service-health-dashboard/',
  },
  {
    title: 'Price Watch Scraper',
    description:
      'CLI tool for monitoring product prices on web pages with configurable scraping intervals, CSS selector parsing, and email alerts on price drops.',
    image: '🏷️',
    tags: ['Python', 'BeautifulSoup', 'SMTP', 'CLI'],
    category: 'CLI',
    demo: 'https://workflow-223.github.io/web-scraper/',
  },
  {
    title: 'YATDL',
    description:
      'Full-stack to-do list application with task filtering, color-coded status columns, CI/CD quality gates, and multi-container Docker deployment.',
    image: '✅',
    tags: ['React', 'Spring Boot', 'Docker Compose', 'GitHub Actions'],
    category: 'Web',
    demo: 'https://workflow-223.github.io/YATDL/',
  },
]

export default function Projects() {
  const [active, setActive] = useState('All')
  const { ref, inView } = useInView({ threshold: 0.1 })

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" ref={ref} className="py-20 sm:py-28 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="gradient-text">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto"
        >
          A collection of projects that showcase my skills and passion for building impactful software.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'text-slate-600 dark:text-slate-400 hover:text-primary-500 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group relative glass rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{project.image}</div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="text-slate-400 hover:text-primary-500 transition-colors"
                      aria-label="Live demo"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
