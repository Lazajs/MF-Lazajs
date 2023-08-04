const { NextFederationPlugin } = require('@module-federation/nextjs-mf')

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options
    config.plugins.push(
      new NextFederationPlugin({
        name: 'section_mf',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          host: `host@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`
        },
        exposes: {
          './Section': './src/components/Section.tsx'
        },
        extraOptions: {
          exposePages: true,
          automaticAsyncBoundary: true
        }
      })
    )
    return config
  }
}

module.exports = nextConfig
