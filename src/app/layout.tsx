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
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/favicons/site.webmanifest"
        />
      </head>
      <body className={`${rogan.variable}`}>{children}</body>
    </html>
  )
}
