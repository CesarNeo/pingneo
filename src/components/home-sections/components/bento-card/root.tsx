import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

interface IBentoCardRootProps extends ComponentProps<'div'> {}

function BentoCardRoot({ className, ...props }: IBentoCardRootProps) {
  return <div {...props} className={cn('relative', className)} />
}

export default BentoCardRoot
