/** @type {import('next').NextConfig} */
const repoName = 'cherryhill'
const isGithubPages = process.env.GITHUB_ACTIONS === 'true'
const isGoDaddyBuild = process.env.GODADDY_BUILD === 'true'

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // Ensure correct asset paths for different hosting environments
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
};

export default nextConfig;
