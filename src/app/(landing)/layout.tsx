import type { PropsWithChildren } from 'react'

import Navbar from '@/components/navbar'

function LandingLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default LandingLayout
