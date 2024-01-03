/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer()({
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'i.imgur.com'],
  },
});
