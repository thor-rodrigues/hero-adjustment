/** @type {import('next').NextConfig} */

import nextra from 'nextra'
import { remarkCodeHike } from '@code-hike/mdx'
import withExportImages from 'next-export-optimize-images'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  latex: true,
  mdxOptions: {
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          theme: 'dark-plus',
          showCopyButton: true,
          skipLanguages: ['mermaid'],
        },
      ],
    ],
  },
})

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  env: {
    GTM_ID: process.env.GTM_ID,
  },
  transpilePackages: ['@scalar', 'react-tweet'],
  images: {
    formats: ['image/webp'],
  },
}

export default withExportImages(withNextra(nextConfig))
