/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  async rewrites() {
    return [
      {
        source: "/auth/login",
        destination:
          "http://localhost:5000/api/auth/login" ||
          "https://hhhh-onsen.vercel.app/api/auth/login",
      },
      {
        source: "/auth/register",
        destination:
          "http://localhost:5000/api/auth/register" ||
          "https://hhhh-onsen.vercel.app/api/auth/login", // Matched parameters can be used in the destination
      },
    ];
  },
};
