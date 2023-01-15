/** @type {import('next').NextConfig} */

const path = require('path')
const fs = require('fs')
const { i18n } = require('./next-i18next.config')

const dirRelativeToPublicFolder = "locales/en";
const directoryPath = path.resolve('./public', dirRelativeToPublicFolder);
const files = fs.readdirSync(directoryPath);

const nextConfig = {
  reactStrictMode: true,
  env: {
    localesFiles: [],
  },
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

nextConfig.env.localesFiles = files.map(function(value) {
  return value.split(".json")[0] ;
})

module.exports = nextConfig
