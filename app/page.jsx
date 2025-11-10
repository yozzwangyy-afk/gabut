'use client'
import { useState } from 'react'

export default function Home() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [video, setVideo] = useState(null)

  const fetchVideo = async () => {
    if (!url.trim()) {
      setError('Masukkan URL YouTube terlebih dahulu')
      return
    }

    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/
    if (!youtubeRegex.test(url)) {
      setError('URL YouTube tidak valid')
      return
    }

    setError('')
    setLoading(true)
    setVideo(null)

    try {
      // 🔥 sekarang pakai endpoint lokal agar bebas CORS
      const res = await fetch(`/api/ytdl?url=${encodeURIComponent(url)}`)
      const data = await res.json()

      if (data.status !== 'success') {
        throw new Error(data.message || 'Gagal mengambil data video')
      }

      setVideo(data.data)
    } catch (err) {
      console.error(err)
      setError('Gagal mengambil informasi video. Coba lagi nanti.')
    } finally {
      setLoading(false)
    }
  }

  const formatFileSize = (bytes) => {
    if (!bytes || bytes <= 0) return 'Unknown'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-600 p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          YouTube Video Downloader
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="Tempel URL YouTube di sini..."
            className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchVideo()}
          />
          <button
            onClick={fetchVideo}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Download
          </button>
        </div>

        {loading && (
          <div className="mt-6">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-indigo-500 rounded-full animate-spin mx-auto"></div>
            <p className="text-gray-500 mt-3">Mengambil data video...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mt-4 font-medium">
            {error}
          </div>
        )}

        {video && (
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
            <img
              src={video.thumbnail}
              alt="Thumbnail"
              className="w-40 h-40 mx-auto rounded-xl object-cover shadow-md"
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-3">
              {video.title}
            </h2>

            <div className="grid gap-4 mt-6">
              {video.formats?.map((f, idx) =>
                f.url ? (
                  <div
                    key={idx}
                    className="p-4 border border-gray-200 rounded-lg flex justify-between items-center hover:shadow-md transition"
                  >
                    <div>
                      <p className="font-semibold text-indigo-600">
                        {f.qualityLabel || f.quality || 'Audio Only'}
                      </p>
                      <p className="text-sm text-gray-500">
                        {formatFileSize(f.fileSize)}
                      </p>
                    </div>
                    <a
                      href={f.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium"
                    >
                      Download
                    </a>
                  </div>
                ) : null
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
