import { FC, MouseEventHandler, PropsWithChildren, useRef } from 'react'

import starImg from '/images/star.png'

interface Props {
  stars?: number
}
const Card: FC<PropsWithChildren<Props>> = ({ stars, children }) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove: MouseEventHandler = (e) => {
    const rect = cardRef.current!.getBoundingClientRect()
    const mouseX = e.clientX - rect.left - rect.width / 2
    const mouseY = e.clientY - rect.top - rect.height / 2

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI)
    angle = (angle + 360) % 360

    cardRef.current!.style.setProperty('--start', String(angle + 60))
  }

  return (
    <div ref={cardRef} onMouseMove={handleMouseMove} className="card">
      {stars && (
        <div className="mb-5 flex items-center gap-1">
          {Array.from({ length: stars }, (_, i) => (
            <img key={i} src={starImg} alt="Star" className="size-5" />
          ))}
        </div>
      )}
      {children}
    </div>
  )
}

export default Card
