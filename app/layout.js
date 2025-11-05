import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Riyo - Anime Content Creator',
  description: 'Portofolio personal Riyo sebagai Anime Content Creator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
