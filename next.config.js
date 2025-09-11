/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "rqcoa3ubmzn9qpsj.public.blob.vercel-storage.com",
      },
      {
        hostname: "werrw9ab8jfgfuic.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
