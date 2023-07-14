/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.uplifers.com", "www.example.com"]
  },
  eslint: {
      ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;