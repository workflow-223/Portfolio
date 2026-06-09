import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../lib/use-in-view'

const categories = ['All', 'Web', 'AI/ML', 'Systems', 'Mobile']

const projects = [
  {
    title: 'CodePilot AI',
    description:
      'AI-powered code assistant that provides real-time suggestions and refactoring using fine-tuned LLMs. Integrated with VS Code as an extension.',
    image: '🤖',
    tags: ['Python', 'PyTorch', 'TypeScript', 'VS Code API'],
    category: 'AI/ML',
    github: '#',
    demo: '#',
  },
  {
    title: 'CloudScale',
    description:
      'Auto-scaling platform for containerized microservices with intelligent load balancing and real-time monitoring dashboards.',
    image: '☁️',
    tags: ['Go', 'Kubernetes', 'React', 'Prometheus'],
    category: 'Systems',
    github: '#',
    demo: '#',
  },
  {
    title: 'DevConnect',
    description:
      'Social platform for developers featuring project collaboration, code reviews, and skill matching using graph-based recommendations.',
    image: '🌐',
    tags: ['Next.js', 'GraphQL', 'Neo4j', 'Tailwind'],
    category: 'Web',
    github: '#',
    demo: '#',
  },
  {
    title: 'NeuralNotes',
    description:
      'Smart note-taking app with automatic summarization, concept extraction, and spaced repetition using NLP models.',
    image: '🧠',
    tags: ['React Native', 'Python', 'Transformers', 'Firebase'],
    category: 'Mobile',
    github: '#',
    demo: '#',
  },
  {
    title: 'DistriDB',
    description:
      'Distributed key-value store with consistent hashing, replication, and fault tolerance built from scratch in Go.',
    image: '🗄️',
    tags: ['Go', 'gRPC', 'Raft', 'Docker'],
    category: 'Systems',
    github: '#',
    demo: '#',
  },
  {
    title: 'Visionlytics',
    description:
      'Computer vision pipeline for real-time object detection and tracking in video streams with a React dashboard.',
    image: '👁️',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'FastAPI'],
    category: 'AI/ML',
    github: '#',
    demo: '#',
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
                  <a
                    href={project.github}
                    className="text-slate-400 hover:text-primary-500 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={project.demo}
                    className="text-slate-400 hover:text-primary-500 transition-colors"
                    aria-label="Live demo"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
