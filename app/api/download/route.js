import { yt } from '@/lib/youtube'
import { NextResponse } from 'next/server'

export async function POST(request) {
  let startTime = Date.now()
  
  try {
    const { url, format, type } = await request.json()

    // Log the request
    console.log(`[API] Download request:`, { 
      url: url?.substring(0, 100), 
      format, 
      type,
      timestamp: new Date().toISOString()
    })

    // Validate input
    if (!url || typeof url !== 'string') {
      return NextResponse.json(
        { error: 'URL YouTube diperlukan' },
        { status: 400 }
      )
    }

    if (!format) {
      return NextResponse.json(
        { error: 'Format diperlukan' },
        { status: 400 }
      )
    }

    // Validate YouTube URL
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    if (!youtubeRegex.test(url)) {
      return NextResponse.json(
        { error: 'URL YouTube tidak valid. Pastikan URL berasal dari YouTube.' },
        { status: 400 }
      )
    }

    // Download the file
    const { buffer, fileName, fileSize } = await yt.download(url, format)

    const processingTime = Date.now() - startTime
    console.log(`[API] Download completed:`, {
      fileName,
      fileSize: `${(fileSize / 1024 / 1024).toFixed(2)}MB`,
      processingTime: `${(processingTime / 1000).toFixed(2)}s`,
      success: true
    })

    // Determine content type
    const contentType = type === 'audio' ? 'audio/mpeg' : 'video/mp4'

    // Return the file
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Length': buffer.length.toString(),
        'X-Processing-Time': processingTime.toString(),
        'X-File-Size': fileSize.toString(),
      },
    })

  } catch (error) {
    const processingTime = Date.now() - startTime
    console.error(`[API] Download error:`, {
      error: error.message,
      processingTime: `${(processingTime / 1000).toFixed(2)}s`,
      success: false
    })

    // Handle specific error types
    let statusCode = 500
    let errorMessage = error.message

    if (error.message.includes('URL YouTube tidak valid')) {
      statusCode = 400
    } else if (error.message.includes('Format tidak valid')) {
      statusCode = 400
    } else if (error.message.includes('timeout')) {
      statusCode = 408
      errorMessage = 'Timeout: Proses terlalu lama. Silakan coba lagi.'
    } else if (error.message.includes('HTTP 4')) {
      statusCode = 400
      errorMessage = 'URL tidak dapat diakses atau tidak valid.'
    } else if (error.message.includes('HTTP 5')) {
      statusCode = 502
      errorMessage = 'Server sementara tidak dapat memproses. Silakan coba lagi nanti.'
    }

    return NextResponse.json(
      { 
        error: errorMessage,
        processingTime: `${(processingTime / 1000).toFixed(2)}s`
      },
      { status: statusCode }
    )
  }
}

// Add OPTIONS handler for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
