<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section bg-gradient-hero text-white section-padding">
      <div class="container text-center">
        <div class="max-w-4xl mx-auto animate-fade-in-up">
          <h1 class="text-6xl lg:text-7xl font-bold mb-8">İletişim</h1>
          <p class="text-xl lg:text-2xl text-gray-200 leading-relaxed">
            Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz
          </p>
        </div>
      </div>
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
    </section>

    <!-- Contact Info & Form -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Contact Information -->
          <div class="animate-fade-in-left">
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
              İletişim Bilgileri
            </h2>

            <div class="space-y-8">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-gray-50 flex items-center justify-center" style="border-radius: 4px;">
                  <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div class="ml-6">
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">E-posta Adresi</h3>
                  <p class="text-gray-600 font-medium text-lg">{{ appConfig.contact.email }}</p>
                  <p class="text-sm text-gray-500 mt-1">7/24 aktif destek</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-12 h-12 bg-gray-50 flex items-center justify-center" style="border-radius: 4px;">
                  <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div class="ml-6">
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">Telefon Numarası</h3>
                  <p class="text-gray-600 font-medium text-lg">{{ appConfig.contact.phone }}</p>
                  <p class="text-sm text-gray-500 mt-1">Mesai saatleri içinde</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-12 h-12 bg-gray-50 flex items-center justify-center" style="border-radius: 4px;">
                  <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div class="ml-6">
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">Ofis Adresi</h3>
                  <p class="text-gray-600 font-medium text-lg">{{ appConfig.contact.address }}</p>
                  <p class="text-sm text-gray-500 mt-1">Ziyaret öncesi randevu alınız</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-12 h-12 bg-gray-50 flex items-center justify-center" style="border-radius: 4px;">
                  <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div class="ml-6">
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">Çalışma Saatleri</h3>
                  <p class="text-gray-600 font-medium text-lg">{{ appConfig.contact.workingHours }}</p>
                  <p class="text-sm text-gray-500 mt-1">Resmi tatillerde kapalı</p>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="mt-12">
              <h3 class="text-2xl font-semibold text-gray-900 mb-6">Sosyal Medya</h3>
              <div class="flex space-x-4">
                <a
                  v-for="(url, platform) in appConfig.socialMedia"
                  :key="platform"
                  :href="url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-all duration-200"
                  style="border-radius: 4px;"
                  v-if="url"
                >
                  <span class="text-2xl">{{ getSocialIcon(platform) }}</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="animate-fade-in-right">
            <div class="border-2 border-gray-100 p-8 bg-white" style="border-radius: 4px;">
              <h2 class="text-3xl font-bold text-gray-900 mb-8">
                Mesaj Gönderin
              </h2>

              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="firstName" class="block text-sm font-semibold text-gray-700 mb-2">
                      Ad *
                    </label>
                    <input
                      id="firstName"
                      v-model="form.firstName"
                      type="text"
                      required
                      class="input"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label for="lastName" class="block text-sm font-semibold text-gray-700 mb-2">
                      Soyad *
                    </label>
                    <input
                      id="lastName"
                      v-model="form.lastName"
                      type="text"
                      required
                      class="input"
                      placeholder="Soyadınız"
                    />
                  </div>
                </div>

                <div>
                  <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                    E-posta *
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="input"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="input"
                    placeholder="+90 (5XX) XXX XX XX"
                  />
                </div>

                <div>
                  <label for="subject" class="block text-sm font-semibold text-gray-700 mb-2">
                    Konu *
                  </label>
                  <select
                    id="subject"
                    v-model="form.subject"
                    required
                    class="input"
                  >
                    <option value="">Konu seçiniz</option>
                    <option value="genel">Genel Bilgi</option>
                    <option value="uyelik">Üyelik Başvurusu</option>
                    <option value="etkinlik">Etkinlik Bilgileri</option>
                    <option value="isbirligi">İşbirliği Teklifi</option>
                    <option value="medya">Medya ve Basın</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="6"
                    required
                    class="input resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>

                <div class="flex items-start">
                  <input
                    id="privacy"
                    v-model="form.privacy"
                    type="checkbox"
                    required
                    class="mt-1 mr-3 w-4 h-4 border-2 border-gray-200 focus:border-gray-900"
                    style="border-radius: 4px;"
                  />
                  <label for="privacy" class="text-sm text-gray-600">
                    Kişisel verilerimin işlenmesini kabul ediyorum. *
                  </label>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  <svg v-if="isSubmitting" class="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                  </svg>
                  <span v-if="isSubmitting">Gönderiliyor...</span>
                  <span v-else>Mesaj Gönder</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="section-padding bg-gray-50">
      <div class="container">
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Konum
          </h2>
          <p class="text-xl text-gray-600">Ofisimizi ziyaret etmek için konumumuzu görüntüleyin</p>
        </div>

        <div class="border-2 border-gray-100 p-8 bg-white" style="border-radius: 4px;">
          <div class="aspect-w-16 aspect-h-9 bg-gray-50 flex items-center justify-center" style="border-radius: 4px;">
            <div class="text-center">
              <svg class="w-16 h-16 text-gray-900 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <p class="text-gray-900 font-medium">Harita Yükleniyor...</p>
              <p class="text-sm text-gray-500 mt-2">{{ appConfig.contact.address }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="section-padding bg-gradient-hero text-white">
      <div class="container text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6">
            Size Nasıl Yardımcı Olabiliriz?
          </h2>
          <p class="text-xl text-gray-200 mb-8 leading-relaxed">
            Uzman ekibimiz sorularınızı yanıtlamak ve size en iyi hizmeti sunmak için hazır.
            Bize ulaşın, sizinle iletişime geçelim.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              :href="`mailto:${appConfig.contact.email}`"
              class="btn btn-secondary"
            >
              E-posta Gönder
            </a>
            <a
              :href="`tel:${appConfig.contact.phone}`"
              class="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900"
            >
              Hemen Ara
            </a>
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

// Form state
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  privacy: false
})

const isSubmitting = ref(false)

// Form submission
const submitForm = async () => {
  if (!form.privacy) {
    alert('Lütfen kişisel veri işleme onayını veriniz.')
    return
  }

  isSubmitting.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    alert('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.')

    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
    form.privacy = false
  } catch (error) {
    alert('Bir hata oluştu. Lütfen tekrar deneyiniz.')
  } finally {
    isSubmitting.value = false
  }
}

// Social media icons
const getSocialIcon = (platform) => {
  const icons = {
    facebook: '📘',
    twitter: '🐦',
    instagram: '📷',
    linkedin: '💼',
    youtube: '📺',
    telegram: '📨'
  }
  return icons[platform] || '🔗'
}

// SEO
useHead({
  title: `İletişim - ${appConfig.site.name}`,
  meta: [
    { name: 'description', content: `${appConfig.federation.name} ile iletişime geçin. Adres, telefon, e-posta bilgileri ve iletişim formu.` },
    { name: 'keywords', content: 'iletişim, adres, telefon, e-posta, form, federasyon' },
    { property: 'og:title', content: `İletişim - ${appConfig.site.name}` },
    { property: 'og:description', content: 'Bizimle iletişime geçmek için tüm bilgiler burada.' }
  ]
})
</script>
