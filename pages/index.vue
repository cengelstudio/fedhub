<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section bg-gradient-hero text-white section-padding">
      <div class="container">
        <div class="text-center max-w-4xl mx-auto animate-fade-in-up">
          <h1 class="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            {{ appConfig.federation.name }}
          </h1>
          <p class="text-xl lg:text-2xl mb-12 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            {{ appConfig.federation.description }}
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <NuxtLink to="/hakkimizda" class="btn btn-secondary">
              Kurumsal Bilgi
            </NuxtLink>
            <NuxtLink to="/iletisim" class="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900">
              İletişime Geçin
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
    </section>

    <!-- Statistics Section -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="statistics-card">
            <span class="statistics-number">1000+</span>
            <span class="statistics-label">Aktif Üye</span>
          </div>
          <div class="statistics-card">
            <span class="statistics-number">25+</span>
            <span class="statistics-label">Yıllık Deneyim</span>
          </div>
          <div class="statistics-card">
            <span class="statistics-number">250+</span>
            <span class="statistics-label">Tamamlanan Proje</span>
          </div>
          <div class="statistics-card">
            <span class="statistics-number">50+</span>
            <span class="statistics-label">Uzman Kadro</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section-padding bg-gray-50">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hizmet Alanlarımız
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Federasyonumuz, üyelerimize ve sektörümüze değer katacak geniş bir hizmet yelpazesi sunmaktadır
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in appConfig.federation.features"
            :key="feature"
            class="feature-card"
          >
            <div class="icon-circle">
              <svg class="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4 text-center">
              {{ feature }}
            </h3>
            <p class="text-gray-600 text-center leading-relaxed">
              {{ feature }} alanında profesyonel ve güvenilir hizmet sunuyoruz. Üyelerimizin ihtiyaçlarına yönelik çözümler geliştiriyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Preview Section -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="animate-fade-in-left">
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Kurumsal Kimliğimiz
            </h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              {{ appConfig.federation.name }} olarak, sektörümüzde öncü bir kuruluş olmaktan gurur duyuyoruz.
              Yılların deneyimi ve uzman kadromuzla, üyelerimize en kaliteli hizmeti sunmaya devam ediyoruz.
            </p>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              Misyonumuz, sektörün gelişimine katkıda bulunmak ve üyelerimizin başarısını desteklemektir.
              Vizyonumuzda ise ulusal ve uluslararası arenada saygın bir federasyon olmak yer almaktadır.
            </p>
            <NuxtLink to="/hakkimizda" class="btn btn-primary">
              Detaylı Bilgi
            </NuxtLink>
          </div>

          <div class="animate-fade-in-right grid grid-cols-2 gap-6">
            <div class="card">
              <div class="icon-circle">
                <svg class="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Güvenilirlik</h3>
              <p class="text-gray-600 text-sm">Şeffaf ve dürüst yaklaşımımız</p>
            </div>
            <div class="card">
              <div class="icon-circle">
                <svg class="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Yenilikçilik</h3>
              <p class="text-gray-600 text-sm">Sürekli gelişim ve iyileştirme</p>
            </div>
            <div class="card">
              <div class="icon-circle">
                <svg class="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">İşbirliği</h3>
              <p class="text-gray-600 text-sm">Güçlü ortaklıklar kuruyoruz</p>
            </div>
            <div class="card">
              <div class="icon-circle">
                <svg class="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Kalite</h3>
              <p class="text-gray-600 text-sm">En yüksek standartlar</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest News Section -->
    <section v-if="appConfig.features.blog" class="section-padding bg-gray-50">
      <div class="container">
        <div class="flex justify-between items-center mb-12">
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Son Duyurular
            </h2>
            <p class="text-lg text-gray-600">Federasyonumuzdan güncel haberler ve duyurular</p>
          </div>
          <NuxtLink to="/haberler" class="btn btn-outline hidden md:flex">
            Tüm Duyurular
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="i in 3"
            :key="i"
            class="card"
          >
            <div class="h-48 bg-gray-50 flex items-center justify-center mb-6">
              <svg class="w-16 h-16 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
              </svg>
            </div>
            <div class="space-y-4">
              <h3 class="text-xl font-semibold text-gray-900 leading-tight">
                Önemli Duyuru Başlığı {{ i }}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Bu önemli duyuru içeriğidir. Üyelerimiz için hazırlanan bu duyuru detayları burada yer almaktadır.
              </p>
              <div class="flex justify-between items-center pt-4 border-t border-gray-100">
                <span class="text-sm text-gray-500 font-medium">{{ new Date().toLocaleDateString('tr-TR') }}</span>
                <NuxtLink to="/haberler" class="text-gray-900 hover:text-gray-700 font-medium text-sm flex items-center">
                  Devamını Oku
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12 md:hidden">
          <NuxtLink to="/haberler" class="btn btn-outline">
            Tüm Duyurular
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section class="section-padding bg-gradient-hero text-white">
      <div class="container text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6">
            Bizimle İletişime Geçin
          </h2>
          <p class="text-xl text-gray-200 mb-8 leading-relaxed">
            Sorularınız, önerileriniz veya şikayetleriniz için bizimle iletişime geçebilirsiniz.
            Profesyonel ekibimiz size en kısa sürede dönüş yapacaktır.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <NuxtLink to="/iletisim" class="btn btn-secondary">
              İletişim Formu
            </NuxtLink>
            <NuxtLink to="/oneri-sikayet" class="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900">
              Öneri & Şikayet
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
    </section>
  </div>
</template>

<script setup>
import { useFedHubConfig } from '~/composables/useFedHubConfig'

const { appConfig } = useFedHubConfig()

// SEO
useHead({
  title: `${appConfig.federation.name} - ${appConfig.site.name}`,
  meta: [
    { name: 'description', content: `${appConfig.federation.description} - Resmi federasyon web sitesi.` },
    { name: 'keywords', content: appConfig.site.keywords.join(', ') },
    { property: 'og:title', content: `${appConfig.federation.name} - ${appConfig.site.name}` },
    { property: 'og:description', content: appConfig.federation.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: appConfig.site.url },
    { property: 'og:image', content: appConfig.site.ogImage }
  ]
})
</script>
