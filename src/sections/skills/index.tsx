import { Handshake } from 'lucide-react'
import { FC, lazy, Suspense } from 'react'

import dockerLogo from '@/assets/logos/docker.svg'
import eslintLogo from '@/assets/logos/eslint.svg'
import gitLogo from '@/assets/logos/git.svg'
import nextjsLogo from '@/assets/logos/next-js.svg'
import nodejsLogo from '@/assets/logos/nodejs.svg'
import reactLogo from '@/assets/logos/react.svg'
import sassLogo from '@/assets/logos/sass.svg'
import tailwindLogo from '@/assets/logos/tailwind-css.svg'
import typescriptLogo from '@/assets/logos/typescript.svg'
import vitejsLogo from '@/assets/logos/vitejs.svg'
import vscodeLogo from '@/assets/logos/vscode.svg'
import vueLogo from '@/assets/logos/vue.svg'
import webpackLogo from '@/assets/logos/webpack.svg'
import TitleHeader from '@/components/title-header'
import { cn } from '@/lib/utils'

interface LogoProps {
  logo: string
  cls?: string
}
const Logo: FC<LogoProps> = ({ logo, cls }) => {
  return <img className={cn('size-15', cls)} src={logo} alt="Logo" />
}

const TechCards = lazy(() => import('./tech-cards'))

const logos: LogoProps[] = [
  { logo: dockerLogo, cls: 'size-28' },
  { logo: eslintLogo },
  { logo: gitLogo },
  { logo: nextjsLogo, cls: 'bg-gray-300/50 rounded-full p-1' },
  { logo: nodejsLogo, cls: 'size-20' },
  { logo: reactLogo },
  { logo: sassLogo },
  { logo: tailwindLogo },
  { logo: typescriptLogo },
  { logo: vitejsLogo },
  { logo: vscodeLogo },
  { logo: vueLogo },
  { logo: webpackLogo },
] as const

const Skills: FC = () => {
  return (
    <section id="skills" className="mt-36">
      <TitleHeader
        sub={
          <span className="flex items-center gap-1">
            <Handshake className="size-5 text-yellow-500" />
            What I Bring to the Table
          </span>
        }
      >
        How I Can Contribute & My Key Skills
      </TitleHeader>
      <Suspense fallback={<div className="h-[648px] md:h-50"></div>}>
        <TechCards />
      </Suspense>
      <div className="logos relative my-10 overflow-hidden md:my-20">
        <div className="gradient-edge" />
        <div className="gradient-edge" />
        <div className="relative h-52 w-full overflow-hidden">
          <div className="animate-marquee absolute flex h-full w-[200%] items-center gap-8 overflow-hidden md:gap-18 xl:gap-22">
            {logos.map(({ logo, cls }, index) => (
              <Logo key={index} logo={logo} cls={cls} />
            ))}
            {logos.map(({ logo, cls }, index) => (
              <Logo key={index} logo={logo} cls={cls} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
