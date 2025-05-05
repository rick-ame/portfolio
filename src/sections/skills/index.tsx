import { Handshake } from 'lucide-react'
import { FC, lazy, Suspense } from 'react'

import TitleHeader from '@/components/title-header'

const TechCards = lazy(() => import('./tech-cards'))

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
    </section>
  )
}

export default Skills
