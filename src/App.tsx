import { FC } from 'react'

import { Background } from './components/background'
import { Footer } from './components/footer'
import { Navbar } from './components/navbar'
import { About } from './sections/about'
import { Hero } from './sections/hero'

const App: FC = () => {
  return (
    <>
      <Navbar className="px-6 md:px-20" />
      <main className="px-6 md:px-20 xl:px-32 2xl:px-40">
        <Hero />
        <About />
      </main>
      <Footer className="px-6 md:px-20 xl:px-32 2xl:px-40" />
      <Background />
    </>
  )
}

export default App
