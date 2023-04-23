import { TaskProvider } from '../context/TextContext'
import './globals.css'
import { Inter } from 'next/font/google'
import Home from './page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Trinity-Todo',
  description: 'todos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TaskProvider>
         {children}
        </TaskProvider>
      </body>
    </html>
  )
}
