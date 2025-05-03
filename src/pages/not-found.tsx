import { FC } from 'react'
import { Link } from 'react-router'

import { Main } from '@/components/main'
import { ThemeToggle } from '@/components/theme-toggle'

export const NotFound: FC = () => {
  return (
    <Main>
      <div className="fixed end-5 top-5">
        <ThemeToggle />
      </div>
      <div className="flex h-screen flex-col items-center justify-center gap-8 text-3xl">
        Page Not Found
        <Link to="/" className="cosmic-button text-xl" replace>
          Back to Home
        </Link>
      </div>
    </Main>
  )
}
