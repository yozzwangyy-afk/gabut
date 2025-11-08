export const metadata = {
  title: 'YouTube Downloader',
  description: 'Download video dan audio dari YouTube',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
