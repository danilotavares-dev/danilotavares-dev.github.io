export type TimeLineItem = {
  id: number
  data: string
  titulo: string
  descricao: string
  tags: string[]
}

export const timeLineData: TimeLineItem[] = [
  {
    id: 1,
    data: 'Março/2026',
    titulo: 'Fundação da Nilo Labs',
    descricao:
      'Criação de uma organização no GitHub focada em R&D (Pesquisa e Desenvolvimento). Um espaço dedicado para centralizar meus estudos avançados, arquiteturas complexas, Inteligência Artificial e DevOps.',
    tags: ['R&D', 'Open Source', 'Iniciativa'],
  },
]
