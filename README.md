# Danilo Tavares |  WEB

Bem-vindo ao meu canto na internet. Este site funciona como um mural pessoal onde registro um pouco da minha trajetória na programação e na vida. Não é um espaço de atualizações diárias, mas sim um lugar onde venho, no meu próprio ritmo, para guardar projetos legais, o que ando aprendendo na faculdade de Engenharia de Software e algumas ideias soltas sobre tecnologia.

Visite o projeto online: **[danilotavares-dev.github.io](https://danilotavares-dev.github.io/)**

## Funcionalidades e Design

- **Assinatura Animada:** Efeito de desenho em tempo real (SVG path draw) na entrada do site.
- **Background Dinâmico:** Fundo animado com simulação de ondas de cor, otimizado com degradação graciosa para garantir fluidez máxima em dispositivos móveis.
- **Microinterações:** Animações baseadas em scroll e efeitos de *glassmorphism* na interface.
- **Totalmente Responsivo:** Experiência consistente e otimizada tanto para desktop quanto para iOS/Android.

## Tecnologias Utilizadas

Este projeto foi construído com ferramentas modernas do ecossistema front-end, focando em performance e componentização:

- **[React 18](https://react.dev/)** + **[TypeScript](https://www.typescriptlang.org/)**
- **[Vite](https://vitejs.dev/)** (Build tool e dev server)
- **[Tailwind CSS](https://tailwindcss.com/)** (Estilização utilitária)
- **[Framer Motion](https://www.framer.com/motion/)** (Motor de animações e interações de scroll)
- **[React Icons](https://react-icons.github.io/react-icons/)** (Ícones da biblioteca Feather)

## Como rodar o projeto localmente

Siga os passos abaixo para clonar e rodar o projeto na sua máquina:

```bash
# Clone o repositório
git clone [https://github.com/danilotavares-dev/danilotavares-dev.github.io.git](https://github.com/danilotavares-dev/danilotavares-dev.github.io.git)

# Entre na pasta do projeto
cd danilotavares-dev.github.io

# Instale as dependências (recomendado usar pnpm)
pnpm install

# Inicie o servidor de desenvolvimento
pnpm run dev
```

O servidor iniciará localmente. Basta acessar http://localhost:5173 no seu navegador.

## Deploy (CI/CD)

O deploy deste projeto é automatizado via GitHub Actions. Toda vez que um push é feito para a branch main, a pipeline realiza o build do projeto via Vite e publica o artefato otimizado diretamente no GitHub Pages.

##

Desenvolvido por Danilo Tavares.