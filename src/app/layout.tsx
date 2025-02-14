import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

export const metadata: Metadata = {
  title: 'Swarm Intelligence',
}

const rogan = localFont({
  src: [
    { path: './../../public/fonts/rogan/rogan-regular.otf', weight: '300' },
    { path: './../../public/fonts/rogan/rogan-medium.otf', weight: '500' },
    { path: './../../public/fonts/rogan/rogan-bold.otf', weight: '700' },
    {
      path: './../../public/fonts/rogan/rogan-extrabold.otf',
      weight: '800',
    },
  ],
  variable: '--font-rogan',
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${rogan.variable}`}>{children}</body>
    </html>
  )
}
