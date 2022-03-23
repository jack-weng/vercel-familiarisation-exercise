/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: [
    { 
      source: '/hello-vercel',
      destination: 'https://vercel.com',
      permanent: true,
    }
  ]
}

module.exports = nextConfig
