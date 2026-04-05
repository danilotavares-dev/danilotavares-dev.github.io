export type CategoriaCultura = 'LIVRO' | 'FILME' | 'SERIE' | 'OUTROS'

export type CultureItem = {
  id: number
  categoria: CategoriaCultura
  titulo: string
  descricao: string
}

export const cultureData: CultureItem[] = [
  // LIVROS
  {
    id: 1,
    categoria: 'LIVRO',
    titulo: 'Clean Code (Código Limpo)',
    descricao:
      'A verdadeira "bíblia" para quem quer ser um engenheiro de software de excelência. Um guia sobre como escrever códigos legíveis, sustentáveis e profissionais.',
  },

  {
    id: 2,
    categoria: 'LIVRO',
    titulo: 'Entendendo Algoritmos',
    descricao:
      'Um guia ilustrado e extremamente didático que descomplica conceitos complexos de algoritmos e estruturas de dados. Essencial para a base na computação.',
  },

  {
    id: 3,
    categoria: 'LIVRO',
    titulo: 'A Startup Enxuta',
    descricao:
      'O manual definitivo sobre inovação contínua. Ensina a mentalidade de criar produtos validando hipóteses rapidamente e evitando o desperdício de tempo e código.',
  },

  {
    id: 4,
    categoria: 'LIVRO',
    titulo: 'O Programador Pragmático',
    descricao:
      'Um clássico atemporal que vai muito além da sintaxe. Ele ensina a mentalidade, as atitudes e a filosofia de trabalho de um desenvolvedor de excelência.',
  },

  // FILMES
  {
    id: 5,
    categoria: 'FILME',
    titulo: 'O Jogo da Imitação',
    descricao:
      'A história de Alan Turing, o pai da computação moderna. Um filme brilhante sobre criptografia, matemática e a criação da máquina que deu origem aos computadores.',
  },

  {
    id: 6,
    categoria: 'FILME',
    titulo: 'Steve Jobs',
    descricao:
      'Um mergulho frenético nos bastidores da mente complexa do cofundador da Apple, focando nos momentos de tensão antes dos lançamentos que revolucionaram a tecnologia.',
  },

  {
    id: 7,
    categoria: 'FILME',
    titulo: 'Piratas do Vale do Silício',
    descricao:
      'Um clássico imperdível. Retrata a rivalidade histórica e brilhante entre Steve Jobs e Bill Gates, mostrando os bastidores do surgimento da Apple e da Microsoft.',
  },

  // SERIES
  // OUTROS
]
