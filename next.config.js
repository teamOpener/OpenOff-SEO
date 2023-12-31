/** @type {import('next').NextConfig} */
const path = require('path');

const isBuildCommand = process.env.npm_lifecycle_event === 'build';

const nextConfig = {
  output: isBuildCommand ? 'export' : undefined,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_IMAGE_SERVER,
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@/styles/abstracts/variables";`,
  },
  experimental: {
    isrMemoryCacheSize: 0,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
