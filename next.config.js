/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
    webpack: (config) => {
        config.resolve.alias.canvas = false

        return config
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com",
                port: "",
                pathname: "**",
            },
        ],
    },
}

module.exports = nextConfig
