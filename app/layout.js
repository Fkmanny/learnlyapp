import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Teachmate AI - Best learning AI',
  description: 'Gain knowledge at ease',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        
      <body className={inter.className}>
      <Toaster />{children}</body>
    </html>
  )
}
