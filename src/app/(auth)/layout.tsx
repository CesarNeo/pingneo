import type { PropsWithChildren } from 'react'

import Navbar from '@/components/navbar'

function AuthLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default AuthLayout
