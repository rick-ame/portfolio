import { FC } from 'react'

import { cn } from '@/lib/utils'

interface Props {
  className: string
}
export const Footer: FC<Props> = ({ className }) => {
  return (
    <footer
      className={cn(
        'border-black-200/80 mt-24 border-t pt-8 pb-10 backdrop-blur-xs',
        className,
      )}
    >
      <p className="text-muted-foreground text-end">
        &copy; {new Date().getFullYear()} Rick. All rights reserved.
      </p>
    </footer>
  )
}
