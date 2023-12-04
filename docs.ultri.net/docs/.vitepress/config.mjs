import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ultri Documentation",
  description: "Policies, terms and documentation for Ultri.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Documents',
        items: [
          { text: 'Privacy Policy', link: '/privacy-policy/' },
          { text: 'Terms of Service', link: '/terms-of-service/' },
          { text: 'Support Documents', link: '/support/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
