<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section bg-gray-900 text-white section-padding">
      <div class="container text-center">
        <div class="max-w-4xl mx-auto animate-fade-in-up">
          <h1 class="text-5xl lg:text-6xl font-bold mb-6">Hakkımızda</h1>
          <p class="text-xl lg:text-2xl text-gray-300 leading-relaxed">
            {{ appConfig.federation.name }} hakkında detaylı bilgi edinin
          </p>
        </div>
      </div>
    </section>

    <!-- Navigation Cards -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Federasyon Hakkında Card -->
          <NuxtLink to="/hakkimizda/federasyon" class="card hover:shadow-xl transition-shadow duration-300">
            <div class="aspect-w-16 aspect-h-9 mb-6">
              <div class="w-full h-full bg-gray-100 rounded-t-lg flex items-center justify-center">
                <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Federasyon Hakkında</h3>
              <p class="text-gray-600 mb-4">Federasyonumuzun tarihçesi, misyonu, vizyonu ve temel değerleri hakkında bilgi edinin.</p>
              <div class="flex items-center text-blue-600">
                <span>Detaylı Bilgi</span>
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- Yönetim Kurulu Card -->
          <NuxtLink to="/hakkimizda/yonetim-kurulu" class="card hover:shadow-xl transition-shadow duration-300">
            <div class="aspect-w-16 aspect-h-9 mb-6">
              <div class="w-full h-full bg-gray-100 rounded-t-lg flex items-center justify-center">
                <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Yönetim Kurulu</h3>
              <p class="text-gray-600 mb-4">Federasyonumuzun yönetim kurulu üyeleri ve görevleri hakkında bilgi edinin.</p>
              <div class="flex items-center text-blue-600">
                <span>Detaylı Bilgi</span>
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </NuxtLink>

          <!-- Başkan Card -->
          <NuxtLink to="/hakkimizda/baskan" class="card hover:shadow-xl transition-shadow duration-300">
            <div class="aspect-w-16 aspect-h-9 mb-6">
              <div class="w-full h-full bg-gray-100 rounded-t-lg flex items-center justify-center">
                <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Başkan</h3>
              <p class="text-gray-600 mb-4">Federasyon başkanımız ve vizyonu hakkında detaylı bilgi edinin.</p>
              <div class="flex items-center text-blue-600">
                <span>Detaylı Bilgi</span>
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </NuxtLink>
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
  @apply bg-white rounded-lg overflow-hidden;
}

.section-padding {
  @apply py-16 md:py-24;
}

.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
