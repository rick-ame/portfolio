import { FC } from 'react'

import { Background } from './components/background'
import { Navbar } from './components/navbar'
import { Hero } from './sections/hero'

const App: FC = () => {
  return (
    <>
      <Navbar className="px-5 md:px-20" />
      <main className="px-5 md:px-20 xl:px-32 2xl:px-40">
        <Hero />
      </main>
      <Background />
    </>
  )
}

export default App
