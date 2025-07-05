// https://nuxt.com/docs/api/configuration/nuxt-config
import { appConfig } from './config/app.config'

export default defineNuxtConfig({
  // App metadata
  app: {
    head: {
      title: appConfig.site.name,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appConfig.site.description },
        { name: 'keywords', content: appConfig.site.keywords.join(', ') },
        { name: 'author', content: appConfig.site.author },
        { property: 'og:title', content: appConfig.site.name },
        { property: 'og:description', content: appConfig.site.description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: appConfig.site.url },
        { property: 'og:image', content: appConfig.site.ogImage },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: appConfig.site.name },
        { name: 'twitter:description', content: appConfig.site.description },
        { name: 'twitter:image', content: appConfig.site.ogImage }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: appConfig.site.favicon },
        { rel: 'canonical', href: appConfig.site.url }
      ]
    }
  },

  // Runtime config for server-side
  runtimeConfig: {
    // Private keys (only available on server-side)
    apiSecret: process.env.API_SECRET,

    // Public keys (exposed to client-side)
    public: {
      apiBase: appConfig.api.baseUrl,
      siteName: appConfig.site.name,
      siteUrl: appConfig.site.url,
      contactEmail: appConfig.contact.email,
      socialMedia: appConfig.socialMedia,
      appConfig: appConfig
    }
  },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  // CSS
  css: [
    '~/assets/css/main.css'
  ],

  // Tailwind CSS
  tailwindcss: {
    config: {
      content: [],
      theme: {
        extend: {
          colors: appConfig.theme.colors,
          fontFamily: appConfig.theme.fonts
        }
      }
    }
  },

  // Build configuration
  build: {
    transpile: []
  },

  // Development tools
  devtools: { enabled: true },

  // Vite configuration for ngrok support
  vite: {
    server: {
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        '.ngrok-free.app',
        '.ngrok.io'
      ]
    }
  },

  // Compatibility
  compatibilityDate: '2025-05-15'
})
