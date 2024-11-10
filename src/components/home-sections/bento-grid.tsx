import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import Heading from '../heading'
import MaxWidthWrapper from '../max-width-wrapper'
import BentoCard from './components/bento-card'

const CODE_SNIPPET = `await fetch("http://localhost:3000/api/v1/events", {
  method: "POST",
  body: JSON.stringify({
    category: "sale",
    fields: {
      plan: "PRO",
      email: "zoe.martinez2001@email.com",
      amount: 49.00
    }
  }),
  headers: {
    Authorization: "Bearer <YOUR_API_KEY>"
  }
})`

function BentoGridSection() {
  return (
    <section className="relative bg-primary-foreground py-24 sm:py-32">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
        <div>
          <h2 className="text-center text-base/7 font-semibold text-primary">
            Intuitive Monitoring
          </h2>

          <Heading>Stay ahead with real-time insights</Heading>
        </div>

        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <BentoCard.Root className="lg:row-span-2">
            <BentoCard.Background className="lg:rounded-l-[2rem]" />

            <BentoCard.Content className="lg:rounded-l-[calc(2rem+1px)]">
              <BentoCard.Heading
                className="pb-3 sm:px-10 sm:pb-0 sm:pt-10"
                title="Real-time notifications"
                description="Get notified about critical events the moment they happen, no
                  matter if you're at home or on the go."
              />

              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-border bg-muted-foreground shadow-2xl">
                  {/* TODO: change image */}
                  <Image
                    className="size-full object-cover object-top"
                    src="/phone-screen.png"
                    alt="Phone screen displaying app interface"
                    fill
                  />
                </div>
              </div>
            </BentoCard.Content>

            <BentoCard.Border className="lg:rounded-l-[2rem]" />
          </BentoCard.Root>

          <BentoCard.Root className="max-lg:row-start-1">
            <BentoCard.Background className="max-lg:rounded-t-[2rem]" />

            <BentoCard.Content className="max-lg:rounded-t-[calc(2rem+1px)]">
              <BentoCard.Heading
                className="sm:px-10 sm:pt-10"
                title="Track Any Event"
                description="From new user signups to successful payments, PingNeo notifies you for all critical events in your SaaS."
              />

              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <Image
                  className="w-full max-lg:max-w-xs"
                  src="/bento-any-event.png"
                  alt="Bento box illustrating event tracking"
                  width={500}
                  height={300}
                />
              </div>
            </BentoCard.Content>

            <BentoCard.Border className="max-lg:rounded-t-[2rem]" />
          </BentoCard.Root>

          <BentoCard.Root className="max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <BentoCard.Background />

            <BentoCard.Content>
              <BentoCard.Heading
                className="sm:px-10 sm:pt-10"
                title="Track Any Properties"
                description="Add any custom data you like to an event, such as a user email, a purchase amount or an exceeded quota."
              />

              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <Image
                  className="w-full max-lg:max-w-xs"
                  src="/bento-custom-data.png"
                  alt="Bento box illustrating custom data tracking"
                  width={500}
                  height={300}
                />
              </div>
            </BentoCard.Content>

            <BentoCard.Border />
          </BentoCard.Root>

          <BentoCard.Root className="lg:row-span-2">
            <BentoCard.Background className="max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />

            <BentoCard.Content className="max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <BentoCard.Heading
                className="pb-3 sm:px-10 sm:pb-0 sm:pt-10"
                title="Easy Integration"
                description="Connect PingNeo with your existing workflow in minutes and call our intuitive logging API from any language."
              />

              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-muted shadow-2xl shadow-foreground/15">
                  <div className="flex bg-background/40 ring-1 ring-primary/5">
                    <div className="-mb-px flex text-sm/6 font-medium">
                      <div className="border-b border-r border-b-background/20 border-r-background/10 bg-background/5 px-4 py-2 text-secondary-foreground">
                        <span>pingneo.js</span>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-hidden">
                    <div className="max-h-[30rem]">
                      <SyntaxHighlighter
                        language="typescript"
                        style={{
                          ...oneDark,
                          'pre[class*="language-"]': {
                            ...oneDark['pre[class*="language-"]'],
                            background: 'transparent',
                            overflow: 'hidden',
                          },
                          'code[class*="language-"]': {
                            ...oneDark['code[class*="language-"]'],
                            background: 'transparent',
                          },
                        }}
                      >
                        {CODE_SNIPPET}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </BentoCard.Content>

            <BentoCard.Border className="max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
          </BentoCard.Root>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default BentoGridSection
