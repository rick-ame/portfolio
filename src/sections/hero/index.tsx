import { ArrowDown } from 'lucide-react'
import { FC, lazy, Suspense } from 'react'

import bgImg from '@/assets/images/bg.png'
import codeImg from '@/assets/images/code.svg'
import conceptsImg from '@/assets/images/concepts.svg'
import designsImg from '@/assets/images/designs.svg'
import ideasImg from '@/assets/images/ideas.svg'

import Button from './button'

const Experience = lazy(() => import('@/components/models/experience'))

const words = [
  { text: 'Ideas', img: ideasImg },
  { text: 'Concepts', img: conceptsImg },
  { text: 'Designs', img: designsImg },
  { text: 'Code', img: codeImg },
] as const

const Hero: FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-dvh overflow-hidden pt-40 lg:pt-48"
    >
      <div className="absolute top-0">
        <img src={bgImg} alt="Background" />
      </div>
      <header className="flex flex-col gap-8">
        <h1 className="pointer-events-none relative z-10 flex flex-col justify-center text-[30px] font-semibold md:text-[60px]">
          <span className="animate-fade-in opacity-0">
            Shaping
            <span className="inline-flex h-[48px] translate-y-0 flex-col overflow-hidden px-2 py-[30px] pt-0 transition-all ease-(--slide-ease) md:h-[78px] md:translate-y-1 md:px-5">
              <span className="animate-word-slider">
                {words.map((word, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1 pb-2 md:gap-3"
                  >
                    <img
                      src={word.img}
                      alt="Person"
                      className="bg-white-50 size-7 rounded-full object-contain p-1 md:size-10 md:p-2 xl:size-12"
                    />
                    <span className="text-primary">{word.text}</span>
                  </span>
                ))}
              </span>
            </span>
          </span>
          <span className="animate-fade-in-delay-1 opacity-0">
            into Real Projects
          </span>
          <span className="animate-fade-in-delay-2 opacity-0">
            that Deliver Results
          </span>
        </h1>
        <p className="text-white-50 pointer-events-none relative z-10 md:text-xl">
          Hi, I&apos;m <span className="text-primary">Rick</span>, a developer
          based in Beijing with a passion for code.
        </p>
        <Button />
      </header>
      <figure className="-end-24 top-32 -mt-32 h-[750px] w-full xl:absolute xl:-end-36 xl:w-[60%] 2xl:w-[70%]">
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </figure>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center max-xl:hidden">
        <span className="text-white-50 mb-2 text-sm">Scroll</span>
        <ArrowDown className="text-primary size-5" />
      </div>
    </section>
  )
}

export default Hero
