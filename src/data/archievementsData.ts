export type AchievementItem = {
  id: number
  titulo: string
  descricao: string
  tags: string[]
}

export const achievementsData: AchievementItem[] = [
  {
    id: 1,
    titulo: 'Teste',
    descricao: 'Descrição de teste.',
    tags: ['teste01', 'teste02', 'teste03'],
  },
]
