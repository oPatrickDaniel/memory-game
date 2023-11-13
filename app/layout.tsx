import type { Metadata } from 'next'
import { Righteous } from 'next/font/google'
import './globals.css'

const righteous = Righteous({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jogo da memória',
  description: 'jogo infantil tradicional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={righteous.className}>{children}</body>
    </html>
  )
}
