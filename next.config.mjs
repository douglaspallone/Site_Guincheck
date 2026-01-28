/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Isso permite que o GitHub Pages leia seu site
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
