import { appConfig } from '~/config/app.config'

export const useFedHubConfig = () => {
  const runtimeConfig = useRuntimeConfig()

  return {
    // Site configuration
    site: computed(() => appConfig.site),

    // Contact information
    contact: computed(() => appConfig.contact),

    // Social media links
    socialMedia: computed(() => appConfig.socialMedia),

    // API configuration
    api: computed(() => appConfig.api),

    // Theme configuration
    theme: computed(() => appConfig.theme),

    // Internationalization
    i18n: computed(() => appConfig.i18n),

    // Federation specific config
    federation: computed(() => appConfig.federation),

    // Feature flags
    features: computed(() => appConfig.features),

    // SEO configuration
    seo: computed(() => appConfig.seo),

    // Runtime config (from Nuxt)
    runtime: {
      apiBase: computed(() => runtimeConfig.public.apiBase),
      siteName: computed(() => runtimeConfig.public.siteName),
      siteUrl: computed(() => runtimeConfig.public.siteUrl),
      contactEmail: computed(() => runtimeConfig.public.contactEmail),
      socialMedia: computed(() => runtimeConfig.public.socialMedia)
    },

    // Helper methods
    isFeatureEnabled: (feature: keyof typeof appConfig.features) => {
      return appConfig.features[feature]
    },

    getSocialMediaUrl: (platform: keyof typeof appConfig.socialMedia) => {
      return appConfig.socialMedia[platform]
    },

    getThemeColor: (color: keyof typeof appConfig.theme.colors) => {
      return appConfig.theme.colors[color]
    },

    getLocaleInfo: (code: string) => {
      return appConfig.i18n.locales.find((locale: any) => locale.code === code)
    }
  }
}
