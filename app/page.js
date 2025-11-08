'use client'
import { useState } from 'react'
import DownloadForm from '../components/DownloadForm'

export default function Home() {
  const [recentDownloads, setRecentDownloads] = useState([])

  const addToRecent = (download) => {
    setRecentDownloads(prev => [download, ...prev.slice(0, 4)])
  }

  return (
    <div className="container">
      {/* Hero Section */}
      <section style={{ 
        textAlign: 'center', 
        padding: '4rem 0 2rem 0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        borderRadius: '0 0 20px 20px',
        marginBottom: '2rem'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
          YouTube Downloader
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Download video dan audio dari YouTube dengan kualitas tinggi. Cepat, mudah, dan gratis!
        </p>
      </section>

      {/* Download Form Section */}
      <section className="card">
        <DownloadForm onDownloadSuccess={addToRecent} />
      </section>

      {/* Features Section */}
      <section style={{ margin: '3rem 0' }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          color: '#333'
        }}>
          Mengapa Pilih YouTube Downloader Kami?
        </h2>
        <div className="grid grid-2">
          <div style={{ textAlign: 'center', padding: '1.5rem' }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #ff0000, #cc0000)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem auto',
              color: 'white',
              fontSize: '2rem'
            }}>
              ⚡
            </div>
            <h3 style={{ marginBottom: '1rem' }}>Cepat & Efisien</h3>
            <p>Proses download yang cepat dengan server yang optimal</p>
          </div>
          <div style={{ textAlign: 'center', padding: '1.5rem' }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #2196f3, #1976d2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem auto',
              color: 'white',
              fontSize: '2rem'
            }}>
              🎯
            </div>
            <h3 style={{ marginBottom: '1rem' }}>Kualitas Terbaik</h3>
            <p>Download dengan kualitas hingga 1080p untuk video dan 320kbps untuk audio</p>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="card">
        <h2 style={{ marginBottom: '1.5rem' }}>Cara Menggunakan</h2>
        <div className="grid grid-2">
          <div>
            <h4 style={{ marginBottom: '1rem', color: '#ff0000' }}>1. Salin URL</h4>
            <p>Salin URL video YouTube yang ingin didownload</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem', color: '#2196f3' }}>2. Tempel & Pilih Format</h4>
            <p>Tempel URL dan pilih format yang diinginkan</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem', color: '#4caf50' }}>3. Download</h4>
            <p>Klik tombol download dan tunggu proses selesai</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem', color: '#ff9800' }}>4. Selesai</h4>
            <p>File akan otomatis terdownload ke perangkat Anda</p>
          </div>
        </div>
      </section>
    </div>
  )
}
