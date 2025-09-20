// next.config.mjs
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const nextConfig = {
  turbopack: { root: __dirname },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn*.bigcommerce.com' },
      { protocol: 'https', hostname: 'images.bigcommerce.com' },
      { protocol: 'https', hostname: '*.mxplantae.com' },
      { protocol: 'https', hostname: '*.vercel.app' },
    ],
  },
}
export default nextConfig

module.exports = {
  siteUrl: "https://mxplantae.com",
  generateRobotsTxt: true,
  exclude: ["/api/*", "/makeswift/system/*"],
   
};

