import React from 'react';
import { Nunito } from 'next/font/google'

import './globals.css'
import Navbar from './components/Navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import RegisterModal from "./components/Modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "@/app/components/Modals/LoginModal";
import Dashboard from "@/app/components/AcoountOverview/dashboard";
import Body from "@/app/components/Body/Body";
import ChartModal from "@/app/components/Modals/ChartModal";
import LightWeightTrdingViewChart from "@/app/components/Widgets/LightWeightTrdingViewChart";

export const metadata = {
  title: 'Profitbook',
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
      <ClientOnly >
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <ChartModal />
          <Navbar />
          <Body>
              <Dashboard />
          </Body>
      </ClientOnly>
        {children}
      </body>
    </html>
  )
}
