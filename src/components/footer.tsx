import { ArrowUp } from 'lucide-react'
import { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="bg-card border-border border-t px-4 pt-8 pb-12">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} &copy;Rick All rights reserved.
        </p>
        <a
          href="#hero"
          className="bg-primary/10 hover:bg-primary/20 text-primary rounded-full p-2 transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  )
}
