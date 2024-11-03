import {
  HelpCircle,
  Inbox,
  Menu,
  Phone,
  Pin,
  Search,
  UserCircle,
  Video,
} from 'lucide-react'
import Image from 'next/image'
import { Children } from 'react'

const HEADER_ICONS = [Phone, Video, Pin, UserCircle, Search, Inbox, HelpCircle]

function DiscordChatHeader() {
  return (
    <div className="flex h-16 items-center border-b border-[#202225] bg-[#36393F] px-4 shadow-sm">
      <div className="mr-4 md:hidden">
        <Menu className="size-6 text-[#B9BBBE] transition-all hover:text-white" />
      </div>

      <div className="flex items-center">
        <div className="relative">
          <div className="mr-3 flex size-10 items-center justify-center overflow-hidden rounded-full bg-primary">
            <Image
              src="/vercel.svg"
              alt="PingNeo avatar"
              width={20}
              height={20}
              className="size-5 object-cover"
            />
          </div>

          <div className="absolute bottom-0 right-3 size-3 animate-pulse rounded-full border-2 border-[#36393F] bg-green-500" />
        </div>

        <p className="font-semibold text-white">PingNeo</p>
      </div>

      <div className="ml-auto flex items-center space-x-4 text-[#B9BBBE]">
        {Children.toArray(
          HEADER_ICONS.map((Icon) => (
            <Icon className="hidden size-6 transition-all hover:text-white sm:block" />
          )),
        )}
      </div>
    </div>
  )
}

export default DiscordChatHeader
