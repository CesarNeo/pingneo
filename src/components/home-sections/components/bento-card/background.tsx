import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

interface IBentoCardBackgroundProps extends ComponentProps<'div'> {}

function BentoCardBackground({
  className,
  ...props
}: IBentoCardBackgroundProps) {
  return (
    <div
      {...props}
      className={cn('absolute inset-px rounded-lg bg-background', className)}
    />
  )
}

export default BentoCardBackground
