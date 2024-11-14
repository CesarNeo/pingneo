import { BadgeCheck, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Children } from 'react'

import Heading from '../heading'
import MaxWidthWrapper from '../max-width-wrapper'
import { Button } from '../ui/button'

function UserExperiencesSection() {
  return (
    <section className="relative bg-background py-24 sm:py-32">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
        <div>
          <h2 className="text-center text-base/7 font-semibold text-primary">
            Real-World Experiences
          </h2>
          <Heading className="text-center">What our customers say</Heading>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 divide-y divide-secondary-foreground px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          <div className="flex flex-auto flex-col gap-4 rounded-t-[2rem] bg-secondary p-6 sm:p-8 lg:rounded-l-[2rem] lg:rounded-tr-none lg:p-16">
            <div className="mb-2 flex justify-center gap-0.5 lg:justify-start">
              {Children.toArray(
                [...Array(5)].map(() => (
                  <Star className="size-5 fill-primary text-primary" />
                )),
              )}
            </div>

            <p className="text-pretty text-center text-base font-medium tracking-tight text-secondary-foreground sm:text-lg lg:text-left lg:text-lg/8">
              PingNeo has been a game-changer for me. I&apos;ve been using it
              for two months now and seeing sales pop up in real-time is super
              satisfying.
            </p>

            <div className="mt-2 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-start lg:justify-start">
              <Image
                src="/user-2.png"
                className="rounded-full object-cover"
                alt="Random user"
                width={48}
                height={48}
              />

              <div className="flex flex-col items-center sm:items-start">
                <p className="flex items-center font-semibold">
                  Freya Larsson
                  <BadgeCheck className="ml-1.5 inline-block size-4 fill-primary" />
                </p>
                <p className="text-sm text-muted-foreground">@itsfreya</p>
              </div>
            </div>
          </div>

          <div className="flex flex-auto flex-col gap-4 rounded-b-[2rem] bg-secondary p-6 sm:p-8 lg:rounded-r-[2rem] lg:rounded-bl-none lg:p-16">
            <div className="mb-2 flex justify-center gap-0.5 lg:justify-start">
              {Children.toArray(
                [...Array(5)].map(() => (
                  <Star className="size-5 fill-primary text-primary" />
                )),
              )}
            </div>

            <p className="text-pretty text-center text-base font-medium tracking-tight text-secondary-foreground sm:text-lg lg:text-left lg:text-lg/8">
              PingNeo been paying off for our SaaS. Nice to have simple way to
              see how we&apos;re doing day-to-day. Definitely makes our lives
              easier.
            </p>

            <div className="mt-2 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-start lg:justify-start">
              <Image
                src="/user-1.png"
                className="rounded-full object-cover"
                alt="Random user"
                width={48}
                height={48}
              />

              <div className="flex flex-col items-center sm:items-start">
                <p className="flex items-center font-semibold">
                  Kai Johnson
                  <BadgeCheck className="ml-1.5 inline-block size-4 fill-primary" />
                </p>
                <p className="text-sm text-muted-foreground">@kaikai</p>
              </div>
            </div>
          </div>
        </div>

        <Button asChild className="relative z-10 w-full max-w-xs">
          <Link href="/sign-up">Start For Free Today</Link>
        </Button>
      </MaxWidthWrapper>
    </section>
  )
}

export default UserExperiencesSection
