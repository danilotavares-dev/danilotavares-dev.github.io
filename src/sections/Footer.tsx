import { motion } from 'framer-motion'

export const Footer = () => {
  const anoAtual = new Date().getFullYear()

  return (
    <footer className="w-full py-16 px-6 border-t border-neutral-800/50 mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8"
      >
        <div className="space-y-3">
          <h3 className="text-xl font-medium text-red-400">
            Obrigado por explorar.
          </h3>
          <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
            Este jardim digital está sempre em cultivo. Sinta-se à vontade para
            se conectar para trocarmos ideias sobre código, tecnologia, ou
            apenas para dar um "oi".
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/danilotavares-dev"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 hover:text-white transition-colors text-sm font-mono tracking-wider"
          >
            [ GitHub ]
          </a>
          <a
            href="https://linkedin.com/in/danilotavares-dev"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 hover:text-white transition-colors text-sm font-mono tracking-wider"
          >
            [ LinkedIn ]
          </a>
          <a
            href="mailto:danilotavarespr00@gmai.com"
            className="text-neutral-500 hover:text-white transition-colors text-sm font-mono tracking-wider"
          >
            [ E-mail ]
          </a>
        </div>

        <div className="text-neutral-600 text-xs flex flex-col gap-1">
          <span>© {anoAtual} Danilo Tavares.</span>
        </div>
      </motion.div>
    </footer>
  )
}
