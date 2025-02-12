// import type { NextConfig } from "next";
const nextConfig = {
    output: "standalone",
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
