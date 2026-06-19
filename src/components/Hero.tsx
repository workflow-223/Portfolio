import { TypeAnimation } from '../lib/type-animation'
import { motion } from 'framer-motion'
import Particles from './Particles'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Particles />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-slate-900 pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary-500 dark:text-primary-400 font-mono text-sm sm:text-base mb-4"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Ali Abdulmaksoud
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-500 dark:text-slate-400 mb-6"
          >
            <TypeAnimation
              strings={[
                'Computer Science Student',
                'Full-Stack Developer',
                'AI Enthusiast',
                'Problem Solver',
              ]}
              speed={80}
              deleteSpeed={50}
              pause={2000}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            4th-year CS student passionate about building elegant solutions
            to complex problems. Focused on full-stack development, machine
            learning, and creating impactful software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25 active:scale-95"
            >
              View My Work
            </a>
            <a
               href="mailto:alics242@outlook.com"
               className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl font-medium transition-all duration-200 hover:border-primary-500 hover:text-primary-500 active:scale-95"
             >
               Get In Touch
             </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute -bottom-48 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center"
          >
            <motion.div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
