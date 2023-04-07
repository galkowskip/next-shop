/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  }, 
  webpack: (config, _) => ({
    ...config,
    watchOptions: {
      ...config.watchOptions,
      poll: 800,
      aggregateTimeout: 300,
    },
  }),
}

module.exports = nextConfig
