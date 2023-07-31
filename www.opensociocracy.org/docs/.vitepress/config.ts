import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenSociocracy",
  description: "Open Source Sociocracy Tools",
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-375351769' }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-375351769');"
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Join in', link: 'https://discord.gg/rZBBhKwe' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/orgs/OpenSociocracy' },
      { icon: 'twitter', link: 'https://twitter.com/OpenSociocracy'},
      { icon: 'facebook', link: 'https://www.facebook.com/OpenSociocracy/'},
      { icon: 'mastodon', link: 'https://fosstodon.org/@opensociocracy'},
      { icon: "linkedin", link: "https://www.linkedin.com/company/opensociocracy/" },
    ],

    footer: {
      message: 'Sponsored by <a href="https://www.ultri.com/">Ultri</a>',
      copyright: 'Released under the <a href="https://github.com/OpenSociocracy/documentation-website/blob/main/LICENSE">MIT</a> license</a>.<br />Copyright <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA</a>'
    }
  }
})
