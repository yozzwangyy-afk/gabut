/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['files.catbox.moe'],
    unoptimized: true
  },
}

module.exports = nextConfig
