import { Cog, Headphones, Inbox, Mic, UserCircle } from 'lucide-react'
import Image from 'next/image'
import { Children } from 'react'

const ICONS = [Mic, Headphones, Cog]

function DiscordSidebarMessages() {
  return (
    <div className="hidden w-60 flex-col bg-[#2F3136] md:flex">
      <div className="flex h-16 items-center border-b border-[#202225] px-4 shadow-sm">
        <div className="flex h-8 w-full items-center justify-center rounded bg-[#202225] px-2">
          <span className="text-sm text-gray-500">
            Find or start a conversation
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pt-4">
        <div className="mb-4 px-2">
          <div className="flex items-center rounded px-2 py-1.5 transition-all hover:bg-[#393C43]">
            <UserCircle className="mr-4 size-8 text-[#B9BBBE]" />
            <span className="text-sm font-medium text-[#DCDDDE]">Friends</span>
          </div>
          <div className="flex items-center rounded px-2 py-1.5 transition-all hover:bg-[#393C43]">
            <Inbox className="mr-4 size-8 text-[#B9BBBE]" />
            <span className="text-sm font-medium text-[#DCDDDE]">Nitro</span>
          </div>
        </div>

        <div className="mb-4 px-2">
          <h3 className="mb-2 px-2 text-xs font-semibold uppercase text-[#8E9297]">
            Direct Messages
          </h3>

          <div className="flex items-center rounded bg-[#393C43] px-2 py-1.5">
            <Image
              src="/pingneo-avatar.png"
              alt="PingNeo avatar"
              width={16}
              height={16}
              className="mr-3 size-8 rounded-full object-cover"
            />

            <span className="font-medium text-white">PingNeo</span>
          </div>

          <div className="my-1 space-y-px">
            {Children.toArray(
              [...Array(4)].map((_, i) => (
                <div className="flex items-center rounded px-2 py-1.5 text-gray-600">
                  <div className="mr-3 size-8 rounded-full bg-discord-background" />
                  <span className="font-medium">User {i + 1}</span>
                </div>
              )),
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center bg-[#292B2F] p-2">
        <div className="mr-2 size-8 rounded-full bg-primary" />
        <div className="flex-1">
          <p className="text-sm font-medium text-white">You</p>
          <p className="flex items-center text-xs text-[#B9BBBE]">
            @your_account
          </p>
        </div>

        <div className="flex items-center space-x-2">
          {Children.toArray(
            ICONS.map((Icon) => (
              <Icon className="size-5 text-[#B9BBBE] transition-all hover:text-white" />
            )),
          )}
        </div>
      </div>
    </div>
  )
}

export default DiscordSidebarMessages
