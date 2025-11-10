import { NextResponse } from 'next/server'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const url = searchParams.get('url')

  if (!url) {
    return NextResponse.json({ status: 'error', message: 'URL tidak diberikan' }, { status: 400 })
  }

  try {
    const api = `https://api.luxzoffc.web.id/download/ytdl?url=${encodeURIComponent(url)}`
    const res = await fetch(api)
    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { status: 'error', message: 'Gagal mengambil informasi video dari API' },
      { status: 500 }
    )
  }
}
