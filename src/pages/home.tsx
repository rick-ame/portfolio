import { FC } from 'react'

import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Main } from '@/components/main'
import { Navbar } from '@/components/navbar'
import { Skills } from '@/components/skills'

export const Home: FC = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </Main>
      <Footer />
    </>
  )
}
