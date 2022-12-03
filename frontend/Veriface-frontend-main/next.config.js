/** @type {import('next').NextConfig} */
const withFonts = require("next-fonts");

module.exports = withFonts({
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, options) {
    return config;
  },
}); 

