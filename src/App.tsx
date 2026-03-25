import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="max-w-2xl text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
          O início do Jardim Digital
        </h1>
        <p className="text-lg md:text-xl text-neutral-400">
          React, Tailwind CSS v4, Biome e Framer Motion integrados e funcionando
          perfeitamente.
        </p>
      </motion.div>
    </div>
  )
}
