import { PlusCircle } from 'lucide-react'
import { Children } from 'react'

import DiscordIcon from '@/components/icons/discord'

function DiscordSidebarAccounts() {
  return (
    <div className="hidden w-[4.5rem] flex-col items-center bg-[#202225] py-3 sm:flex">
      <div className="mb-2 flex size-12 items-center justify-center rounded-2xl bg-discord-brand transition-all duration-200 hover:rounded-xl">
        <DiscordIcon className="size-3/5 text-white" />
      </div>

      <div className="my-2 h-0.5 w-8 rounded-full bg-discord-background" />

      {Children.toArray(
        [...Array(5)].map((_, i) => (
          <div className="mb-3 flex size-12 items-center justify-center rounded-3xl bg-discord-background transition-all duration-200 hover:rounded-xl hover:bg-discord-brand">
            <span className="text-lg font-semibold text-gray-400">
              {String.fromCharCode(65 + i)}
            </span>
          </div>
        )),
      )}

      <div className="group mb-3 mt-auto flex size-12 items-center justify-center rounded-3xl bg-discord-background transition-all duration-200 hover:rounded-xl hover:bg-[#3BA55C]">
        <PlusCircle className="text-[#3BA55C] group-hover:text-white" />
      </div>
    </div>
  )
}

export default DiscordSidebarAccounts
