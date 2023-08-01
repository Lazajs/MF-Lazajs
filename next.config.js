const {NextFederationPlugin} = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const {isServer} = options
    config.plugins.push(
     new NextFederationPlugin({
        name: 'section_mf',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Section': './src/components/Section',
        },
      })
    )
    return config
  }
}

module.exports = nextConfig