/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    // { type: 'autogenerated', dirName: '.' },
    {
      type: 'doc',
      id: 'introduction',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'getting-started',
      label: 'Getting Started',
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        {
          type: 'category',
          label: 'Routing',
          items: [
            {
              type: 'doc',
              id: 'features/routing/overview',
              label: 'Overview',
            },
            {
              type: 'doc',
              id: 'features/routing/metadata',
              label: 'Route Metadata',
            },
            {
              type: 'doc',
              id: 'features/routing/content',
              label: 'Content Routes',
            },
            {
              type: 'doc',
              id: 'features/routing/middleware',
              label: 'Middleware',
            },
          ],
        },
        {
          type: 'category',
          label: 'API Routes',
          items: [
            {
              type: 'doc',
              id: 'features/api/overview',
              label: 'Overview',
            },
          ],
        },
        {
          type: 'category',
          label: 'Data Fetching',
          items: [
            {
              type: 'doc',
              id: 'features/data-fetching/overview',
              label: 'Overview',
            },
            {
              type: 'doc',
              id: 'features/data-fetching/server-side-data-fetching',
              label: 'Server-Side Data Fetching',
            },
          ],
        },
        {
          type: 'category',
          label: 'Static Site Generation',
          items: [
            {
              type: 'doc',
              id: 'features/server/static-site-generation',
              label: 'Overview',
            },
          ],
        },
        {
          type: 'category',
          label: 'Server Side Rendering',
          items: [
            {
              type: 'doc',
              id: 'features/server/server-side-rendering',
              label: 'Overview',
            },
          ],
        },
        {
          type: 'category',
          label: 'Code Generation',
          items: [
            {
              type: 'doc',
              id: 'features/generation/code-generation',
              label: 'Overview',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: [
        {
          type: 'doc',
          id: 'features/deployment/overview',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'features/deployment/providers',
          label: 'Providers',
        },
      ],
    },
    {
      type: 'category',
      label: 'Testing',
      items: [
        {
          type: 'doc',
          id: 'features/testing/overview',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'features/testing/vitest',
          label: 'Adding Vitest',
        },
      ],
    },
    {
      type: 'category',
      label: 'Updating',
      items: [
        {
          type: 'doc',
          id: 'features/updating/overview',
          label: 'Overview',
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'doc',
          id: 'guides/migrating',
          label: 'Migrating an Angular app to Analog',
        },
        {
          type: 'doc',
          id: 'guides/compatibility',
          label: 'Version Compatibilty',
        },
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        {
          type: 'doc',
          id: 'integrations/nx/index',
          label: 'Nx',
        },
        {
          type: 'doc',
          id: 'packages/astro-angular/overview',
          label: 'Astro',
        },
        {
          type: 'doc',
          id: 'packages/vite-plugin-angular/overview',
          label: 'Vite',
        },
        {
          type: 'doc',
          id: 'integrations/angular-material/index',
          label: 'Angular Material',
        },
        {
          type: 'doc',
          id: 'integrations/ionic/index',
          label: 'Ionic Framework',
        },
      ],
    },
    {
      type: 'category',
      label: 'Experimental',
      items: [
        {
          type: 'doc',
          id: 'experimental/sfc/index',
          label: 'Analog SFCs',
        },
      ],
    },
    {
      type: 'doc',
      id: 'contributors',
      label: 'Contributors',
    },
    {
      type: 'doc',
      id: 'support',
      label: 'Support',
    },
  ],

  // But you can create a sidebar manually
  /*
  docsSidebar: [
    {
      type: 'category',
      label: 'Docs',
      items: ['introduction'],
    },
  ],
   */
};

module.exports = sidebars;
