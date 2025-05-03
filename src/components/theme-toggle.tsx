import { Moon, Sun } from 'lucide-react'
import { FC, useLayoutEffect, useState } from 'react'

import { cn } from '@/lib/utils'

export const ThemeToggle: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') !== 'light',
  )

  useLayoutEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDarkMode(false)
    }
  }, [isDarkMode])

  return (
    <button
      onClick={() => {
        setIsDarkMode(!isDarkMode)
      }}
      className={cn(
        'rounded-full transition-colors duration-300 max-md:hidden',
        'focus:outline-hidden',
        isDarkMode ? 'text-blue-900' : 'text-yellow-300',
      )}
    >
      {isDarkMode ? <Moon className="size-6" /> : <Sun className="size-6" />}
    </button>
  )
}
