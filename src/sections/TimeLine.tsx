import { motion } from 'framer-motion'
import { timeLineData } from '../data/timeLineData'

export const TimeLine = () => {
  return (
    <section className="min-h-screen py-24 px-6 max-w-4xl mx-auto flex flex-col justify-center">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-white"
      >
        <span>Projetos & Engenharia</span>
      </motion.h2>

      <div className="space-y-12">
        {timeLineData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:bg-neutral-900 transition-colors"
          >
            <p className="text-neutral-500 mb-2 leading-relaxed text-sm">
              {item.data}
            </p>

            <h3 className="text-2xl font-semibold text-neutral-100 mb-3">
              {item.titulo}
            </h3>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              {item.descricao}
            </p>
            <div className="flex flex-wrap gap-3">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-neutral-950 border border-neutral-800 text-neutral-300 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
