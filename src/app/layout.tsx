import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clerk Auth Prototype',
  description: 'A beautiful authentication prototype using Clerk',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="ja">
        <body className={inter.className}>
          <div className="app-container">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
