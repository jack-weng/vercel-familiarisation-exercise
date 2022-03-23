/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   redirects: [
//     { 
//       source: '/hello-vercel',
//       destination: 'https://vercel.com',
//       permanent: true,
//     }
//   ]
// }

module.exports = {
  async redirects() {
    return [
      { 
        source: '/hello-vercel',
        destination: 'https://vercel.com',
        permanent: false,
      }
    ]
  },
}

// module.exports = nextConfig
