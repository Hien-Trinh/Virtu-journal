/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
    webpack: (config) => {
        config.resolve.alias.canvas = false

        return config
    },
}

module.exports = nextConfig
