<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section bg-gradient-hero text-white section-padding">
      <div class="container text-center">
        <div class="max-w-4xl mx-auto animate-fade-in-up">
          <h1 class="text-5xl lg:text-6xl font-bold mb-6 text-shadow">Öneri & Şikayet</h1>
          <p class="text-xl lg:text-2xl text-blue-100 leading-relaxed">
            Görüşleriniz bizim için çok değerli. Önerilerinizi ve şikayetlerinizi iletebilirsiniz
          </p>
        </div>
      </div>
    </section>

    <!-- Form Types -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div
            v-for="(type, index) in formTypes"
            :key="type.value"
            class="card text-center group hover:scale-105 transform transition-all duration-300 cursor-pointer"
            :class="selectedType === type.value ? 'bg-blue-50 border-blue-200' : ''"
            @click="selectedType = type.value"
          >
            <div class="icon-circle mb-6" :class="type.color">
              <component :is="type.icon" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ type.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ type.description }}</p>
            <div class="mt-6">
              <span
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                :class="selectedType === type.value
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 text-gray-600'"
              >
                <svg v-if="selectedType === type.value" class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                {{ selectedType === type.value ? 'Seçildi' : 'Seç' }}
              </span>
            </div>
          </div>
        </div>

        <!-- Form Section -->
        <div class="max-w-4xl mx-auto">
          <div class="card bg-gradient-to-br from-white to-gray-50">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                {{ getFormTitle() }}
              </h2>
              <p class="text-gray-600 leading-relaxed">
                {{ getFormDescription() }}
              </p>
            </div>

            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Personal Information -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-semibold text-gray-700 mb-3">
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
                  <label for="lastName" class="block text-sm font-semibold text-gray-700 mb-3">
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

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="email" class="block text-sm font-semibold text-gray-700 mb-3">
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
                  <label for="phone" class="block text-sm font-semibold text-gray-700 mb-3">
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
              </div>

              <!-- Membership Status -->
              <div>
                <label for="membershipStatus" class="block text-sm font-semibold text-gray-700 mb-3">
                  Üyelik Durumu *
                </label>
                <select
                  id="membershipStatus"
                  v-model="form.membershipStatus"
                  required
                  class="input"
                >
                  <option value="">Seçiniz</option>
                  <option value="uye">Aktif Üye</option>
                  <option value="eski-uye">Eski Üye</option>
                  <option value="aday">Üye Adayı</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>

              <!-- Priority Level -->
              <div>
                <label for="priority" class="block text-sm font-semibold text-gray-700 mb-3">
                  Öncelik Seviyesi *
                </label>
                <select
                  id="priority"
                  v-model="form.priority"
                  required
                  class="input"
                >
                  <option value="">Seçiniz</option>
                  <option value="dusuk">Düşük</option>
                  <option value="orta">Orta</option>
                  <option value="yuksek">Yüksek</option>
                  <option value="kritik">Kritik</option>
                </select>
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-semibold text-gray-700 mb-3">
                  Konu *
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  required
                  class="input"
                  :placeholder="getSubjectPlaceholder()"
                />
              </div>

              <!-- Category (for complaints) -->
              <div v-if="selectedType === 'sikayet'">
                <label for="category" class="block text-sm font-semibold text-gray-700 mb-3">
                  Şikayet Kategorisi *
                </label>
                <select
                  id="category"
                  v-model="form.category"
                  required
                  class="input"
                >
                  <option value="">Kategori seçiniz</option>
                  <option value="hizmet-kalitesi">Hizmet Kalitesi</option>
                  <option value="personel">Personel Davranışı</option>
                  <option value="sure">Süreç/Zaman</option>
                  <option value="teknik">Teknik Sorunlar</option>
                  <option value="iletisim">İletişim</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-semibold text-gray-700 mb-3">
                  {{ getMessageLabel() }} *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="6"
                  required
                  class="input resize-none"
                  :placeholder="getMessagePlaceholder()"
                ></textarea>
              </div>

              <!-- File Upload -->
              <div>
                <label for="files" class="block text-sm font-semibold text-gray-700 mb-3">
                  Ek Dosyalar
                </label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-200">
                  <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                  </svg>
                  <p class="text-gray-600 mb-2">Dosyaları buraya sürükleyin veya tıklayın</p>
                  <p class="text-sm text-gray-500">PDF, DOC, DOCX, JPG, PNG (Max 10MB)</p>
                  <input
                    id="files"
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    class="hidden"
                    @change="handleFileUpload"
                  />
                </div>
                <div v-if="uploadedFiles.length > 0" class="mt-4 space-y-2">
                  <div
                    v-for="(file, index) in uploadedFiles"
                    :key="index"
                    class="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                  >
                    <span class="text-sm text-gray-700">{{ file.name }}</span>
                    <button
                      type="button"
                      @click="removeFile(index)"
                      class="text-red-600 hover:text-red-700"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Privacy Consent -->
              <div class="flex items-start">
                <input
                  id="privacy"
                  v-model="form.privacy"
                  type="checkbox"
                  required
                  class="mt-1 mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label for="privacy" class="text-sm text-gray-600">
                  Kişisel verilerimin işlenmesini ve tarafıma geri dönüş yapılmasını kabul ediyorum. *
                </label>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                <svg v-if="isSubmitting" class="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
                <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
                <span v-if="isSubmitting">Gönderiliyor...</span>
                <span v-else>{{ getSubmitButtonText() }}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Your Feedback Matters -->
    <section class="section-padding bg-gray-50">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Görüşleriniz Neden Önemli?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Her bir öneri ve şikayetiniz, hizmet kalitemizi artırmamıza yardımcı oluyor
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center group">
            <div class="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Kalite Artışı</h3>
            <p class="text-gray-600 text-sm">Hizmet kalitemizi sürekli iyileştiriyoruz</p>
          </div>

          <div class="text-center group">
            <div class="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Hızlı Çözüm</h3>
            <p class="text-gray-600 text-sm">Sorunlara hızla çözüm buluyoruz</p>
          </div>

          <div class="text-center group">
            <div class="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Üye Memnuniyeti</h3>
            <p class="text-gray-600 text-sm">Üyelerimizin memnuniyeti önceliğimiz</p>
          </div>

          <div class="text-center group">
            <div class="w-20 h-20 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Sürekli İyileştirme</h3>
            <p class="text-gray-600 text-sm">Süreçlerimizi sürekli geliştiriyoruz</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Alternative -->
    <section class="section-padding bg-gradient-hero text-white">
      <div class="container text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-shadow">
            Alternatif İletişim Yolları
          </h2>
          <p class="text-xl text-blue-100 mb-8 leading-relaxed">
            Acil durumlar için diğer iletişim kanallarımızı da kullanabilirsiniz
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              :href="`tel:${appConfig.contact.phone}`"
              class="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 group"
            >
              <svg class="w-8 h-8 text-white mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <h3 class="font-semibold mb-1">Telefon</h3>
              <p class="text-sm text-blue-100">Acil durumlar için</p>
            </a>

            <a
              :href="`mailto:${appConfig.contact.email}`"
              class="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 group"
            >
              <svg class="w-8 h-8 text-white mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <h3 class="font-semibold mb-1">E-posta</h3>
              <p class="text-sm text-blue-100">Detaylı bilgi için</p>
            </a>

            <NuxtLink
              to="/iletisim"
              class="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 group"
            >
              <svg class="w-8 h-8 text-white mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <h3 class="font-semibold mb-1">Ofis Ziyareti</h3>
              <p class="text-sm text-blue-100">Yüz yüze görüşme</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { appConfig } from '~/config/app.config'

// Reactive data
const selectedType = ref('oneri')
const isSubmitting = ref(false)
const uploadedFiles = ref([])

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  membershipStatus: '',
  priority: '',
  subject: '',
  category: '',
  message: '',
  privacy: false
})

// Form types
const formTypes = [
  {
    value: 'oneri',
    title: 'Öneri',
    description: 'Hizmetlerimizi geliştirmek için önerilerinizi paylaşın',
    color: 'bg-gradient-to-br from-green-100 to-green-200',
    icon: 'LightBulbIcon'
  },
  {
    value: 'sikayet',
    title: 'Şikayet',
    description: 'Yaşadığınız sorunları ve şikayetlerinizi bildirin',
    color: 'bg-gradient-to-br from-red-100 to-red-200',
    icon: 'ExclamationTriangleIcon'
  },
  {
    value: 'genel',
    title: 'Genel Görüş',
    description: 'Genel görüş ve değerlendirmelerinizi iletin',
    color: 'bg-gradient-to-br from-blue-100 to-blue-200',
    icon: 'ChatBubbleLeftRightIcon'
  }
]

// Dynamic content methods
const getFormTitle = () => {
  const titles = {
    oneri: 'Önerinizi Paylaşın',
    sikayet: 'Şikayetinizi Bildirin',
    genel: 'Görüşünüzü İletin'
  }
  return titles[selectedType.value]
}

const getFormDescription = () => {
  const descriptions = {
    oneri: 'Hizmetlerimizi nasıl geliştirebileceğimiz konusundaki önerilerinizi bizimle paylaşın.',
    sikayet: 'Yaşadığınız sorunları detaylı bir şekilde bildirin, en kısa sürede çözüm bulalım.',
    genel: 'Federasyonumuz hakkındaki genel görüş ve değerlendirmelerinizi iletin.'
  }
  return descriptions[selectedType.value]
}

const getSubjectPlaceholder = () => {
  const placeholders = {
    oneri: 'Önerinizin kısa başlığını yazın',
    sikayet: 'Şikayetinizin konusunu yazın',
    genel: 'Görüşünüzün konusunu yazın'
  }
  return placeholders[selectedType.value]
}

const getMessageLabel = () => {
  const labels = {
    oneri: 'Öneriniz',
    sikayet: 'Şikayetiniz',
    genel: 'Görüşünüz'
  }
  return labels[selectedType.value]
}

const getMessagePlaceholder = () => {
  const placeholders = {
    oneri: 'Önerinizi detaylı bir şekilde açıklayın...',
    sikayet: 'Yaşadığınız sorunu detaylı bir şekilde anlatın...',
    genel: 'Görüşünüzü detaylı bir şekilde paylaşın...'
  }
  return placeholders[selectedType.value]
}

const getSubmitButtonText = () => {
  const texts = {
    oneri: 'Önerimi Gönder',
    sikayet: 'Şikayetimi Gönder',
    genel: 'Görüşümü Gönder'
  }
  return texts[selectedType.value]
}

// File handling
const handleFileUpload = (event) => {
  const files = Array.from(event.target.files)
  const maxSize = 10 * 1024 * 1024 // 10MB

  files.forEach(file => {
    if (file.size > maxSize) {
      alert(`${file.name} dosyası çok büyük. Maksimum dosya boyutu 10MB'dir.`)
      return
    }
    uploadedFiles.value.push(file)
  })

  // Clear input
  event.target.value = ''
}

const removeFile = (index) => {
  uploadedFiles.value.splice(index, 1)
}

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

    const formType = selectedType.value === 'oneri' ? 'Öneriniz' : selectedType.value === 'sikayet' ? 'Şikayetiniz' : 'Görüşünüz'
    alert(`${formType} başarıyla gönderildi! En kısa sürede size dönüş yapacağız. Referans numaranız: ${Math.random().toString(36).substr(2, 9).toUpperCase()}`)

    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
    form.privacy = false
    uploadedFiles.value = []
    selectedType.value = 'oneri'
  } catch (error) {
    alert('Bir hata oluştu. Lütfen tekrar deneyiniz.')
  } finally {
    isSubmitting.value = false
  }
}

// SEO
useHead({
  title: `Öneri & Şikayet - ${appConfig.site.name}`,
  meta: [
    { name: 'description', content: `${appConfig.federation.name} öneri ve şikayet formu. Görüşlerinizi bizimle paylaşın.` },
    { name: 'keywords', content: 'öneri, şikayet, geri bildirim, form, federasyon' },
    { property: 'og:title', content: `Öneri & Şikayet - ${appConfig.site.name}` },
    { property: 'og:description', content: 'Önerilerinizi ve şikayetlerinizi bizimle paylaşın.' }
  ]
})
</script>
