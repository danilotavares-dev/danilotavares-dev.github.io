import { motion } from 'framer-motion'
import { cultureData } from '../data/cultureData'

const categoryStyles: Record<string, { borda: string; texto: string }> = {
  LIVRO: { borda: 'border-blue-500/30', texto: 'text-blue-400' },
  FILME: { borda: 'border-red-500/30', texto: 'text-red-400' },
  SERIE: { borda: 'border-orange-500/30', texto: 'text-orange-400' },
  OUTROS: { borda: 'border-yellow-500/30', texto: 'text-yellow-400' },
}

export const Culture = () => {
  return (
    <section className="min-h-screen py-24 px-6 max-w-5xl mx-auto flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span>Cultura & Referências</span>
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl font-light">
          Livros e referências técnicas que acompanham a minha jornada em
          engenharia e tecnologia.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cultureData.map((item, index) => {
          const estilos = categoryStyles[item.categoria] || {
            borda: 'border-neutral-500/30',
            texto: 'text-neutral-400',
          }

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`bg-neutral-900/40 backdrop-blur-sm border ${estilos.borda} p-8 rounded-2xl hover:bg-neutral-800/50 transition-colors duration-300 group`}
            >
              <span
                className={`text-sm font-medium tracking-wider uppercase mb-2 block ${estilos.texto}`}
              >
                {item.categoria}
              </span>
              <h3 className="text-2xl font-semibold text-neutral-100 mb-3 group-hover:text-white transition-colors">
                {item.titulo}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {item.descricao}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
