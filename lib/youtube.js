const yt = {
  static: Object.freeze({
    baseUrl: 'https://cnv.cx',
    headers: {
      'accept-encoding': 'gzip, deflate, br, zstd',
      'accept': 'application/json, text/plain, */*',
      'origin': 'https://frame.y2meta-uk.com',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36 Edg/142.0.0.0',
      'content-type': 'application/x-www-form-urlencoded'
    }
  }),

  log(m) { 
    console.log(`[yt-downloader] ${new Date().toISOString()}: ${m}`) 
  },

  resolveConverterPayload(link, f = '128k') {
    const videoFormats = ['144p', '240p', '360p', '480p', '720p', '1080p']
    const audioFormats = ['128k', '192k', '256k', '320k']
    
    const allFormats = [...audioFormats, ...videoFormats]
    if (!allFormats.includes(f)) {
      throw Error(`Format tidak valid. Format yang tersedia: ${allFormats.join(', ')}`)
    }

    const type = f.endsWith('k') ? 'mp3' : 'mp4'
    const audioBitrate = type === 'mp3' ? parseInt(f) + '' : '128'
    const videoQuality = type === 'mp4' ? parseInt(f) + '' : '720'

    return {
      link,
      format: type,
      audioBitrate,
      videoQuality,
      filenameStyle: 'pretty',
      vCodec: 'h264'
    }
  },

  sanitizeFileName(filename) {
    try {
      // Get file extension
      const extension = filename.match(/\.[^.]+$/)?.[0] || '.mp4'
      
      // Remove extension and sanitize the name
      const nameWithoutExt = filename.replace(new RegExp(`\\${extension}$`), '')
      const sanitized = nameWithoutExt
        .replace(/[^A-Za-z0-9\s]/g, '_')
        .replace(/\s+/g, '_')
        .replace(/_+/g, '_')
        .toLowerCase()
        .substring(0, 100) // Limit length
      
      return sanitized + extension
    } catch (error) {
      // Return default filename if sanitization fails
      return `youtube_download_${Date.now()}${filename.match(/\.[^.]+$/)?.[0] || '.mp4'}`
    }
  },

  async getBuffer(downloadUrl) {
    try {
      this.log(`Mendownload file dari: ${downloadUrl}`)
      
      const headers = { ...this.static.headers }
      headers.referer = 'https://v6.www-y2mate.com/'
      headers.range = 'bytes=0-'
      delete headers.origin

      const response = await fetch(downloadUrl, { 
        headers,
        // Add timeout
        signal: AbortSignal.timeout(300000) // 5 minutes timeout
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const contentLength = response.headers.get('content-length')
      this.log(`Ukuran file: ${contentLength ? (contentLength / 1024 / 1024).toFixed(2) + 'MB' : 'unknown'}`)

      const arrayBuffer = await response.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)

      this.log(`Download selesai, ukuran buffer: ${(buffer.length / 1024 / 1024).toFixed(2)}MB`)
      return buffer

    } catch (error) {
      this.log(`Error dalam getBuffer: ${error.message}`)
      throw new Error(`Gagal mendownload file: ${error.message}`)
    }
  },

  async getKey() {
    try {
      this.log('Mendapatkan API key...')
      
      const response = await fetch(`${this.static.baseUrl}/v2/sanity/key`, {
        headers: this.static.headers,
        signal: AbortSignal.timeout(10000) // 10 seconds timeout
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      this.log('API key berhasil didapatkan')
      return data

    } catch (error) {
      this.log(`Error mendapatkan key: ${error.message}`)
      throw new Error(`Gagal mendapatkan API key: ${error.message}`)
    }
  },

  async convert(youtubeUrl, format) {
    try {
      this.log(`Memulai konversi: ${youtubeUrl} dengan format ${format}`)
      
      const { key } = await this.getKey()
      const payload = this.resolveConverterPayload(youtubeUrl, format)

      this.log(`Payload konversi: ${JSON.stringify(payload)}`)

      const headers = {
        key,
        ...this.static.headers
      }

      const response = await fetch(`${this.static.baseUrl}/v2/converter`, {
        method: 'POST',
        headers,
        body: new URLSearchParams(payload),
        signal: AbortSignal.timeout(60000) // 1 minute timeout
      })

      if (!response.ok) {
        const errorText = await response.text()
        this.log(`Response error: ${response.status} - ${errorText}`)
        throw new Error(`HTTP ${response.status}: Konversi gagal`)
      }

      const data = await response.json()
      this.log('Konversi berhasil')

      if (!data.url || !data.filename) {
        throw new Error('Data konversi tidak lengkap')
      }

      return data

    } catch (error) {
      this.log(`Error dalam convert: ${error.message}`)
      throw new Error(`Konversi gagal: ${error.message}`)
    }
  },

  async download(youtubeUrl, format) {
    try {
      this.log(`Memulai download: ${youtubeUrl} format ${format}`)
      
      // Step 1: Convert YouTube URL to download URL
      const convertedData = await this.convert(youtubeUrl, format)
      
      // Step 2: Download the actual file
      const buffer = await this.getBuffer(convertedData.url)
      
      // Step 3: Sanitize filename
      const fileName = this.sanitizeFileName(convertedData.filename)

      this.log(`Download selesai: ${fileName}`)
      
      return {
        fileName,
        buffer,
        originalFilename: convertedData.filename,
        fileSize: buffer.length
      }

    } catch (error) {
      this.log(`Error dalam download: ${error.message}`)
      throw error
    }
  }
}

export { yt }
