import './globals.css'
import { Josefin_Sans, Maven_Pro } from 'next/font/google'
import { ThemeProvider } from "@/components/provider/theme-provider"
import Navbar from '@/components/ui/navbar'
import { cn } from '@/lib/utils'
import Footer from '@/components/ui/footer'
const mainFont = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-main",
})

const bodyFont = Maven_Pro({
  subsets: ["latin"],
  variable: "--font-body",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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

        </ThemeProvider>
      </body>
    </html>
  )
}
