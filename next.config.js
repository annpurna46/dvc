/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["therminic2018.eu",'i.imgur.com', 'images.unsplash.com', 'dummyimage.com'],
      }, 
      experimental: {
    ppr: true,
  },
}

module.exports =   nextConfig

