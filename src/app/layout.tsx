import '@/styles/globals.css'
import { Josefin_Sans, Maven_Pro } from 'next/font/google'
import { ThemeProvider } from "@/components/provider/theme-provider"
import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'

const mainFont = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-main",
})

const bodyFont = Maven_Pro({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: {
    template: '%s | Elbouchouki Ahmed',
    default: 'Elbouchouki Ahmed',
  },
  icons: [
    {
      url: '/favicon.ico',
      rel: 'icon',
    },
    {
      url: '/favicon.ico',
      rel: 'shortcut icon',
    },
    {
      url: '/favicon.ico',
      rel: 'apple-touch-icon',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"
      suppressHydrationWarning
    >
      <body
        className={cn(
          mainFont.className,
          bodyFont.className,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex flex-col items-center mt-14">
            <div className="w-full max-w-lg px-4">
              {children}
              <Footer />
            </div>
          </main>
          <Analytics mode='production' />
        </ThemeProvider>
      </body>
    </html>
  )
}
