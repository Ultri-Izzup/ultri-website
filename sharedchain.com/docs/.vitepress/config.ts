import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SharedChain",
  description: "Distributed Business Management on a Blockchain",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Proposal', link: '/proposal/' },
      { text: 'Sponsors', link: '/sponsors/' }
    ],

    sidebar: [
      {
        text: 'About SharedChain',
        items: [
          { text: 'Benefits', link: '/benefits/' },
          { text: 'Sponsors', link: '/sponsors/' },
          { text: 'Technology', link: '/technology/' },
        ]
      },
      {
        text: 'Architecture',
        items: [
          { text: 'Server', link: '/architecture/server/' },
          { text: 'Clients', link: '/architecture/clients/'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
