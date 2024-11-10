import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

interface IBentoCardContentProps extends ComponentProps<'div'> {}

function BentoCardContent({ className, ...props }: IBentoCardContentProps) {
  return (
    <div
      {...props}
      className={cn(
        'relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]',
        className,
      )}
    />
  )
}

export default BentoCardContent
