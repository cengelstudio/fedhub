<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section bg-gradient-hero text-white section-padding">
      <div class="container text-center">
        <div class="max-w-4xl mx-auto animate-fade-in-up">
          <h1 class="text-5xl lg:text-6xl font-bold mb-6 text-shadow">Duyurular</h1>
          <p class="text-xl lg:text-2xl text-blue-100 leading-relaxed">
            Federasyonumuzdan güncel haberler, duyurular ve önemli gelişmeler
          </p>
        </div>
      </div>
    </section>

    <!-- Featured News -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
            Öne Çıkan Duyuru
          </h2>
          <div class="card max-w-4xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div class="h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                <svg class="w-24 h-24 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                </svg>
              </div>
              <div>
                <div class="flex items-center mb-4">
                  <span class="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">
                    ÖNEMLİ
                  </span>
                  <span class="text-gray-500 text-sm ml-4">{{ new Date().toLocaleDateString('tr-TR') }}</span>
                </div>
                <h3 class="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  2024 Yılı Genel Kurul Toplantısı Duyurusu
                </h3>
                <p class="text-gray-600 text-lg leading-relaxed mb-6">
                  Federasyonumuzun 2024 yılı olağan genel kurul toplantısı 15 Nisan 2024 tarihinde
                  gerçekleştirilecektir. Tüm üyelerimizin katılımını bekliyoruz.
                </p>
                <div class="flex space-x-4">
                  <button class="btn btn-primary">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    Detayları Oku
                  </button>
                  <button class="btn btn-outline">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
                    </svg>
                    Paylaş
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- News Categories -->
    <section class="section-padding bg-gray-50">
      <div class="container">
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            class="px-6 py-3 rounded-lg font-medium transition-all duration-200"
            :class="selectedCategory === category
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'"
          >
            {{ category }}
          </button>
        </div>

        <!-- News Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="i in 9"
            :key="i"
            class="card hover:scale-105 transform transition-all duration-300 group"
          >
            <div class="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-colors duration-300">
              <svg class="w-16 h-16 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>

            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                  {{ categories[Math.floor(Math.random() * categories.length)] }}
                </span>
                <span class="text-gray-500 text-sm">{{ Math.floor(Math.random() * 30) + 1 }} gün önce</span>
              </div>

              <h3 class="text-xl font-semibold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                {{ getNewsTitle(i) }}
              </h3>

              <p class="text-gray-600 leading-relaxed">
                {{ getNewsExcerpt(i) }}
              </p>

              <div class="flex justify-between items-center pt-4 border-t border-gray-100">
                <div class="flex items-center space-x-2">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span class="text-blue-600 text-sm font-semibold">A</span>
                  </div>
                  <span class="text-sm text-gray-600">Admin</span>
                </div>
                <button class="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group">
                  Devamını Oku
                  <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-16">
          <button class="btn btn-outline">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
            Daha Fazla Yükle
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter Subscription -->
    <section class="section-padding bg-gradient-hero text-white">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-shadow">
            Duyurularda Geri Kalmayın
          </h2>
          <p class="text-xl text-blue-100 mb-8 leading-relaxed">
            E-posta listemize katılın ve en güncel haberler, duyurular ve etkinlik bilgilerini ilk siz öğrenin.
          </p>

          <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8">
            <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-4">
              <input
                v-model="email"
                type="email"
                required
                placeholder="E-posta adresinizi girin"
                class="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                :disabled="isSubscribing"
                class="btn bg-white text-blue-600 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed min-w-[160px]"
              >
                <svg v-if="isSubscribing" class="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
                <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span v-if="isSubscribing">Kaydediliyor...</span>
                <span v-else>Abone Ol</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useFedHubConfig } from '~/composables/useFedHubConfig'

const { appConfig } = useFedHubConfig()

// Reactive data
const selectedCategory = ref('Tümü')
const email = ref('')
const isSubscribing = ref(false)

const categories = [
  'Tümü',
  'Genel Duyurular',
  'Etkinlikler',
  'Yönetmelik Değişiklikleri',
  'Eğitim Programları',
  'Başarı Hikayeleri',
  'Basın Açıklamaları'
]

// Sample content generators
const getNewsTitle = (index) => {
  const titles = [
    'Yeni Eğitim Programları Başlıyor',
    '2024 Başarı Ödülleri Sahiplerini Buluyor',
    'Sektör İşbirliği Protokolü İmzalandı',
    'Uluslararası Konferans Düzenleniyor',
    'Üye Kayıt Süreci Güncellendi',
    'Yeni Hizmet Standartları Belirlendi',
    'Teknoloji Yatırımları Açıklandı',
    'Sürdürülebilirlik Projesi Başlatıldı',
    'Kalite Belgesi Yenileme Süreçleri'
  ]
  return titles[index % titles.length]
}

const getNewsExcerpt = (index) => {
  const excerpts = [
    'Üyelerimizin profesyonel gelişimini desteklemek amacıyla yeni eğitim programları düzenlenmektedir.',
    'Bu yıl gerçekleştirilen başarılı projeler ve üyelerimizin kazanımları değerlendirilmektedir.',
    'Sektörün gelişimi için önemli adımlar atılmaya devam edilmektedir.',
    'Uluslararası arenada temsil gücümüzü artıracak önemli bir etkinlik organize edilmektedir.',
    'Üyelik süreçlerinde daha hızlı ve etkili hizmet sunmak için güncellemeler yapılmıştır.',
    'Hizmet kalitemizi artırmak için yeni standartlar belirlenmiş ve uygulamaya konulmuştur.',
    'Dijital dönüşüm sürecinde önemli yatırımlar gerçekleştirilmektedir.',
    'Çevre ve sosyal sorumluluk kapsamında yeni projeler hayata geçirilmektedir.',
    'Kalite belgelendirme süreçlerinde yenilikler ve kolaylıklar sağlanmaktadır.'
  ]
  return excerpts[index % excerpts.length]
}

// Newsletter subscription
const subscribeNewsletter = async () => {
  isSubscribing.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    alert('E-posta listemize başarıyla kaydoldunuz! Teşekkür ederiz.')
    email.value = ''
  } catch (error) {
    alert('Bir hata oluştu. Lütfen tekrar deneyiniz.')
  } finally {
    isSubscribing.value = false
  }
}

// SEO
useHead({
  title: `Duyurular - ${appConfig.site.name}`,
  meta: [
    { name: 'description', content: `${appConfig.federation.name} duyuruları, haberler ve güncel gelişmeler. En son haberleri takip edin.` },
    { name: 'keywords', content: 'duyurular, haberler, etkinlikler, federasyon, güncel' },
    { property: 'og:title', content: `Duyurular - ${appConfig.site.name}` },
    { property: 'og:description', content: 'Federasyonumuzdan güncel haberler ve duyurular.' }
  ]
})
</script>
