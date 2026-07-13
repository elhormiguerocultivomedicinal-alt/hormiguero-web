/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    qualities: [40, 75],
  },
};

export default nextConfig;
