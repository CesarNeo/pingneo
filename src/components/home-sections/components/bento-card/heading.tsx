import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

interface IBentoCardHeadingProps extends ComponentProps<'div'> {
  title: string
  description: string
}

function BentoCardHeading({
  className,
  title,
  description,
  ...props
}: IBentoCardHeadingProps) {
  return (
    <div {...props} className={cn('px-8 pt-8', className)}>
      <p className="mt-2 text-lg/7 font-medium tracking-tight text-muted-foreground max-lg:text-center">
        {title}
      </p>
      <p className="mt-2 max-w-lg text-sm/6 text-foreground max-lg:text-center">
        {description}
      </p>
    </div>
  )
}

export default BentoCardHeading
