import { Hero } from './sections/Hero'
import { Achievements } from './sections/Achievements'
import { Culture } from './sections/Culture'
import { Insights } from './sections/Insights'
import { CosmosBackground } from './components/CosmosBackground'

export default function App() {
  return (
    <main className="text-neutral-50 min-h-screen overflow-x-hidden font-sans relative">
      <CosmosBackground />
      <Hero />
      <Achievements />
      <Culture />
      <Insights />
    </main>
  )
}
