const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? process.env.DEPLOY_URL : '',
  webpack: (config, { isServer }) => {
    // if (isServer) {
    //   require('./scripts/generate-sitemap');
    // }

    return config
  }
}