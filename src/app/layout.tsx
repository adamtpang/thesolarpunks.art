import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Solarpunks - A Solarpunk Video Series',
  description: 'An optimistic vision of the future through solarpunk storytelling. Three episodes exploring technology, nature, and human connection.',
  keywords: 'solarpunk, science fiction, optimistic future, sustainability, technology, art contest',
  authors: [{ name: 'The Solarpunks Team' }],
  openGraph: {
    title: 'The Solarpunks - A Solarpunk Video Series',
    description: 'An optimistic vision of the future through solarpunk storytelling',
    url: 'https://thesolarpunks.art',
    siteName: 'The Solarpunks',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Solarpunks - A Solarpunk Video Series',
    description: 'An optimistic vision of the future through solarpunk storytelling',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}