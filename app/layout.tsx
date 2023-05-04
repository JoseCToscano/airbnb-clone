import React from 'react';
import { Nunito } from 'next/font/google'

import './globals.css'
import TRPCWrapper from "@/app/components/Widgets/TRPCWrapper";

export const metadata = {
  title: 'Profit Book',
  description: 'The first results-based social network for traders',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    return (
    <html lang="en">
      <body className={font.className}>
        <TRPCWrapper />
          {children}
      </body>
    </html>
  )
}
