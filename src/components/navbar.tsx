import { FC, useEffect, useState } from 'react'

import { navLinks } from '@/config'
import { cn } from '@/lib/utils'

interface Props {
  className: string
}
export const Navbar: FC<Props> = ({ className }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed z-50 w-full pt-8 pb-4',
        className,
        scrolled && 'backdrop-blur-md',
      )}
    >
      <div className="mx-auto flex items-center justify-between">
        <a
          href="#hero"
          className="text-white-50 text-xl font-semibold transition-transform duration-300 hover:scale-105 md:text-2xl"
        >
          Rick
        </a>
        <nav className="items-center max-lg:hidden">
          <ul className="flex space-x-8">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group text-white-50 relative">
                <a href={link}>
                  <span className="transition-colors duration-300 hover:text-white">
                    {name}
                  </span>
                  <span className="absolute start-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full hover:text-white" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="group">
          <div className="bg-black-200 group-hover:bg-primary rounded-lg px-5 py-2 text-white transition-all duration-500">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  )
}
