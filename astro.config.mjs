import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightClientMermaid from '@pasqal-io/starlight-client-mermaid';
import sidebarConfig from './sidebar.config.mjs';

export default defineConfig({
  site: 'https://over-the-edge-newspaper-society.github.io',
  base: '/over-the-edge-docs/',
  integrations: [
    starlight({
      plugins: [starlightClientMermaid()],
      title: 'Over the Edge',
      description: 'News Documentation & Style Guide',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Over-the-Edge-Newspaper-Society/ote-documentation',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/Over-the-Edge-Newspaper-Society/ote-documentation/edit/starlight/',
      },
      sidebar: sidebarConfig,
      customCss: [
        './src/styles/custom.scss',
      ],
      components: {
        SiteTitle: './src/components/LogoInline.astro',
      },
      favicon: '/img/ote-logo.svg',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
      },
    }),
  ],
  markdown: {
    remarkPlugins: [],
  },
});
