import { Hero } from './sections/Hero'
import { Achievements } from './sections/Achievements'
import { Culture } from './sections/Culture'
import { Insights } from './sections/Insights'
import { BackgroundAnimated } from './components/backgroundAnimated'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <main className="text-neutral-50 min-h-screen overflow-x-hidden font-sans relative">
      <BackgroundAnimated />
      <Hero />
      <Achievements />
      <Culture />
      <Insights />
      <Footer />
    </main>
  )
}
