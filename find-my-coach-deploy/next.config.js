/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // Enable compression for better performance
  compress: true,
  // Remove experimental optimizeCss that's causing issues
  output: 'standalone',
}

module.exports = nextConfig
