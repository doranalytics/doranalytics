import localFont from 'next/font/local'
import { ThemeProvider } from "next-themes"
import './globals.css'

const attilaSans = localFont({
  src: [
    {
      path: '../public/fonts/AttilaSansClassic-Black.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/AttilaSansClassic-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/AttilaSansSharp-Semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/AttilaSansSharp-Thin.woff',
      weight: '100',
      style: 'normal',
    }
  ],
  variable: '--font-attila'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${attilaSans.variable}`}>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background font-sans">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
