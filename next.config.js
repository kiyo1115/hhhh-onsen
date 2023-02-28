/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    // const exist =
    // "http://localhost:5000/api/auth/login"
    //  ||
    //  "https://hhhh-onsen.vercel.app/api/api/auth/login";
    // const exist2 =
    // "http://localhost:5000/api/auth/register"
    // ||
    // "https://hhhh-onsen.vercel.app/api/api/auth/register";

    return [
      {
        source: "/auth/login",
        // destination: "http://localhost:5000/auth/login"
        destination: "https://hhhh-onsen.vercel.app/api/auth/login",
      },
      {
        source: "/auth/register",
        // destination: "http://localhost:5000/auth/register"
        destination: "https://hhhh-onsen.vercel.app/api/auth/register",

        // Matched parameters can be used in the destination
      },
      // {
      //   source: "https://hhhh-onsen.vercel.app/auth/login",
      //   destination:"https://hhhh-onsen.vercel.app/api/auth/login"
      // },
      // {
      //   source: "https://hhhh-onsen.vercel.app/auth/register ",
      //   destination:
      //   "https://hhhh-onsen.vercel.app/api/auth/register"
      // },
    ];
  },
};

module.exports = nextConfig;
