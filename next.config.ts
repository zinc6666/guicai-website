import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  //output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  /* config options here */
  devIndicators: {
    //appIsrStatus: false,
    //buildActivity: false,
    //buildActivityPosition: 'bottom-right',
  },
  turbopack: {}
};

export default withNextIntl(nextConfig);
