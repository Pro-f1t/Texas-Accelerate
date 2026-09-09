import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hides the floating Next.js dev badge in the bottom corner.
  devIndicators: false,
  // The projects page shipped as /employers for a while; keep old links alive.
  async redirects() {
    return [{ source: "/employers", destination: "/projects", permanent: true }];
  },
};

export default nextConfig;
