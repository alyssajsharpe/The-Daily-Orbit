import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    domains: [
      'apod.nasa.gov', 
      'mars.nasa.gov',
      'images-assets.nasa.gov'],
  },
}

export default nextConfig;
