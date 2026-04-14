import { Hero } from './sections/Hero'
import { TimeLine } from './sections/TimeLine'
import { Culture } from './sections/Culture'
import { Insights } from './sections/Insights'
import { ProductBar } from './components/ProductBar'
import { BackgroundAnimated } from './components/BackgroundAnimated'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <main className="text-neutral-50 min-h-screen overflow-x-hidden font-sans relative">
      <BackgroundAnimated />
      <ProductBar />
      <Hero />
      <TimeLine />
      <Culture />
      <Insights />
      <Footer />
    </main>
  )
}
