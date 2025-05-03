import { ArrowDown } from 'lucide-react'
import { FC } from 'react'

export const Hero: FC = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center"
    >
      <div className="max-w-4xl text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            <span className="animate-fade-in opacity-0"> Hi, I'm</span>
            <span className="text-primary animate-fade-in-delay-1 opacity-0">
              {' '}
              Rick
            </span>
          </h1>
          <p className="text-muted-foreground animate-fade-in-delay-2 max-w-2xl text-lg opacity-0 md:text-xl">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>
          <div className="animate-fade-in-delay-3 pt-4 opacity-0">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform animate-bounce flex-col items-center">
        <span className="text-muted-foreground mb-2 text-sm"> Scroll </span>
        <ArrowDown className="text-primary h-5 w-5" />
      </div>
    </section>
  )
}
