import { cva } from 'class-variance-authority'

export const spinnerVariants = cva(
  'border-4 rounded-full border-primary border-t-primary/10 animate-spin duration-700',
  {
    variants: {
      size: {
        sm: 'size-4 border-2',
        md: 'size-6 border-4',
        lg: 'size-8 border-4',
      },
    },
    defaultVariants: { size: 'md' },
  },
)
