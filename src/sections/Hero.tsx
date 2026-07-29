import { motion } from 'framer-motion'
import { Signature } from '../components/Signature'

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden -mt-15">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-3xl flex flex-col items-center text-center"
      >
        <div className="w-full flex justify-center mb-8">
          <Signature />
        </div>

        <h2 className="text-xl md:text-2xl text-neutral-400 mb-8 font-light">
          AI-Engineer & Estudante de Engenharia de Software.
        </h2>
        <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          Bem-vindo ao meu espaço profissional. Aqui você encontrará uma visão consolidada da minha trajetória, 
          além de projetos e soluções que venho desenvolvendo.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 'some' }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-15 left-1/2 -translate-x-1/2 text-neutral-500 animate-bounce"
      >
        ↓
      </motion.div>
    </section>
  )
}
