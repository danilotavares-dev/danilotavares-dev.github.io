import { motion } from 'framer-motion'
import { Signature } from '../components/Signature'

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-3xl text-center"
      >
        <Signature />
        <h2 className="text-xl md:text-2xl text-neutral-400 mb-8 font-light">
          Desenvolvedor Full-Stack & Estudante de Engenharia de Software.
        </h2>
        <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          Bem-vindo ao meu jardim digital. Um espaço informal para documentar
          meus projetos, ideias e o que mais estiver na minha cabeça.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 'some' }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 animate-bounce"
      >
        ↓
      </motion.div>
    </section>
  )
}
