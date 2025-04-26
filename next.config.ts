import type { NextConfig } from "next";
import withNextIntl from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // TypeScript hatalarını görmezden gelecek şekilde konfigüre ediyoruz
  typescript: {
    ignoreBuildErrors: true,
  },
  // ESLint hatalarını görmezden gelecek şekilde konfigüre ediyoruz
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withNextIntl()(nextConfig);
