<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section bg-gray-900 text-white section-padding">
      <div class="container text-center">
        <div class="max-w-4xl mx-auto animate-fade-in-up">
          <h1 class="text-5xl lg:text-6xl font-bold mb-6">Federasyon Başkanı</h1>
          <p class="text-xl lg:text-2xl text-gray-300 leading-relaxed">
            {{ appConfig.federation.name }} Başkanı'ndan Mesaj
          </p>
        </div>
      </div>
    </section>

    <!-- President Profile -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <!-- Profile Image and Info -->
          <div class="space-y-8">
            <div class="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-xl">
              <div class="w-full h-full bg-gray-100 flex items-center justify-center">
                <!-- Replace with actual president's image -->
                <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                  <svg class="w-32 h-32 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="card p-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Mehmet Yılmaz</h2>
              <p class="text-xl text-gray-600 mb-6">Federasyon Başkanı</p>

              <div class="space-y-4">
                <div class="flex items-center text-gray-600">
                  <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>25+ Yıl Sektör Deneyimi</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>baskan@fedhub.com</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                  </svg>
                  <span>linkedin.com/in/mehmetyilmaz</span>
                </div>
              </div>
            </div>
          </div>

          <!-- President's Message -->
          <div class="space-y-8">
            <div class="prose prose-lg max-w-none">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Başkanın Mesajı</h2>

              <div class="space-y-6 text-gray-600">
                <p>
                  Değerli üyelerimiz ve paydaşlarımız,
                </p>
                <p>
                  {{ appConfig.federation.name }} olarak, sektörümüzün gelişimi ve
                  ülkemizin ekonomik kalkınmasına katkıda bulunma misyonuyla
                  çalışmalarımızı sürdürüyoruz. Kurulduğumuz günden bu yana,
                  üyelerimizin rekabet gücünü artırmak ve sektörümüzün
                  sürdürülebilir büyümesini sağlamak için var gücümüzle
                  çalışıyoruz.
                </p>
                <p>
                  Günümüzün hızla değişen iş dünyasında, yenilikçi çözümler
                  üretmek ve uluslararası standartlarda hizmet sunmak için
                  çalışmalarımızı aralıksız sürdürüyoruz. Üyelerimizin ihtiyaç
                  ve beklentilerini en iyi şekilde karşılamak, bizim en önemli
                  önceliğimizdir.
                </p>
                <p>
                  Federasyonumuzun vizyonu doğrultusunda, sektörümüzün geleceğini
                  şekillendirmek ve sürdürülebilir bir büyüme sağlamak için
                  çalışmaya devam edeceğiz. Bu yolculukta bizimle birlikte olan
                  tüm paydaşlarımıza teşekkür ederim.
                </p>
                <p class="font-medium">
                  Saygılarımla,<br>
                  Mehmet Yılmaz<br>
                  Federasyon Başkanı
                </p>
              </div>
            </div>

            <!-- Vision Statement -->
            <div class="card p-8 bg-gray-50">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Başkanın Vizyonu</h3>
              <div class="space-y-4 text-gray-600">
                <p>
                  "Federasyonumuzun uluslararası alanda söz sahibi, yenilikçi ve
                  öncü bir kurum olması için çalışıyoruz. Amacımız, üyelerimizin
                  rekabet gücünü artırırken, sektörümüzün sürdürülebilir
                  gelişimini sağlamaktır."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievements -->
    <section class="section-padding bg-gray-50">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Başarılar ve Projeler
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Başkanlık döneminde gerçekleştirilen önemli projeler ve kazanımlar
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="achievement-card">
            <div class="achievement-icon">
              <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Uluslararası İşbirlikleri</h3>
            <p class="text-gray-600">
              Global partnerlikler ve işbirlikleri ile sektörümüzün uluslararası
              alanda temsili güçlendirildi.
            </p>
          </div>

          <div class="achievement-card">
            <div class="achievement-icon">
              <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Dijital Dönüşüm</h3>
            <p class="text-gray-600">
              Federasyon süreçlerinin dijitalleştirilmesi ve teknolojik
              altyapının güçlendirilmesi sağlandı.
            </p>
          </div>

          <div class="achievement-card">
            <div class="achievement-icon">
              <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Üye Sayısında Artış</h3>
            <p class="text-gray-600">
              Aktif üye sayımız %50 artırılarak sektörün en kapsamlı
              federasyonu haline gelindi.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useFedHubConfig } from '~/composables/useFedHubConfig'
const { appConfig } = useFedHubConfig()
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

.achievement-card {
  @apply bg-white rounded-lg p-8 shadow-lg;
}

.achievement-icon {
  @apply w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6;
}

.prose {
  @apply max-w-none;
}
</style>
