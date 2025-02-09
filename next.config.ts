import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: false,
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: '/:path((?!product|about).*)',
                destination: '/home',
            },
        ]
    },
};

export default nextConfig;
