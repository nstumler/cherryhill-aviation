/** @type {import('next').NextConfig} */
const repoName = 'cherryhill'
const isGithubPages = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // Ensure correct asset paths when hosted under /cherryhill on GitHub Pages
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
};

export default nextConfig;
