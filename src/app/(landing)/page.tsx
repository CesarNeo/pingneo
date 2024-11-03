import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import { Children } from 'react'

import Heading from '@/components/heading'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import MockDiscordUi from '@/components/mock-discord-ui'
import { Button } from '@/components/ui/button'

function Home() {
  return (
    <>
      <section className="relative bg-primary-foreground py-24 sm:pt-32">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto flex flex-col items-center gap-10 text-center">
            <div>
              <Heading>
                <span>Real-Time SaaS Insights,</span>
                <br />
                <span className="relative bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                  Delivered to Your Discord
                </span>
              </Heading>
            </div>

            <p className="max-w-prose text-pretty text-center text-muted-foreground">
              PingNeo is the easiest way to monitor your SaaS. Get instant
              notifications for{' '}
              <span className="font-semibold text-secondary-foreground">
                sales, new users, or any other event
              </span>{' '}
              sent directly to your Discord.
            </p>

            <ul className="flex flex-col items-start space-y-2 text-left text-muted-foreground">
              {Children.toArray(
                [
                  'Real-time Discord alerts for critical events',
                  'Buy once, use forever',
                  'Track sales, new users, or any other event',
                ].map((item) => (
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="size-5 shrink-0 text-primary" />
                    {item}
                  </li>
                )),
              )}
            </ul>

            <div className="w-full max-w-80">
              <Button className="group" asChild>
                <Link href="/sign-up">
                  Start For Free Today
                  <ArrowRight className="size-4 shrink-0 transform transition duration-300 ease-in-out group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative bg-primary-foreground pb-4">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-primary" />
        <div className="relative mx-auto">
          <MaxWidthWrapper className="relative">
            <div className="-m-2 rounded-xl bg-muted/35 p-2 ring-1 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
              <MockDiscordUi />
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}

export default Home
