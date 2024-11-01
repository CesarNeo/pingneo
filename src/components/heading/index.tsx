import { cn } from '@/lib/utils'

import type { IHeadingProps } from './types'

function Heading({ className, ...props }: IHeadingProps) {
  return (
    <h1
      {...props}
      className={cn(
        'text-secondary-foreground text-pretty text-4xl font-semibold tracking-tight sm:text-5xl',
        className,
      )}
    />
  )
}

export default Heading
