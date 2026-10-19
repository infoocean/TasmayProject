import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // Keep the compiler in-process for environments that restrict child processes.
    useTypeScriptCli: false,
    webpackBuildWorker: false,
  },
};

export default nextConfig;
