# FedHub - Profesyonel Federasyon Web Platformu

FedHub, federasyonlar ve kurumsal organizasyonlar için özel olarak geliştirilmiş modern ve profesyonel bir web platformudur.

## ✨ Özellikler

- **Profesyonel Tasarım**: Modern ve kurumsal görünüm
- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **SEO Optimizasyonu**: Arama motoru dostu yapı
- **Çoklu Dil Desteği**: Türkçe, İngilizce, Almanca, Fransızca
- **Hızlı Performans**: Nuxt.js 3 ile optimize edilmiş
- **Kolay Yönetim**: Kullanıcı dostu admin paneli

## 🚀 Teknolojiler

- **Frontend**: Nuxt.js 3, Vue.js 3, TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Icons**: Heroicons (SVG)
- **Build Tool**: Vite
- **Package Manager**: Yarn

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
yarn install

# Geliştirme sunucusunu başlat
yarn dev

# Production için build et
yarn build

# Production sunucusunu başlat
yarn preview
```

## 🏗️ Proje Yapısı

```
fedhub-nuxt/
├── assets/              # CSS ve diğer statik dosyalar
├── components/          # Vue bileşenleri
├── composables/         # Vue composable'lar
├── config/              # Uygulama konfigürasyonu
├── pages/               # Sayfa bileşenleri
├── public/              # Statik dosyalar
└── server/              # Sunucu API'leri
```

## ⚙️ Konfigürasyon

Uygulamanın temel ayarları `config/app.config.ts` dosyasından yapılabilir:

- Site bilgileri (isim, açıklama, anahtar kelimeler)
- İletişim bilgileri
- Sosyal medya linkleri
- Federasyon özellikleri
- Tema renkleri

## 📱 Sayfalar

- **Ana Sayfa**: Hero section, istatistikler, hizmetler
- **Kurumsal**: Şirket hakkında bilgiler, misyon/vizyon
- **Duyurular**: Haberler ve duyurular listesi
- **Galeri**: Fotoğraf galerisi
- **İletişim**: İletişim formu ve bilgileri
- **Öneri & Şikayet**: Geri bildirim formu

## 🎨 Tasarım Sistemi

- **Renk Paleti**: Profesyonel mavi tonları
- **Tipografi**: Inter font ailesi
- **Spacing**: Tailwind CSS spacing sistemi
- **Components**: Özel tasarlanmış card, button, form bileşenleri
- **Animations**: Smooth transitions ve hover efektleri

## 📊 SEO ve Analytics

- Meta tag optimizasyonu
- Open Graph desteği
- Twitter Card desteği
- Sitemap oluşturma
- Google Analytics entegrasyonu (opsiyonel)

## 🔧 Özelleştirme

Projeyi kendi federasyonunuz için özelleştirmek için:

1. `config/app.config.ts` dosyasını düzenleyin
2. `public/` klasörüne logo ve görsellerinizi ekleyin
3. Sayfa içeriklerini güncelleyin
4. Renk temasını değiştirin (Tailwind config)

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

Projeye katkıda bulunmak için:

1. Fork yapın
2. Feature branch oluşturun
3. Değişikliklerinizi commit edin
4. Pull request gönderin

## 📞 Destek

Herhangi bir sorun yaşarsanız GitHub Issues bölümünden bizimle iletişime geçebilirsiniz.
