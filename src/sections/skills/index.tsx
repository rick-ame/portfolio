import { Handshake } from 'lucide-react'
import { FC, lazy, Suspense } from 'react'

import antDesignLogo from '@/assets/logos/ant-design.svg'
import dockerLogo from '@/assets/logos/docker.svg'
import eslintLogo from '@/assets/logos/eslint.svg'
import expressLogo from '@/assets/logos/express.svg'
import gitLogo from '@/assets/logos/git.svg'
import materialUILogo from '@/assets/logos/material-ui.svg'
import nextjsLogo from '@/assets/logos/next-js.svg'
import nodejsLogo from '@/assets/logos/nodejs.svg'
import reactLogo from '@/assets/logos/react.svg'
import reduxLogo from '@/assets/logos/redux.svg'
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
  name: string
  cls?: string
}
const Logo: FC<LogoProps> = ({ logo, name, cls }) => {
  return (
    <img
      className={cn('me-28 size-15', cls)}
      src={logo}
      alt={`${name} Logo`}
      title={name}
    />
  )
}

const TechCards = lazy(() => import('./tech-cards'))

const logos: LogoProps[] = [
  { logo: antDesignLogo, name: 'Ant Design' },
  { logo: dockerLogo, name: 'Docker', cls: 'size-28' },
  { logo: eslintLogo, name: 'ESLint' },
  {
    logo: expressLogo,
    name: 'Express.js',
    cls: 'bg-gray-300/80 rounded-full p-1',
  },
  { logo: gitLogo, name: 'Git' },
  { logo: materialUILogo, name: 'Material UI' },
  { logo: nextjsLogo, name: 'Next.js', cls: 'bg-gray-300/50 rounded-full p-1' },
  { logo: nodejsLogo, name: 'Node.js', cls: 'size-20' },
  { logo: reactLogo, name: 'React' },
  { logo: reduxLogo, name: 'Redux' },
  { logo: sassLogo, name: 'Sass/Scss' },
  { logo: tailwindLogo, name: 'Tailwind CSS' },
  { logo: typescriptLogo, name: 'Typescript' },
  { logo: vitejsLogo, name: 'Vite' },
  { logo: vscodeLogo, name: 'VS Code' },
  { logo: vueLogo, name: 'Vue' },
  { logo: webpackLogo, name: 'Webpack' },
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
      <div className="relative my-20 md:my-30">
        <div className="logos-gradient-edge" />
        <div className="logos-gradient-edge" />
        <div className="group flex items-center overflow-hidden">
          <div className="animate-marquee group-hover:animate-pause flex shrink-0 items-center">
            {logos.map(({ logo, name, cls }, index) => (
              <Logo key={index} logo={logo} name={name} cls={cls} />
            ))}
          </div>
          <div
            aria-hidden
            className="animate-marquee group-hover:animate-pause flex shrink-0 items-center"
          >
            {logos.map(({ logo, name, cls }, index) => (
              <Logo key={index} logo={logo} name={name} cls={cls} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
