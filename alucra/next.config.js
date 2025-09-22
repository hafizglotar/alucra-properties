/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['admin.test'], // your API domain
  },
};

module.exports = nextConfig;
