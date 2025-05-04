import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { FC, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Counter: FC = () => {
  const counterRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const numberElement = counterRef.current!.querySelector('.counter-number')!
    gsap.set(numberElement, { innerText: '0' })
    gsap.to(numberElement, {
      innerText: 8,
      duration: 2,
      ease: 'power2.out',
      snap: { innerText: 1 },
      scrollTrigger: {
        trigger: '#about',
        start: 'top center',
      },
      onComplete: () => {
        numberElement.textContent = '8+'
      },
    })
  }, [])

  return (
    <span ref={counterRef}>
      <span className="counter-number text-primary mx-1 inline-block w-10 text-3xl font-bold">
        0
      </span>
      Years of Experience
    </span>
  )
}

export default Counter
