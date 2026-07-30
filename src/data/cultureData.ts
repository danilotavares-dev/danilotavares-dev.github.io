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
      'A verdadeira "bíblia" para quem quer ser um engenheiro de software de excelência. Um guia sobre como escrever códigos legíveis, sustentáveis e de alta qualidade.',
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

  // SERIES
  
  // OUTROS
]
