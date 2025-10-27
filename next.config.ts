import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ryitwsehcqgizpxbnzsq.supabase.co',
      }
    ],
  },
};

export default nextConfig;
