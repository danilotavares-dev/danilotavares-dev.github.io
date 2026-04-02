export type CultureItem = {
  id: number
  categoria: string
  titulo: string
  descricao: string
  corBorda: string
  corTexto: string
}

export const cultureData: CultureItem[] = [
  {
    id: 1,
    categoria: 'teste',
    titulo: 'Titulo de teste',
    descricao: 'Descrição de teste.',
    corBorda: 'border-blue-500/30',
    corTexto: 'text-blue-400',
  },
]
