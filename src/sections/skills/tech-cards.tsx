import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FC } from 'react'

import GitModel from '@/components/models/git-model'
import NodeModel from '@/components/models/node-model'
import ReactModel from '@/components/models/react-model'

const TechCards: FC = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.tech-card',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#skills',
          start: 'top center',
        },
      },
    )
  })

  return (
    <div className="flex items-center justify-center gap-6 max-sm:flex-col lg:gap-12 xl:gap-24">
      <div className="border-black-50 bg-black-100 tech-card group relative size-50 overflow-hidden rounded-full border">
        <div className="absolute bottom-[-100%] left-0 h-full w-full bg-[#2D3240] transition-all duration-500 group-hover:bottom-0" />
        <div className="flex size-50 items-center justify-center">
          <ReactModel />
        </div>
      </div>
      <div className="border-black-50 bg-black-100 tech-card group relative size-50 overflow-hidden rounded-full border">
        <div className="absolute bottom-[-100%] left-0 h-full w-full bg-[#2D3240] transition-all duration-500 group-hover:bottom-0" />
        <div className="flex size-50 items-center justify-center">
          <NodeModel />
        </div>
      </div>
      <div className="border-black-50 bg-black-100 tech-card group relative size-50 overflow-hidden rounded-full border">
        <div className="absolute bottom-[-100%] left-0 h-full w-full bg-[#2D3240] transition-all duration-500 group-hover:bottom-0" />
        <div className="flex size-50 items-center justify-center">
          <GitModel />
        </div>
      </div>
    </div>
  )
}

export default TechCards
