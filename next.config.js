/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['files.catbox.moe', 'i.pinimg.com'],
    unoptimized: true
  },
}

module.exports = nextConfig
