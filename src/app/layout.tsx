import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['700', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--roboto',
})

export const metadata: Metadata = {
  title: 'Chat Ninja',
  description: 'Melhores ferramentas para inteligencia artificial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`${roboto.variable} font-sans`}>
      <body>{children}</body>
    </html>
  )
}
