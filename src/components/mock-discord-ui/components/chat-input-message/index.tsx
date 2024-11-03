import { Gift, PlusCircle, Smile, Sticker } from 'lucide-react'
import { Children } from 'react'

const INPUT_ICONS = [Gift, Sticker, Smile]

function DiscordChatInputMessage() {
  return (
    <div className="p-4">
      <div className="flex items-center rounded-lg bg-[#40444B] p-1">
        <PlusCircle className="mx-3 text-[#B9BBBE] transition-colors hover:text-white" />
        <input
          type="text"
          readOnly
          placeholder="Message @PingNeo"
          className="flex-1 bg-transparent px-1 py-1.5 text-white placeholder-[#72767D] focus:outline-none"
        />

        <div className="mx-3 flex items-center space-x-3 text-[#B9BBBE]">
          {Children.toArray(
            INPUT_ICONS.map((Icon) => (
              <Icon className="size-5 transition-all hover:text-white" />
            )),
          )}
        </div>
      </div>
    </div>
  )
}

export default DiscordChatInputMessage
