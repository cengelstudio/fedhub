<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white sticky top-0 z-40 border-b-2 border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-gray-900 flex items-center justify-center" style="border-radius: 4px;">
              <span class="text-white font-bold text-xl">FH</span>
            </div>
            <div>
              <h1 class="text-xl font-bold text-gray-900">{{ appConfig.site.name }}</h1>
              <p class="text-xs text-gray-500 uppercase tracking-wide">Federasyon Platformu</p>
            </div>
          </NuxtLink>

          <!-- Right Side Navigation -->
          <div class="flex items-center">
            <!-- Desktop Navigation -->
            <nav class="hidden lg:flex items-center space-x-8">
              <NuxtLink
                to="/"
                class="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 px-3 py-2"
                active-class="text-gray-900 border-b-2 border-gray-900"
              >
                Ana Sayfa
              </NuxtLink>

              <!-- About Us Dropdown -->
              <div class="relative" @mouseleave="aboutDropdownOpen = false">
                <button
                  @mouseover="aboutDropdownOpen = true"
                  class="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 px-3 py-2 flex items-center space-x-1"
                  :class="{ 'text-gray-900 border-b-2 border-gray-900': $route.path.startsWith('/hakkimizda') }"
                >
                  <span>Hakkımızda</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>

                <div
                  v-if="aboutDropdownOpen"
                  class="absolute left-0 mt-2 w-56 bg-white shadow-lg py-2"
                  style="border-radius: 4px;"
                >
                  <NuxtLink
                    to="/hakkimizda/federasyon"
                    class="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    @click="aboutDropdownOpen = false"
                  >
                    Federasyon Hakkında
                  </NuxtLink>
                  <NuxtLink
                    to="/hakkimizda/yonetim-kurulu"
                    class="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    @click="aboutDropdownOpen = false"
                  >
                    Yönetim Kurulu
                  </NuxtLink>
                  <NuxtLink
                    to="/hakkimizda/baskan"
                    class="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    @click="aboutDropdownOpen = false"
                  >
                    Başkan
                  </NuxtLink>
                </div>
              </div>

              <NuxtLink
                v-if="appConfig.features.blog"
                to="/haberler"
                class="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 px-3 py-2"
                active-class="text-gray-900 border-b-2 border-gray-900"
              >
                Duyurular
              </NuxtLink>
              <NuxtLink
                v-if="appConfig.features.gallery"
                to="/galeri"
                class="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 px-3 py-2"
                active-class="text-gray-900 border-b-2 border-gray-900"
              >
                Galeri
              </NuxtLink>
              <NuxtLink
                to="/iletisim"
                class="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 px-3 py-2"
                active-class="text-gray-900 border-b-2 border-gray-900"
              >
                İletişim
              </NuxtLink>
              <NuxtLink
                to="/oneri-sikayet"
                class="btn btn-primary ml-4"
              >
                Öneri & Şikayet
              </NuxtLink>
            </nav>

            <!-- Mobile Menu Button -->
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="lg:hidden p-2 hover:bg-gray-100 transition-colors ml-4"
              style="border-radius: 4px;"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div
          v-if="mobileMenuOpen"
          class="lg:hidden py-4 border-t border-gray-100"
        >
          <nav class="flex flex-col space-y-2">
            <NuxtLink
              to="/"
              class="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 px-3 py-2"
              active-class="text-gray-900 bg-gray-50"
              @click="mobileMenuOpen = false"
            >
              Ana Sayfa
            </NuxtLink>

            <!-- Mobile About Us Section -->
            <div class="space-y-2">
              <button
                @click="aboutMobileOpen = !aboutMobileOpen"
                class="w-full flex items-center justify-between text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 px-3 py-2"
                :class="{ 'text-gray-900 bg-gray-50': $route.path.startsWith('/hakkimizda') }"
              >
                <span>Hakkımızda</span>
                <svg class="w-4 h-4 transform transition-transform" :class="{ 'rotate-180': aboutMobileOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              <div v-if="aboutMobileOpen" class="pl-6 space-y-2">
                <NuxtLink
                  to="/hakkimizda/federasyon"
                  class="block text-gray-600 hover:text-gray-900 transition-colors duration-200 px-3 py-2"
                  @click="mobileMenuOpen = false"
                >
                  Federasyon Hakkında
                </NuxtLink>
                <NuxtLink
                  to="/hakkimizda/yonetim-kurulu"
                  class="block text-gray-600 hover:text-gray-900 transition-colors duration-200 px-3 py-2"
                  @click="mobileMenuOpen = false"
                >
                  Yönetim Kurulu
                </NuxtLink>
                <NuxtLink
                  to="/hakkimizda/baskan"
                  class="block text-gray-600 hover:text-gray-900 transition-colors duration-200 px-3 py-2"
                  @click="mobileMenuOpen = false"
                >
                  Başkan
                </NuxtLink>
              </div>
            </div>

            <NuxtLink
              v-if="appConfig.features.blog"
              to="/haberler"
              class="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 px-3 py-2"
              active-class="text-gray-900 bg-gray-50"
              @click="mobileMenuOpen = false"
            >
              Duyurular
            </NuxtLink>
            <NuxtLink
              v-if="appConfig.features.gallery"
              to="/galeri"
              class="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 px-3 py-2"
              active-class="text-gray-900 bg-gray-50"
              @click="mobileMenuOpen = false"
            >
              Galeri
            </NuxtLink>
            <NuxtLink
              to="/iletisim"
              class="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 px-3 py-2"
              active-class="text-gray-900 bg-gray-50"
              @click="mobileMenuOpen = false"
            >
              İletişim
            </NuxtLink>
            <NuxtLink
              to="/oneri-sikayet"
              class="btn btn-primary text-center mt-2"
              @click="mobileMenuOpen = false"
            >
              Öneri & Şikayet
            </NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <!-- Company Info -->
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center space-x-4 mb-8">
              <div class="w-12 h-12 bg-white flex items-center justify-center" style="border-radius: 4px;">
                <span class="text-gray-900 font-bold text-xl">FH</span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">{{ appConfig.site.name }}</h3>
                <p class="text-gray-400 text-sm uppercase tracking-wide">Federasyon Platformu</p>
              </div>
            </div>
            <p class="text-gray-300 mb-8 max-w-md leading-relaxed">
              {{ appConfig.site.description }}
            </p>
            <div class="flex space-x-4">
              <a
                v-for="(url, platform) in appConfig.socialMedia"
                :key="platform"
                :href="url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-white text-gray-900 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                style="border-radius: 4px;"
                v-if="url"
              >
                <span class="text-lg">{{ getSocialIcon(platform) }}</span>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold mb-6 text-white">Hızlı Erişim</h4>
            <ul class="space-y-4">
              <li>
                <NuxtLink to="/hakkimizda/federasyon" class="text-gray-300 hover:text-white transition-colors duration-200">
                  Hakkımızda
                </NuxtLink>
              </li>
              <li>
                <NuxtLink v-if="appConfig.features.blog" to="/haberler" class="text-gray-300 hover:text-white transition-colors duration-200">
                  Duyurular
                </NuxtLink>
              </li>
              <li>
                <NuxtLink v-if="appConfig.features.gallery" to="/galeri" class="text-gray-300 hover:text-white transition-colors duration-200">
                  Galeri
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/iletisim" class="text-gray-300 hover:text-white transition-colors duration-200">
                  İletişim
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="text-lg font-semibold mb-6 text-white">İletişim</h4>
            <ul class="space-y-4">
              <li class="flex items-center text-gray-300">
                <svg class="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                {{ appConfig.contact.email }}
              </li>
              <li class="flex items-center text-gray-300">
                <svg class="w-5 h-5 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                {{ appConfig.contact.phone }}
              </li>
              <li class="flex items-start text-gray-300">
                <svg class="w-5 h-5 mr-3 mt-0.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                {{ appConfig.contact.address }}
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-16 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400 text-sm">
              © {{ new Date().getFullYear() }} {{ appConfig.site.name }}. Tüm hakları saklıdır.
            </p>
            <p class="text-gray-400 text-sm mt-4 md:mt-0">
              Çalışma Saatleri: {{ appConfig.contact.workingHours }}
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFedHubConfig } from '~/composables/useFedHubConfig'

const { appConfig } = useFedHubConfig()
const mobileMenuOpen = ref(false)
const aboutDropdownOpen = ref(false)
const aboutMobileOpen = ref(false)

const getSocialIcon = (platform) => {
  switch (platform) {
    case 'facebook':
      return 'f'
    case 'twitter':
      return 't'
    case 'instagram':
      return 'i'
    case 'linkedin':
      return 'in'
    case 'youtube':
      return 'y'
    default:
      return ''
  }
}
</script>

<style>
.btn {
  @apply inline-flex items-center justify-center px-6 py-2 font-medium transition-colors duration-200;
  border-radius: 4px;
}

.btn-primary {
  @apply bg-gray-900 text-white hover:bg-gray-800;
}

.btn-outline {
  @apply border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white;
}
</style>
