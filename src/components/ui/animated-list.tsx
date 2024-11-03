'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
  Children,
  memo,
  type ReactElement,
  type ReactNode,
  useEffect,
  useState,
} from 'react'

import { cn } from '@/lib/utils'

export interface AnimatedListProps {
  className?: string
  children: React.ReactNode
  delay?: number
}

export const AnimatedList = memo(
  ({ className, children, delay = 1000 }: AnimatedListProps) => {
    const [messagesState, setMessagesState] = useState<ReactNode[]>([])
    const childrenArray = Children.toArray(children)

    useEffect(() => {
      const interval = setInterval(() => {
        if (messagesState.length < childrenArray.length) {
          setMessagesState((prev) => [
            childrenArray[messagesState.length],
            ...prev,
          ])
        }
      }, delay)

      return () => clearInterval(interval)
    }, [childrenArray, delay, messagesState.length])

    return (
      <div
        className={cn('flex flex-col-reverse items-center gap-4', className)}
      >
        <AnimatePresence>
          {messagesState.map((item) => (
            <AnimatedListItem key={(item as ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  },
)

AnimatedList.displayName = 'AnimatedList'

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: 'spring', stiffness: 350, damping: 40 },
  }

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  )
}
