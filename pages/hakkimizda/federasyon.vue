<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section bg-gray-900 text-white section-padding">
      <div class="container text-center">
        <div class="max-w-4xl mx-auto animate-fade-in-up">
          <h1 class="text-5xl lg:text-6xl font-bold mb-6">Federasyon Hakkında</h1>
          <p class="text-xl lg:text-2xl text-gray-300 leading-relaxed">
            {{ appConfig.federation.name }} olarak misyonumuz, vizyonumuz ve değerlerimiz
          </p>
        </div>
      </div>
    </section>

    <!-- About Content -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="animate-fade-in-left">
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Federasyonumuz Hakkında
            </h2>
            <div class="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                {{ appConfig.federation.name }}, sektörümüzde öncü bir kuruluş olarak
                faaliyet göstermektedir. Kurulduğumuz günden bu yana, üyelerimizin
                ihtiyaçlarını karşılamak ve sektörümüzün gelişimine katkıda bulunmak
                için çalışmaktayız.
              </p>
              <p>
                Deneyimli ekibimiz ve güçlü altyapımız ile hizmet verdiğimiz
                alanlarda uzmanlaşmış durumdayız. Sürekli gelişim ve yenilikçilik
                anlayışımızla, üyelerimizin beklentilerini aşan hizmetler sunmaya
                devam ediyoruz.
              </p>
              <p>
                Federasyonumuz, sektör standartlarının yükseltilmesi, eğitim
                programlarının geliştirilmesi ve üyelerimizin profesyonel
                gelişimlerine destek olmak için çeşitli projeler yürütmektedir.
              </p>
            </div>
          </div>

          <div class="animate-fade-in-right">
            <div class="card bg-gradient-to-br from-gray-50 to-gray-100">
              <h3 class="text-2xl font-semibold text-gray-900 mb-8 text-center">
                Temel Değerlerimiz
              </h3>
              <ul class="space-y-6">
                <li class="flex items-start">
                  <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span class="text-gray-700 font-medium">Şeffaflık ve dürüstlük</span>
                </li>
                <li class="flex items-start">
                  <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span class="text-gray-700 font-medium">Kaliteli hizmet anlayışı</span>
                </li>
                <li class="flex items-start">
                  <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span class="text-gray-700 font-medium">Sürekli gelişim ve innovasyon</span>
                </li>
                <li class="flex items-start">
                  <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span class="text-gray-700 font-medium">Üye odaklı yaklaşım</span>
                </li>
                <li class="flex items-start">
                  <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span class="text-gray-700 font-medium">Sosyal sorumluluk bilinci</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="section-padding bg-gray-50">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Misyon & Vizyon
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Geleceğe yönelik hedeflerimiz ve kuruluş amacımız
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="card text-center group hover:scale-105 transform transition-all duration-300">
            <div class="icon-circle bg-gradient-to-br from-gray-100 to-gray-200 mb-8">
              <svg class="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-6">Misyonumuz</h3>
            <p class="text-gray-600 leading-relaxed text-lg">
              Üyelerimizin ihtiyaçlarını en iyi şekilde karşılamak, sektörümüzün
              gelişimine katkıda bulunmak ve toplumsal fayda sağlamak için
              kaliteli, güvenilir ve sürdürülebilir hizmetler sunmak.
            </p>
          </div>

          <div class="card text-center group hover:scale-105 transform transition-all duration-300">
            <div class="icon-circle bg-gradient-to-br from-gray-100 to-gray-200 mb-8">
              <svg class="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-6">Vizyonumuz</h3>
            <p class="text-gray-600 leading-relaxed text-lg">
              Sektörümüzde lider konuma gelmek, yenilikçi çözümler üretmek ve
              uluslararası standartlarda hizmet veren, saygın ve güvenilir
              bir federasyon olmak.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Rakamlarla Federasyonumuz
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Başarılarımızı ve gücümüzü rakamlarla ifade ediyoruz
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="statistics-card group">
            <div class="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <span class="statistics-number">1000+</span>
            <span class="statistics-label">Aktif Üye</span>
          </div>
          <div class="statistics-card group">
            <div class="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <span class="statistics-number">25+</span>
            <span class="statistics-label">Yıllık Deneyim</span>
          </div>
          <div class="statistics-card group">
            <div class="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <span class="statistics-number">250+</span>
            <span class="statistics-label">Tamamlanan Proje</span>
          </div>
          <div class="statistics-card group">
            <div class="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <span class="statistics-number">50+</span>
            <span class="statistics-label">Uzman Kadro</span>
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
  @apply bg-white rounded-lg overflow-hidden p-8 shadow-lg;
}

.section-padding {
  @apply py-16 md:py-24;
}

.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.icon-circle {
  @apply w-24 h-24 rounded-full flex items-center justify-center mx-auto;
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
