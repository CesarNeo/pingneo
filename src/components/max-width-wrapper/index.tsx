import { cn } from '@/lib/utils'

import type { IMaxWidthWrapperProps } from './types'

function MaxWidthWrapper({ className, ...props }: IMaxWidthWrapperProps) {
  return (
    <div
      {...props}
      className={cn(
        'mx-auto h-full w-full max-w-screen-xl px-2.5 md:px-20',
        className,
      )}
    />
  )
}

export default MaxWidthWrapper
