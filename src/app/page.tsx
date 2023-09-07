'use client'

import { ChatMessage } from '@/components/ui/chatMessage'

import { PaperPlaneTilt } from '@phosphor-icons/react'

import { Input } from '@/components/ui/input'
import { useChat } from 'ai/react'
import { Header } from '@/components/ui/header'
import { WelcomeChat } from '@/components/ui/welcomeChat'
import { useEffect, useRef } from 'react'

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  const chatContainerRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current

      chatContainerRef.current.scrollTop = scrollHeight - clientHeight
    }
  }, [messages])

  return (
    <div className="h-full w-full">
      <div className="h-full p-4 w-full max-w-[800px]  my-5 mx-auto flex flex-col">
        <Header.Root>
          <Header.Title>Chat Ninja</Header.Title>
        </Header.Root>

        <div
          ref={chatContainerRef}
          className="my-5 overflow-y-auto h-full max-h-[650px] p-4"
        >
          {messages.length === 0 && <WelcomeChat />}

          {messages.map((message) => (
            <ChatMessage.Root
              key={message.id}
              variant={message.role === 'assistant' ? 'default' : 'primary'}
            >
              <ChatMessage.Text
                variant={message.role === 'assistant' ? 'default' : 'primary'}
              >
                {message.content}
              </ChatMessage.Text>
            </ChatMessage.Root>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="mt-auto w-full">
          <Input.Root>
            <Input.Control
              placeholder="faça uma pergunta"
              onChange={handleInputChange}
              value={input}
            />
            <Input.Button type="submit">
              <Input.Icon>
                <PaperPlaneTilt weight="fill" size={24} color="#A855f7" />
              </Input.Icon>
            </Input.Button>
          </Input.Root>
        </form>
      </div>
    </div>
  )
}
