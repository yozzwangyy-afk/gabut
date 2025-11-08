import { yt } from '@/lib/youtube'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { url, format, type } = await request.json()

    if (!url) {
      return NextResponse.json(
        { error: 'URL YouTube diperlukan' },
        { status: 400 }
      )
    }

    // Validasi URL YouTube
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/
    if (!youtubeRegex.test(url)) {
      return NextResponse.json(
        { error: 'URL YouTube tidak valid' },
        { status: 400 }
      )
    }

    // Tentukan format berdasarkan type
    let downloadFormat = format
    if (type === 'mp3') {
      downloadFormat = format.endsWith('k') ? format : '128k'
    } else {
      downloadFormat = format.endsWith('p') ? format : '1080p'
    }

    const { buffer, fileName } = await yt.download(url, downloadFormat)

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': type === 'mp3' ? 'audio/mpeg' : 'video/mp4',
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Length': buffer.length.toString(),
      },
    })

  } catch (error) {
    console.error('Download error:', error)
    return NextResponse.json(
      { error: error.message || 'Terjadi kesalahan saat download' },
      { status: 500 }
    )
  }
}
