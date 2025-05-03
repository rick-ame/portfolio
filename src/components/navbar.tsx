import { Menu, X } from 'lucide-react'
import { FC, useState } from 'react'

import { cn } from '@/lib/utils'

import { ThemeToggle } from './theme-toggle'

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav>
      <div className="bg-background/80 fixed z-20 w-full py-3 shadow-xs backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4">
          <a className="flex items-center text-xl font-bold" href="#hero">
            Rick <span className="text-primary">Portfolio</span>
          </a>
          <div className="hidden space-x-8 md:flex">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-foreground p-2 md:hidden"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div
        className={cn(
          'bg-background/95 fixed inset-0 z-10 flex w-full flex-col items-center justify-center backdrop-blur-md',
          'transition-all duration-300 md:hidden',
          isMenuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      >
        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
