import './globals.css'

export const metadata = {
  title: 'YouTube Downloader - Download Video & Audio',
  description: 'Download video dan audio dari YouTube dengan kualitas tinggi',
  keywords: 'youtube downloader, download video youtube, download audio youtube',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header style={{
          background: 'linear-gradient(135deg, #ff0000, #cc0000)',
          color: 'white',
          padding: '1rem 0',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 'bold' }}>
              YouTube Downloader
            </h1>
            <p style={{ margin: '5px 0 0 0', opacity: 0.9 }}>
              Download video dan audio dari YouTube dengan mudah
            </p>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer style={{
          background: '#333',
          color: 'white',
          textAlign: 'center',
          padding: '2rem 0',
          marginTop: '3rem'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <p>&copy; 2024 YouTube Downloader. Tools untuk download konten YouTube.</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
              Disclaimer: Gunakan tools ini dengan bijak dan sesuai dengan ketentuan YouTube.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
