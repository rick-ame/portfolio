import { FC, lazy, Suspense } from 'react'

import Background from './components/background'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Hero from './sections/hero'

const About = lazy(() => import('./sections/about'))
const Experience = lazy(() => import('./sections/experience'))
const Skills = lazy(() => import('./sections/skills'))
const Projects = lazy(() => import('./sections/projects'))
const Contact = lazy(() => import('./sections/contact'))

const App: FC = () => {
  return (
    <>
      <Navbar className="px-6 md:px-20" />
      <main className="px-6 tracking-wider md:px-20 xl:px-32 2xl:px-40">
        <Hero />
        <Suspense>
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Footer className="px-6 md:px-20 xl:px-32 2xl:px-40" />
      <Background />
    </>
  )
}

export default App
