import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  //output: 'export',
  //images: {
    //unoptimized: true,  // 静态导出时必须加这一行（避免图片优化问题）
  //},
  /* config options here */
  devIndicators: {
    //appIsrStatus: false,
    //buildActivity: false,
    //buildActivityPosition: 'bottom-right',
  },
  turbopack: {}
};

export default withNextIntl(nextConfig);
