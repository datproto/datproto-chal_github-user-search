import '@/styles/globals.css'
import Providers from '@/app/provider'
import React     from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  )
}
