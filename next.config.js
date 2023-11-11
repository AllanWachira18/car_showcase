/** @type {import('next').NextConfig} */
const nextConfig = {
    Images: {
        domains: [ 'cdn.imagin.studio' ]
    },
    typescript: {
        ignoreBuilErrors: true,
    }
}

module.exports = nextConfig
