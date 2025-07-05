<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section bg-gradient-hero text-white section-padding relative overflow-hidden">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-6xl lg:text-7xl font-bold mb-8">Galeri</h1>
          <p class="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto mb-8">
            Federasyonumuzun etkinliklerinden, toplantılarından ve özel anlarından seçkin kareler
          </p>
          <button class="btn btn-secondary">
            Fotoğrafları Görüntüle
          </button>
        </div>
      </div>
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
    </section>

    <!-- Main Gallery Section -->
    <section class="section-padding bg-white">
      <div class="container">
        <!-- Filter Categories -->
        <div class="mb-16">
          <div class="flex flex-wrap items-center justify-center gap-3">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category"
              class="px-6 py-3 border-2 font-medium transition-all duration-200"
              :class="selectedCategory === category
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-900 border-gray-200 hover:border-gray-900'"
              style="border-radius: 4px;"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="i in 12"
            :key="i"
            class="gallery-item group cursor-pointer"
            @click="openLightbox(i)"
          >
            <!-- Image Container -->
            <div class="aspect-w-16 aspect-h-12 mb-4 relative">
              <div class="w-full h-full border-2 border-gray-100 bg-gray-50 overflow-hidden group-hover:border-gray-900 transition-all duration-200" style="border-radius: 4px;">
                <div class="w-full h-full flex items-center justify-center">
                  <svg class="w-12 h-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <!-- Hover Overlay -->
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                  <button class="opacity-0 group-hover:opacity-100 transition-all duration-200 px-6 py-2 bg-white text-gray-900 font-medium" style="border-radius: 4px;">
                    Görüntüle
                  </button>
                </div>
              </div>
            </div>
            <!-- Image Info -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ getImageTitle(i) }}</h3>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">{{ getImageDate(i) }}</span>
                <span class="text-sm text-gray-500 flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  {{ Math.floor(Math.random() * 100) + 50 }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More -->
        <div class="text-center mt-16">
          <button class="btn btn-outline">
            Daha Fazla Göster
          </button>
        </div>
      </div>
    </section>

    <!-- Featured Albums -->
    <section class="section-padding bg-gray-50">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Öne Çıkan Albümler
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            En önemli etkinliklerimizden ve anlarımızdan özel koleksiyonlar
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="i in 3"
            :key="i"
            class="album-card group"
          >
            <!-- Album Cover -->
            <div class="aspect-w-16 aspect-h-12 mb-6">
              <div class="w-full h-full border-2 border-gray-100 bg-gray-50 overflow-hidden group-hover:border-gray-900 transition-all duration-200" style="border-radius: 4px;">
                <div class="w-full h-full flex items-center justify-center">
                  <svg class="w-16 h-16 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                  </svg>
                </div>
              </div>
            </div>
            <!-- Album Info -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ getAlbumTitle(i) }}</h3>
              <p class="text-gray-600 mb-4">{{ getAlbumDescription(i) }}</p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">{{ Math.floor(Math.random() * 50) + 20 }} fotoğraf</span>
                <button class="text-gray-900 hover:text-gray-700 font-medium text-sm flex items-center group">
                  Albüme Git
                  <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Upload CTA -->
    <section class="section-padding bg-gradient-hero text-white relative overflow-hidden">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6">
            Fotoğraflarınızı Paylaşın
          </h2>
          <p class="text-xl text-gray-200 mb-8 leading-relaxed">
            Etkinliklerimizden çektiğiniz fotoğrafları bizimle paylaşarak
            galerimizdeki anı koleksiyonumuzu zenginleştirin.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <button class="btn btn-secondary">
              Fotoğraf Yükle
            </button>
            <NuxtLink to="/iletisim" class="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900">
              Bizimle İletişime Geçin
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
    </section>

    <!-- Lightbox Modal -->
    <div
      v-if="lightboxOpen"
      class="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
      @click.self="closeLightbox"
    >
      <div class="max-w-5xl w-full relative">
        <!-- Close Button -->
        <button
          @click="closeLightbox"
          class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Image Container -->
        <div class="aspect-w-16 aspect-h-9 bg-gray-900" style="border-radius: 4px;">
          <div class="w-full h-full flex items-center justify-center">
            <svg class="w-24 h-24 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </div>
        </div>

        <!-- Image Info -->
        <div class="mt-6 text-center text-white">
          <h3 class="text-2xl font-semibold mb-2">{{ getImageTitle(currentImage) }}</h3>
          <p class="text-gray-400">{{ getImageDate(currentImage) }}</p>
        </div>

        <!-- Navigation Buttons -->
        <button
          class="absolute top-1/2 -translate-y-1/2 -left-16 text-white hover:text-gray-300 transition-colors duration-200"
          @click.stop="currentImage = (currentImage - 1 + 12) % 12"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button
          class="absolute top-1/2 -translate-y-1/2 -right-16 text-white hover:text-gray-300 transition-colors duration-200"
          @click.stop="currentImage = (currentImage + 1) % 12"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFedHubConfig } from '~/composables/useFedHubConfig'

const { appConfig } = useFedHubConfig()

// Reactive state
const selectedCategory = ref('Tümü')
const lightboxOpen = ref(false)
const currentImage = ref(0)

// Categories
const categories = [
  'Tümü',
  'Genel Kurul',
  'Eğitimler',
  'Ödül Törenleri',
  'Konferanslar',
  'Toplantılar',
  'Sosyal Etkinlikler'
]

// Sample content generators
const getImageTitle = (index) => {
  const titles = [
    '2024 Genel Kurul Toplantısı',
    'Başarı Ödülleri Töreni',
    'Profesyonel Gelişim Semineri',
    'Sektör Liderleri Buluşması',
    'Yönetim Kurulu Toplantısı',
    'Eğitim Programı Mezuniyet Töreni',
    'Uluslararası Konferans',
    'Üye Kayıt Töreni'
  ]
  return titles[index % titles.length]
}

const getImageDate = (index) => {
  const dates = [
    '15 Mart 2024',
    '22 Şubat 2024',
    '8 Ocak 2024',
    '14 Aralık 2023',
    '25 Kasım 2023',
    '12 Ekim 2023',
    '18 Eylül 2023',
    '5 Ağustos 2023'
  ]
  return dates[index % dates.length]
}

const getAlbumTitle = (index) => {
  const titles = [
    '2024 Genel Kurul Fotoğrafları',
    'Başarı Ödülleri Töreni',
    'Eğitim Programları Koleksiyonu'
  ]
  return titles[index % titles.length]
}

const getAlbumDescription = (index) => {
  const descriptions = [
    'Yıllık genel kurul toplantımızdan özel anlar ve kararların alındığı demokratik süreç.',
    'Başarılı üyelerimizi onurlandırdığımız özel tören anları.',
    'Profesyonel gelişim odaklı eğitim programlarından kareler.'
  ]
  return descriptions[index % descriptions.length]
}

// Lightbox functions
const openLightbox = (imageIndex) => {
  currentImage.value = imageIndex
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = 'auto'
}

// Cleanup on unmount
onUnmounted(() => {
  document.body.style.overflow = 'auto'
})

// SEO
useHead({
  title: `Galeri - ${appConfig.site.name}`,
  meta: [
    { name: 'description', content: `${appConfig.federation.name} etkinlik fotoğrafları, galeri ve özel anlar. Federasyonumuzdan kareler.` },
    { name: 'keywords', content: 'galeri, fotoğraflar, etkinlikler, federasyon, albüm' },
    { property: 'og:title', content: `Galeri - ${appConfig.site.name}` },
    { property: 'og:description', content: 'Federasyonumuzun etkinliklerinden ve özel anlarından fotoğraflar.' }
  ]
})
</script>
