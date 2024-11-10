import DiscordMessage from '../discord-message'
import MaxWidthWrapper from '../max-width-wrapper'
import MockDiscordUi from '../mock-discord-ui'
import { AnimatedList } from '../ui/animated-list'

function DiscordSection() {
  return (
    <section className="relative bg-primary-foreground pb-4">
      <div className="absolute inset-x-0 bottom-24 top-24 bg-primary" />
      <div className="relative mx-auto">
        <MaxWidthWrapper className="relative">
          <div className="-m-2 rounded-xl bg-muted/35 p-2 ring-1 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
            <MockDiscordUi>
              <AnimatedList>
                <DiscordMessage
                  avatar={{
                    src: '/pingneo-avatar.png',
                    alt: 'Avatar',
                  }}
                  username="PingNeo"
                  timestamp="2 hours ago"
                  badgeText="SignUp"
                  title="😎 New user signed up"
                  content={{
                    name: 'Mateo Ortiz',
                    email: 'm.ortiz19@gmail.com',
                  }}
                />
                <DiscordMessage
                  avatar={{
                    src: '/pingneo-avatar.png',
                    alt: 'Avatar',
                  }}
                  username="PingNeo"
                  timestamp="2 hours ago"
                  badgeText="Revenue"
                  badgeColor="#FAA61A"
                  title="🤑 Payment received"
                  content={{
                    amount: '$49.99',
                    email: 'zoe.martinez2001@email.com',
                    plan: 'Pro Plan',
                  }}
                />
                <DiscordMessage
                  avatar={{
                    src: '/pingneo-avatar.png',
                    alt: 'Avatar',
                  }}
                  username="PingNeo"
                  timestamp="Today at 5:11AM"
                  badgeText="Milestone"
                  badgeColor="#5865F2"
                  title="🎉 Revenue Milestone Achieved"
                  content={{
                    recurringRevenue: '$1,000 USD',
                    growth: '+25%',
                  }}
                />
              </AnimatedList>
            </MockDiscordUi>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  )
}

export default DiscordSection
