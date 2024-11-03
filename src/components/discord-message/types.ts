export type TDiscordMessageAvatar = {
  src: string
  alt: string
}

export type TDiscordMessageContent = Record<string, string>

export interface IDiscordMessageProps {
  avatar: TDiscordMessageAvatar
  username: string
  timestamp: string
  title: string
  content: TDiscordMessageContent
  badgeText?: string
  badgeColor?: string
}

export type TDiscordMessageBadgeColor = '#43B581' | '#FAA61A' | string
