import { Clock } from 'lucide-react'
import Image from 'next/image'
import { Children } from 'react'

import { cn } from '@/lib/utils'

import type { IDiscordMessageProps, TDiscordMessageBadgeColor } from './types'

function getBadgeStyles(badgeColor: TDiscordMessageBadgeColor) {
  const BADGE_COLORS: Record<TDiscordMessageBadgeColor, string> = {
    '#43B581': 'bg-green-500/10 text-green-400 ring-green-500/20',
    '#FAA61A': 'bg-yellow-500/10 text-yellow-400 ring-yellow-500/20',
  }

  return (
    BADGE_COLORS[badgeColor] || 'bg-gray-500/10 text-gray-400 ring-gray-500/20'
  )
}

function DiscordMessage({
  avatar,
  content,
  timestamp,
  title,
  username,
  badgeColor = '#43B581',
  badgeText,
}: IDiscordMessageProps) {
  return (
    <div className="flex w-full items-start justify-start">
      <div className="mb-2 flex items-center">
        <Image
          src={avatar.src}
          alt={avatar.alt}
          width={40}
          height={40}
          className="mr-3 size-10 rounded-full object-cover"
        />
      </div>

      <div className="w-full max-w-xl">
        <div className="flex items-center">
          <p className="font-semibold text-white">{username}</p>
          <span className="ml-2 rounded bg-primary px-1.5 py-0.5 text-xs font-semibold">
            APP
          </span>

          <span className="ml-1.5 text-xs text-gray-400">{timestamp}</span>
        </div>

        <div className="mb-4 mt-1.5 w-full rounded bg-[#2F3136] p-3 text-sm">
          <div className="mb-2 flex items-center justify-between">
            {badgeText ? (
              <span
                className={cn(
                  'order-2 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
                  getBadgeStyles(badgeColor),
                )}
              >
                {badgeText}
              </span>
            ) : null}

            <p className="order-1 font-semibold text-white">{title}</p>
          </div>

          {Children.toArray(
            Object.entries(content).map(([key, value]) => (
              <p className="text-sm text-[#DCDDDE]">
                <span className="text-[#B9BBBE]">{key}: </span>
                {value}
              </p>
            )),
          )}

          <p className="mt-2 flex items-center text-xs text-[#72767D]">
            <Clock className="mr-1 size-3" />
            {timestamp}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DiscordMessage
