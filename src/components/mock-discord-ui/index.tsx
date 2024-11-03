import { type PropsWithChildren } from 'react'

import DiscordChatHeader from './components/chat-header'
import DiscordChatInputMessage from './components/chat-input-message'
import DiscordSidebarAccounts from './components/sidebar-accounts'
import DiscordSidebarMessages from './components/sidebar-messages'

function MockDiscordUi({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-[50rem] w-full max-w-[75rem] overflow-hidden rounded-lg bg-discord-background shadow-xl">
      <DiscordSidebarAccounts />

      <DiscordSidebarMessages />

      <div className="flex flex-1 flex-col">
        <DiscordChatHeader />

        <div className="flex flex-1 flex-col-reverse overflow-y-auto bg-discord-background p-4">
          {children}
        </div>

        <DiscordChatInputMessage />
      </div>
    </div>
  )
}

export default MockDiscordUi
