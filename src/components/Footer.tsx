import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-700/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Designed & Built by Ali Abdulmaksoud
        </p>

        <div className="flex items-center gap-6">
          <a href="https://github.com/workflow-223" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-500 transition-colors">
            GitHub
          </a>
          <a href={`${import.meta.env.BASE_URL}Resume.pdf`} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-500 transition-colors">
            Resume
          </a>
        </div>

      </div>
    </footer>
  )
}
