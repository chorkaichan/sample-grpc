module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      http2: false,
      tls: false,
      dns: false,
      net: false,
      fs: false,
    }
    return config
  },
}
