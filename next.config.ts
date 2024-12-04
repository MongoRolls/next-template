import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true', //当环境变量ANALYZE为true时开启
});

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    additionalData: '@import "@/assets/styles/index.scss";',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https' as const,
        hostname: 'www.test.com',
      },
    ],
  },
};

export default withBundleAnalyzer(nextConfig);
