import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SharedChain",
  description: "Distributed Business Management on a Blockchain",
  head: [
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-3J7RCCFPTQ",
      },
    ],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-3J7RCCFPTQ');",
    ],
  ],
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
          { text: 'Cooperative Proof', link: '/cooperative-proof/' },
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
