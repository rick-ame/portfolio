import { ArrowDown } from 'lucide-react'
import { FC, PropsWithChildren } from 'react'

import bgImage from '@/assets/images/hero/bg.png'
import { Experience } from '@/components/models/experience'
import { words } from '@/config'
import { cn } from '@/lib/utils'

const Button: FC<
  PropsWithChildren<{
    className: string
  }>
> = ({ className, children }) => {
  return (
    <a href="" className={cn('relative z-20 cursor-pointer', className)}>
      <div className="bg-black-200 group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 py-4">
        <div className="bg-white-50 absolute top-1/2 -right-10 h-[120%] w-[120%] origin-center -translate-y-1/2 rounded-full transition-all duration-500 group-hover:right-10 group-hover:size-10" />
        <p className="group-hover:text-white-50 -translate-x-5 text-black uppercase transition-all duration-500 group-hover:-translate-x-5 md:text-lg xl:translate-x-0">
          {children}
        </p>
        <div className="absolute top-1/2 right-10 flex size-10 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full">
          <ArrowDown className="text-primary size-6 translate-y-0 animate-bounce transition-all duration-500 group-hover:translate-y-0 xl:-translate-y-32" />
        </div>
      </div>
    </a>
  )
}

export const Hero: FC = () => {
  return (
    <section id="hero" className="relative min-h-dvh pt-36 lg:pt-48">
      <div className="absolute top-0">
        <img src={bgImage} alt="Background" />
      </div>
      <header className="flex flex-col gap-7">
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
          Hi, I&apos;m Rick, a developer based in Croatia with a passion for
          code.
        </p>
        <Button className="h-12 w-60 md:h-16 md:w-80">See My Work</Button>
      </header>
      <figure className="-end-24 top-32 -mt-32 h-[750px] w-full xl:absolute xl:w-[60%] 2xl:-end-32 2xl:w-[80%]">
        <Experience />
      </figure>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center max-xl:hidden">
        <span className="text-white-50 mb-2 text-sm">Scroll</span>
        <ArrowDown className="text-primary size-5" />
      </div>
    </section>
  )
}
