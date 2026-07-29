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
    titulo: 'Plataforma Igris (Arquitetura de Observabilidade)',
    descricao:
      'Desenvolvimento de um sistema de AIOps estruturado para detecção de anomalias. O projeto contempla o pipeline de dados e a integração do modelo Isolation Forest, focado em confiabilidade de sistemas.',
    tags: ['Python', 'Machine Learning', 'AIOps'],
  },

  {
    id: 1,
    data: 'Dezembro/2025',
    titulo: 'Movie Garden (Aplicação Full-Stack & IA)',
    descricao:
      'Concepção e desenvolvimento de uma plataforma de recomendação de conteúdo. Foco na estruturação de APIs, consumo de dados da TMDB e implementação de algoritmos de sugestão personalizada.',
    tags: ['TypeScript', 'React', 'Node.js'],
  },
]
