import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export const Footer = () => {
  const anoAtual = new Date().getFullYear()

  return (
    <footer className="w-full py-16 px-6 border-t border-neutral-800/50 mt-12 bg-[#000000]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto flex flex-col items-center text-center gap-10"
      >
        <div className="space-y-3">
          <h3 className="text-xl font-medium text-red-50">
            Feito com 💙 por Danilo Tavares
          </h3>
          <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
            Este espaço digital está em constante evolução. Sinta-se à vontade para conectar-se para oportunidades, 
            discussões técnicas ou colaborações em projetos.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 text-neutral-500">
          <a
            href="https://github.com/danilotavares-dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Acessar meu perfil no GitHub"
          >
            <FiGithub className="w-8 h-8" />
          </a>

          <a
            href="https://linkedin.com/in/danilotavares-dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Acessar meu perfil no LinkedIn"
          >
            <FiLinkedin className="w-8 h-8" />
          </a>

          <a
            href="mailto:danilotavarespr00@gmail.com"
            className="hover:text-white transition-colors"
            aria-label="Me enviar um e-mail"
          >
            <FiMail className="w-8 h-8" />
          </a>
        </div>

        <div className="text-neutral-600 text-xs flex flex-col gap-1 mt-4">
          <span>© {anoAtual} Danilo Tavares.</span>
        </div>
      </motion.div>
    </footer>
  )
}
