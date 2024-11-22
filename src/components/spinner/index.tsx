import { spinnerVariants } from './constants'
import type { ISpinnerProps } from './types'

function Spinner({ size, className, ...props }: ISpinnerProps) {
  return (
    <div className="flex items-center justify-center">
      <div {...props} className={spinnerVariants({ size, className })} />
    </div>
  )
}

export default Spinner
