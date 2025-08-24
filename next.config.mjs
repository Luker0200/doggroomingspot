import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  // Configure body size limit for file uploads
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // Allow up to 10MB for file uploads
    },
  },
};

export default withMDX(nextConfig);
