import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensures all routes end with a trailing slash during export
  trailingSlash: true,

  // Tell Next.js to export the site as static HTML
  output: 'export',
};

export default nextConfig;
