import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack: (config) => {
        return config;
    },
    future: {
        experimental: {
            turboMode: false,
        },
    }
};

export default nextConfig;