import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

import type { spinnerVariants } from './constants'

export interface ISpinnerProps
  extends VariantProps<typeof spinnerVariants>,
    ComponentProps<'div'> {}
