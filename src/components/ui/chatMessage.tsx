import { ReactNode } from 'react'

import { tv } from 'tailwind-variants'

interface ChatMessageRootProps {
  variant?: 'primary' | 'default'
  children: ReactNode
}

interface ChatMessageTextProps {
  variant?: 'primary' | 'default'
  children: ReactNode
}

const chatMessageRoot = tv({
  base: 'max-w-[340px] p-4 rounded-t-2xl mt-4 flex flex-row',
  variants: {
    variant: {
      primary: 'bg-purple-500 rounded-bl-2xl ml-auto',
      default: 'bg-gray-300 rounded-br-2xl',
    },
  },
})

const chatMessageText = tv({
  base: 'font-body text-base leading-relaxed',
  variants: {
    variant: {
      primary: 'text-white',
      default: 'text-gray-600',
    },
  },
})

function ChatMessageRoot({
  variant = 'default',
  children,
}: ChatMessageRootProps) {
  return <div className={chatMessageRoot({ variant })}>{children}</div>
}

function ChatMessageText({
  children,
  variant = 'default',
}: ChatMessageTextProps) {
  return <span className={chatMessageText({ variant })}>{children}</span>
}

export const ChatMessage = {
  Root: ChatMessageRoot,
  Text: ChatMessageText,
}
