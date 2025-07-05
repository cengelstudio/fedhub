<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section bg-gray-900 text-white section-padding">
      <div class="container text-center">
        <div class="max-w-4xl mx-auto animate-fade-in-up">
          <h1 class="text-5xl lg:text-6xl font-bold mb-6">Yönetim Kurulu</h1>
          <p class="text-xl lg:text-2xl text-gray-300 leading-relaxed">
            {{ appConfig.federation.name }} yönetim kurulu üyeleri
          </p>
        </div>
      </div>
    </section>

    <!-- Board Members Grid -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Board Member Card Template -->
          <div v-for="member in boardMembers" :key="member.id" class="card group">
            <div class="aspect-w-3 aspect-h-4 mb-6">
              <div class="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img v-if="member.image" :src="member.image" :alt="member.name" class="w-full h-full object-cover">
                <div v-else class="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="p-6 text-center">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ member.name }}</h3>
              <p class="text-gray-600 font-medium mb-4">{{ member.position }}</p>
              <div class="space-y-4">
                <p class="text-gray-500 text-sm">{{ member.description }}</p>
                <div class="flex justify-center space-x-4">
                  <a v-if="member.email" :href="'mailto:' + member.email" class="text-gray-400 hover:text-gray-600">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </a>
                  <a v-if="member.linkedin" :href="member.linkedin" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-600">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Organization Structure -->
    <section class="section-padding bg-gray-50">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Organizasyon Yapımız
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Federasyonumuzun yönetim yapısı ve çalışma prensipleri
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="card">
            <div class="space-y-8">
              <div class="border-l-4 border-gray-200 pl-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Yönetim Kurulu</h3>
                <p class="text-gray-600">
                  Federasyonumuzun en yüksek karar organı olan Yönetim Kurulu,
                  stratejik kararların alınması ve uygulanmasından sorumludur.
                </p>
              </div>
              <div class="border-l-4 border-gray-200 pl-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Denetim Kurulu</h3>
                <p class="text-gray-600">
                  Federasyonun mali işlerini ve faaliyetlerini denetleyen,
                  bağımsız bir organ olarak görev yapmaktadır.
                </p>
              </div>
              <div class="border-l-4 border-gray-200 pl-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Disiplin Kurulu</h3>
                <p class="text-gray-600">
                  Federasyon tüzüğüne ve etik kurallara uygunluğun denetlenmesi
                  ve gerekli yaptırımların uygulanmasından sorumludur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useFedHubConfig } from '~/composables/useFedHubConfig'
const { appConfig } = useFedHubConfig()

// Example board members data - replace with actual data from your backend
const boardMembers = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    position: 'Yönetim Kurulu Başkan Yardımcısı',
    description: '15 yıllık sektör deneyimi ile federasyonumuzun gelişimine katkı sağlamaktadır.',
    email: 'ahmet.yilmaz@fedhub.com',
    linkedin: 'https://linkedin.com/in/ahmetyilmaz',
    image: null
  },
  {
    id: 2,
    name: 'Ayşe Kaya',
    position: 'Yönetim Kurulu Üyesi',
    description: 'Uluslararası ilişkiler ve proje yönetimi konularında uzman.',
    email: 'ayse.kaya@fedhub.com',
    linkedin: 'https://linkedin.com/in/aysekaya',
    image: null
  },
  {
    id: 3,
    name: 'Mehmet Demir',
    position: 'Yönetim Kurulu Üyesi',
    description: 'Finans ve stratejik planlama alanlarında 20 yıllık deneyim.',
    email: 'mehmet.demir@fedhub.com',
    linkedin: 'https://linkedin.com/in/mehmetdemir',
    image: null
  },
  {
    id: 4,
    name: 'Zeynep Yıldız',
    position: 'Yönetim Kurulu Üyesi',
    description: 'Eğitim ve gelişim programları koordinatörü.',
    email: 'zeynep.yildiz@fedhub.com',
    linkedin: 'https://linkedin.com/in/zeynepyildiz',
    image: null
  },
  {
    id: 5,
    name: 'Can Özkan',
    position: 'Yönetim Kurulu Üyesi',
    description: 'Teknoloji ve dijital dönüşüm projelerinden sorumlu.',
    email: 'can.ozkan@fedhub.com',
    linkedin: 'https://linkedin.com/in/canozkan',
    image: null
  }
]
</script>

<style scoped>
.card {
  @apply bg-white rounded-lg overflow-hidden shadow-lg;
}

.section-padding {
  @apply py-16 md:py-24;
}

.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.statistics-card {
  @apply text-center;
}

.statistics-number {
  @apply block text-3xl font-bold text-gray-900 mb-2;
}

.statistics-label {
  @apply block text-gray-600 font-medium;
}
</style>
