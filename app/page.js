'use client'
import { useState } from 'react'

export default function Home() {
  const [url, setUrl] = useState('')
  const [format, setFormat] = useState('1080p')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleDownload = async (type) => {
    if (!url) {
      setError('Masukkan URL YouTube')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url,
          format,
          type: type === 'video' ? 'mp4' : 'mp3'
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Download gagal')
      }

      const blob = await response.blob()
      const filename = response.headers.get('content-disposition')?.split('filename=')[1] || 'download'
      
      // Create download link
      const downloadUrl = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = downloadUrl
      a.download = filename
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(downloadUrl)

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>YouTube Downloader</h1>
      
      <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            URL YouTube:
          </label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://youtu.be/..."
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Format:
          </label>
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          >
            <optgroup label="Video">
              <option value="144p">144p</option>
              <option value="240p">240p</option>
              <option value="360p">360p</option>
              <option value="720p">720p</option>
              <option value="1080p">1080p</option>
            </optgroup>
            <optgroup label="Audio">
              <option value="128k">128k (MP3)</option>
              <option value="320k">320k (MP3)</option>
            </optgroup>
          </select>
        </div>

        {error && (
          <div style={{
            background: '#ffebee',
            color: '#c62828',
            padding: '10px',
            borderRadius: '4px',
            marginBottom: '15px'
          }}>
            {error}
          </div>
        )}

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => handleDownload('video')}
            disabled={loading || !url}
            style={{
              flex: 1,
              padding: '12px',
              background: '#ff0000',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: loading || !url ? 'not-allowed' : 'pointer',
              opacity: loading || !url ? 0.6 : 1
            }}
          >
            {loading ? 'Memproses...' : 'Download Video'}
          </button>

          <button
            onClick={() => handleDownload('audio')}
            disabled={loading || !url}
            style={{
              flex: 1,
              padding: '12px',
              background: '#2196f3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: loading || !url ? 'not-allowed' : 'pointer',
              opacity: loading || !url ? 0.6 : 1
            }}
          >
            {loading ? 'Memproses...' : 'Download Audio'}
          </button>
        </div>
      </div>

      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <h3>Cara Penggunaan:</h3>
        <ol>
          <li>Salin URL video YouTube</li>
          <li>Tempel URL di atas</li>
          <li>Pilih format yang diinginkan</li>
          <li>Klik tombol download</li>
        </ol>
      </div>
    </div>
  )
}
