const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@shibuya/ui", "@shibuya/lib", "@shibuya/contracts"],
};

module.exports = withPWA(nextConfig);
