import { SignOutButton } from '@clerk/nextjs'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import MaxWidthWrapper from '../max-width-wrapper'
import ToggleTheme from '../toggle-theme'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

function Navbar() {
  const user = null

  return (
    <nav className="sticky inset-x-0 top-0 z-40 h-16 w-full border-b border-border bg-background/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="z-40 flex font-semibold">
            Ping<span className="text-primary">Neo</span>
          </Link>

          <div className="flex h-full items-center space-x-4">
            <ToggleTheme />
            <Separator orientation="vertical" className="h-8" />

            {user ? (
              <>
                <Button asChild size="sm" variant="ghost">
                  <SignOutButton>Sign Out</SignOutButton>
                </Button>

                <Button asChild size="sm">
                  <Link href="/dashboard">
                    Dashboard
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button asChild size="sm" variant="ghost">
                  <Link href="/pricing">Pricing</Link>
                </Button>

                <Button asChild size="sm" variant="ghost">
                  <Link href="/sign-in">Sign in</Link>
                </Button>

                <Separator orientation="vertical" className="h-8" />

                <Button asChild size="sm">
                  <Link href="/sign-up">
                    Sign up
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
