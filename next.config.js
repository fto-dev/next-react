/** @type {import('next').NextConfig} */

const path = require('path')
const { i18n } = require('./next-i18next.config')


const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'de', 'fr'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    
    config.resolve.modules.push(path.resolve('./public/'))
    
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config;
  }
}

module.exports = nextConfig
