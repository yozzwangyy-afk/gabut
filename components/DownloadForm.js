'use client'
import { useState } from 'react'

export default function DownloadForm({ onDownloadSuccess }) {
  const [url, setUrl] = useState('')
  const [format, setFormat] = useState('1080p')
  const [downloadType, setDownloadType] = useState('video')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const validateYouTubeUrl = (url) => {
    const patterns = [
      /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=)([a-zA-Z0-9_-]+)/,
      /^(https?:\/\/)?(www\.)?(youtu\.be\/)([a-zA-Z0-9_-]+)/,
      /^(https?:\/\/)?(www\.)?(youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/,
      /^(https?:\/\/)?(www\.)?(youtube\.com\/v\/)([a-zA-Z0-9_-]+)/
    ]
    return patterns.some(pattern => pattern.test(url))
  }

  const handleDownload = async () => {
    setError('')
    setSuccess('')
    
    if (!url.trim()) {
      setError('Masukkan URL YouTube')
      return
    }

    if (!validateYouTubeUrl(url)) {
      setError('URL YouTube tidak valid. Pastikan URL berasal dari YouTube.')
      return
    }

    setLoading(true)

    try {
      // Determine the actual format based on download type
      let actualFormat = format
      if (downloadType === 'audio') {
        actualFormat = format.endsWith('k') ? format : '128k'
      } else {
        actualFormat = format.endsWith('p') ? format : '1080p'
      }

      const response = await fetch('/api/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: url.trim(),
          format: actualFormat,
          type: downloadType
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `Error: ${response.status}`)
      }

      // Get filename from content-disposition header
      const contentDisposition = response.headers.get('content-disposition')
      const filename = contentDisposition 
        ? contentDisposition.split('filename=')[1].replace(/"/g, '')
        : `download.${downloadType === 'audio' ? 'mp3' : 'mp4'}`

      // Convert response to blob
      const blob = await response.blob()
      
      // Create download link
      const downloadUrl = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = downloadUrl
      a.download = filename
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(downloadUrl)

      setSuccess(`Berhasil mendownload ${filename}`)
      
      // Call success callback
      if (onDownloadSuccess) {
        onDownloadSuccess({
          url,
          format: actualFormat,
          type: downloadType,
          filename,
          timestamp: new Date().toISOString()
        })
      }

      // Reset form
      setUrl('')
      
    } catch (err) {
      console.error('Download error:', err)
      setError(err.message || 'Terjadi kesalahan saat download. Coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setUrl(text)
    } catch (err) {
      console.error('Failed to read clipboard:', err)
      // Fallback for browsers that don't support clipboard API
      setError('Browser tidak mendukung paste otomatis. Silakan paste manual.')
    }
  }

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        Download YouTube Video/Audio
      </h2>

      {/* Download Type Selection */}
      <div className="form-group">
        <label className="form-label">Jenis Download:</label>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input
              type="radio"
              value="video"
              checked={downloadType === 'video'}
              onChange={(e) => setDownloadType(e.target.value)}
              style={{ marginRight: '0.5rem' }}
            />
            Video (MP4)
          </label>
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input
              type="radio"
              value="audio"
              checked={downloadType === 'audio'}
              onChange={(e) => setDownloadType(e.target.value)}
              style={{ marginRight: '0.5rem' }}
            />
            Audio (MP3)
          </label>
        </div>
      </div>

      {/* URL Input */}
      <div className="form-group">
        <label className="form-label">URL YouTube:</label>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=..."
            className="form-input"
            style={{ flex: 1 }}
          />
          <button
            type="button"
            onClick={handlePaste}
            className="btn"
            style={{ 
              background: '#6c757d', 
              color: 'white',
              whiteSpace: 'nowrap'
            }}
          >
            Paste
          </button>
        </div>
      </div>

      {/* Format Selection */}
      <div className="form-group">
        <label className="form-label">Kualitas:</label>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="form-select"
        >
          {downloadType === 'video' ? (
            <>
              <optgroup label="Kualitas Video">
                <option value="1080p">1080p (HD)</option>
                <option value="720p">720p (HD)</option>
                <option value="480p">480p</option>
                <option value="360p">360p</option>
                <option value="240p">240p</option>
                <option value="144p">144p</option>
              </optgroup>
            </>
          ) : (
            <optgroup label="Kualitas Audio">
              <option value="320k">320kbps (High Quality)</option>
              <option value="256k">256kbps</option>
              <option value="192k">192kbps</option>
              <option value="128k">128kbps</option>
            </optgroup>
          )}
        </select>
      </div>

      {/* Error/Success Messages */}
      {error && (
        <div className="alert alert-error">
          ⚠️ {error}
        </div>
      )}

      {success && (
        <div className="alert alert-success">
          ✅ {success}
        </div>
      )}

      {/* Download Button */}
      <button
        onClick={handleDownload}
        disabled={loading || !url.trim()}
        className={`btn ${downloadType === 'video' ? 'btn-primary' : 'btn-secondary'}`}
        style={{ width: '100%', fontSize: '1.1rem', padding: '15px' }}
      >
        {loading ? (
          <>
            <span className="loading"></span>
            Memproses {downloadType === 'video' ? 'Video' : 'Audio'}...
          </>
        ) : (
          `Download ${downloadType === 'video' ? 'Video' : 'Audio'}`
        )}
      </button>

      {/* Info */}
      <div style={{ 
        marginTop: '1rem', 
        padding: '1rem',
        background: '#e3f2fd',
        borderRadius: '6px',
        fontSize: '0.9rem',
        color: '#1565c0'
      }}>
        <strong>Info:</strong> Download mungkin memerlukan waktu beberapa menit tergantung ukuran file dan koneksi internet.
      </div>
    </div>
  )
}
