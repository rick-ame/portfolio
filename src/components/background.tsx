import { FC, useEffect, useState } from 'react'

interface Base {
  id: number
  size: number
  x: number
  y: number
  animationDuration: number
}
interface Star extends Base {
  opacity: number
}
interface Meteor extends Base {
  delay: number
}

const Background: FC = () => {
  const [stars, setStars] = useState<Star[]>([])
  const [meteors, setMeteors] = useState<Meteor[]>([])

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000,
    )
    const newStars: Star[] = []
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      })
    }
    setStars(newStars)
  }

  const generateMeteors = () => {
    const numberOfMeteors = 4
    const newMeteors: Meteor[] = []
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 1 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      })
    }
    setMeteors(newMeteors)
  }

  useEffect(() => {
    generateStars()
    generateMeteors()

    const handleResize = () => {
      generateStars()
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="fixed inset-0 -z-10">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-pulse rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.4)] ease-in-out"
          style={{
            width: star.size + 'px',
            height: star.size + 'px',
            left: star.x + '%',
            top: star.y + '%',
            opacity: star.opacity,
            animationDuration: star.animationDuration + 's',
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="animate-meteor absolute rounded-full bg-linear-to-r from-gray-300 via-gray-500 to-transparent shadow-[0_0_2px_1px_rgba(255,255,255,0.05)]"
          style={{
            width: meteor.size * 30 + 'px',
            height: meteor.size * 1 + 'px',
            left: meteor.x + '%',
            top: meteor.y + '%',
            animationDelay: String(meteor.delay),
            animationDuration: meteor.animationDuration + 's',
          }}
        />
      ))}
    </div>
  )
}

export default Background
