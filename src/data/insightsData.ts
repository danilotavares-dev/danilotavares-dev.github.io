export type InsightItem = {
  id: number
  data: string
  topico: string
  conteudo: string
}

export const insightsData: InsightItem[] = [
  {
    id: 1,
    data: 'dd/mm/yyyy',
    topico: 'Topico de teste',
    conteudo: 'Descrição de teste.',
  },
]
