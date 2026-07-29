import { motion } from 'framer-motion'
import { insightsData } from '../data/insightsData'

export const Research = () => {
  return (
    <section className="min-h-screen py-24 px-6 max-w-4xl mx-auto flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span>Laboratório & Pesquisas</span>
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl font-light">
          texto de teste
        </p>
      </motion.div>

      <div className="relative border-l border-neutral-800 ml-4 md:ml-0">
        {insightsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-12 pl-8 relative group"
          >
            <div className="absolute w-3 h-3 bg-neutral-950 border-2 border-neutral-600 rounded-full -left-[6.5px] top-1.5 group-hover:border-neutral-300 group-hover:bg-white transition-all duration-300 shadow-[0_0_0_0_rgba(255,255,255,0)] group-hover:shadow-[0_0_10px_0_rgba(255,255,255,0.5)]" />

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-3">
              <span className="text-sm font-mono text-neutral-500 tracking-tight">
                {item.data}
              </span>
              <span className="hidden sm:inline text-neutral-700 text-xs px-2">
                •
              </span>
              <h3 className="text-lg font-medium text-neutral-200 group-hover:text-white transition-colors">
                {item.topico}
              </h3>
            </div>

            <p className="text-neutral-400 leading-relaxed max-w-2xl">
              {item.conteudo}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
