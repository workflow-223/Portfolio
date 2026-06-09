import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-700/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Designed & Built by Alex Mitchell
        </p>

        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-500 transition-colors">
            GitHub
          </a>
          <a href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-500 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-500 transition-colors">
            Resume
          </a>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xs font-mono text-slate-400 dark:text-slate-500"
        >
          &copy; {new Date().getFullYear()} All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}
