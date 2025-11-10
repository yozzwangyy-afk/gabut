export const metadata = {
  title: 'YouTube Video Downloader',
  description: 'Unduh video YouTube dengan cepat dan gratis!',
  manifest: '/manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta name="theme-color" content="#667eea" />
      </head>
      <body>{children}</body>
    </html>
  )
}
