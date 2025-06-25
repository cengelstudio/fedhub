export interface SiteConfig {
  name: string
  description: string
  keywords: string[]
  author: string
  url: string
  favicon: string
  ogImage: string
  logo: string
  version: string
}

export interface ContactConfig {
  email: string
  phone: string
  address: string
  workingHours: string
}

export interface SocialMediaConfig {
  facebook?: string
  twitter?: string
  instagram?: string
  linkedin?: string
  youtube?: string
  telegram?: string
}

export interface ApiConfig {
  baseUrl: string
  timeout: number
  retryAttempts: number
}

export interface ThemeConfig {
  colors: {
    primary: string
    secondary: string
    accent: string
    success: string
    warning: string
    error: string
    info: string
    light: string
  }
  fonts: {
    sans: string[]
    serif: string[]
    mono: string[]
  }
}

export interface FederationConfig {
  name: string
  description: string
  logo: string
  website: string
  contact: {
    email: string
    phone: string
    address: string
  }
  socialMedia: SocialMediaConfig
  features: string[]
}

export interface AppConfig {
  site: SiteConfig
  contact: ContactConfig
  socialMedia: SocialMediaConfig
  api: ApiConfig
  theme: ThemeConfig
  federation: FederationConfig
  features: {
    blog: boolean
    events: boolean
    members: boolean
    gallery: boolean
    contact: boolean
    newsletter: boolean
  }
  seo: {
    enableSitemap: boolean
    enableRobots: boolean
    analytics: {
      googleAnalytics: string
      facebookPixel: string
    }
  }
}

export const appConfig: AppConfig = {
  site: {
    name: 'FedHub',
    description: 'Federasyonlar için özel olarak üretilmiş tanıtım websiteleri platformu',
    keywords: ['federasyon', 'tanıtım', 'website', 'platform', 'organizasyon'],
    author: 'FedHub Team',
    url: 'https://fedhub.com',
    favicon: '/favicon.ico',
    ogImage: '/images/og-image.jpg',
    logo: '/images/logo.svg',
    version: '1.0.0'
  },

  contact: {
    email: 'info@fedhub.com',
    phone: '+90 (212) 555 0123',
    address: 'İstanbul, Türkiye',
    workingHours: 'Pazartesi - Cuma: 09:00 - 18:00'
  },

  socialMedia: {
    facebook: 'https://facebook.com/fedhub',
    twitter: 'https://twitter.com/fedhub',
    instagram: 'https://instagram.com/fedhub',
    linkedin: 'https://linkedin.com/company/fedhub',
    youtube: 'https://youtube.com/fedhub',
    telegram: 'https://t.me/fedhub'
  },

  api: {
    baseUrl: process.env.NODE_ENV === 'production'
      ? 'https://api.fedhub.com'
      : 'http://localhost:3001',
    timeout: 10000,
    retryAttempts: 3
  },

  theme: {
    colors: {
      primary: '#2563eb',
      secondary: '#64748b',
      accent: '#f59e0b',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
      light: '#f8fafc'
    },
    fonts: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['JetBrains Mono', 'monospace']
    }
  },

  federation: {
    name: 'Türkiye Örnek Federasyonu',
    description: 'Sektörde lider bir konumda bulunan federasyonumuz, üyelerine kaliteli hizmet sunmaya devam etmektedir.',
    logo: '/images/federation-logo.svg',
    website: 'https://ornek-federasyon.org.tr',
    contact: {
      email: 'info@ornek-federasyon.org.tr',
      phone: '+90 (212) 555 0100',
      address: 'Şişli / İstanbul, Türkiye'
    },
    socialMedia: {
      facebook: 'https://facebook.com/ornek-federasyon',
      twitter: 'https://twitter.com/ornek-federasyon',
      instagram: 'https://instagram.com/ornek-federasyon',
      linkedin: 'https://linkedin.com/company/ornek-federasyon'
    },
    features: [
      'Üye Kayıt ve Yönetim Sistemi',
      'Etkinlik ve Seminer Organizasyonu',
      'Sektörel Haber ve Duyuru Merkezi',
      'Profesyonel İletişim Hizmetleri',
      'Kurumsal Galeri ve Arşiv',
      'Dijital Doküman Yönetimi'
    ]
  },

  features: {
    blog: true,
    events: true,
    members: true,
    gallery: true,
    contact: true,
    newsletter: true
  },

  seo: {
    enableSitemap: true,
    enableRobots: true,
    analytics: {
      googleAnalytics: '',
      facebookPixel: ''
    }
  }
}

export default appConfig
