import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

interface IBentoCardBorderProps extends ComponentProps<'div'> {}

function BentoCardBorder({ className, ...props }: IBentoCardBorderProps) {
  return (
    <div
      {...props}
      className={cn(
        'pointer-events-none absolute inset-px rounded-lg shadow shadow-foreground/5 ring-1 ring-foreground/5',
        className,
      )}
    />
  )
}

export default BentoCardBorder
