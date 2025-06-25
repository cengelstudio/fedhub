<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section bg-gradient-hero text-white section-padding">
      <div class="container text-center">
        <div class="max-w-4xl mx-auto animate-fade-in-up">
          <h1 class="text-5xl lg:text-6xl font-bold mb-6 text-shadow">Galeri</h1>
          <p class="text-xl lg:text-2xl text-blue-100 leading-relaxed">
            Etkinliklerimizden, toplantılarımızdan ve özel anlarımızdan kareler
          </p>
        </div>
      </div>
    </section>

    <!-- Gallery Categories -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="flex flex-wrap justify-center gap-4 mb-16">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            class="px-6 py-3 rounded-lg font-medium transition-all duration-200"
            :class="selectedCategory === category
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'"
          >
            {{ category }}
          </button>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div
            v-for="i in 16"
            :key="i"
            class="group cursor-pointer"
            @click="openLightbox(i)"
          >
            <div class="aspect-w-4 aspect-h-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden group-hover:from-blue-100 group-hover:to-blue-200 transition-colors duration-300">
              <div class="flex items-center justify-center h-full">
                <svg class="w-16 h-16 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <!-- Overlay -->
              <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="mt-4">
              <h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                {{ getImageTitle(i) }}
              </h3>
              <p class="text-gray-600 text-sm mt-1">
                {{ getImageDate(i) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-16">
          <button class="btn btn-outline">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
            Daha Fazla Fotoğraf Yükle
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
            v-for="i in 6"
            :key="i"
            class="card group hover:scale-105 transform transition-all duration-300"
          >
            <div class="h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-6 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-colors duration-300">
              <svg class="w-20 h-20 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>

            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                {{ getAlbumTitle(i) }}
              </h3>

              <p class="text-gray-600 leading-relaxed">
                {{ getAlbumDescription(i) }}
              </p>

              <div class="flex justify-between items-center pt-4 border-t border-gray-100">
                <span class="text-sm text-gray-500">{{ Math.floor(Math.random() * 50) + 10 }} fotoğraf</span>
                <button class="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group">
                  Albümü Görüntüle
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

    <!-- Upload Photos CTA -->
    <section class="section-padding bg-gradient-hero text-white">
      <div class="container text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-shadow">
            Anılarınızı Bizimle Paylaşın
          </h2>
          <p class="text-xl text-blue-100 mb-8 leading-relaxed">
            Etkinliklerimizden çektiğiniz fotoğrafları bizimle paylaşarak
            galerimizdeki anı koleksiyonumuzu zenginleştirin.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="btn bg-white text-blue-600 hover:bg-blue-50">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
              </svg>
              Fotoğraf Yükle
            </button>
            <NuxtLink to="/iletisim" class="btn btn-outline text-white border-white hover:bg-white hover:text-blue-600">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              E-posta ile Gönder
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div
      v-if="lightboxOpen"
      class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
      @click="closeLightbox"
    >
      <div class="max-w-4xl max-h-full relative">
        <button
          @click="closeLightbox"
          class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div class="bg-gray-200 aspect-w-16 aspect-h-9 rounded-lg flex items-center justify-center">
          <svg class="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
        </div>

        <div class="mt-4 text-center text-white">
          <h3 class="text-xl font-semibold mb-2">{{ getImageTitle(currentImage) }}</h3>
          <p class="text-gray-300">{{ getImageDate(currentImage) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { appConfig } from '~/config/app.config'

// Reactive data
const selectedCategory = ref('Tümü')
const lightboxOpen = ref(false)
const currentImage = ref(1)

const categories = [
  'Tümü',
  'Genel Kurul',
  'Eğitim Programları',
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
    'Eğitim Programları Koleksiyonu',
    'Konferans Anıları',
    'Resmi Toplantılar',
    'Sosyal Etkinlikler'
  ]
  return titles[index % titles.length]
}

const getAlbumDescription = (index) => {
  const descriptions = [
    'Yıllık genel kurul toplantımızdan özel anlar ve kararların alındığı demokratik süreç.',
    'Başarılı üyelerimizi onurlandırdığımız özel tören anları.',
    'Profesyonel gelişim odaklı eğitim programlarından kareler.',
    'Sektörün geleceğini şekillendiren konferanslardan unutulmaz anlar.',
    'Federasyonumuzun önemli kararlarının alındığı resmi toplantılar.',
    'Üyelerimizle birlikte düzenlediğimiz sosyal ve kültürel etkinlikler.'
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
