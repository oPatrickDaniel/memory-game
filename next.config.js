/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/gh/devicons/devicon/icons/**',
      },
    ],
  },
}

module.exports = nextConfig
