/**
 * ==============================================================================
 * DATABASE STATIS UNDANGAN PERNIKAHAN (WEDDING_CONFIG)
 * ==============================================================================
 * Cukup edit data klien di file ini. 
 * Semua teks, tanggal, acara, timeline, galeri, dan musik di index.html 
 * akan otomatis diperbarui secara dinamis!
 */

const WEDDING_DATA = {
  // Informasi Pasangan Mempelai
  couple: {
    groom: {
      shortName: "Gama",
      fullName: "Gamaliel Gihon Royter Lingga",
      childOrder: "Putra ke-1 dari 2 bersaudara",
      parents: "Putra dari IPTU BESLI ARWAN LINGGA, S.Sos. & MAGDALENA DOLOKSARIBU, S.Tr.Keb.Bdn.",
      instagram: "" // opsional
    },
    bride: {
      shortName: "Hana",
      fullName: "Hana Marselina Pasik",
      childOrder: "Putri ke-3 dari 3 bersaudara",
      parents: "Putri dari Letkol (Purn) MELKI SEDECH MARINUS PASIK & ELISABETH BONGI PADULANG",
      instagram: "@hanna_mrslna"
    },
    monogram: "GM" // Digunakan untuk inisial / branding
  },

  // Waktu Acara Utama (Digunakan untuk Cover, Countdown, & Metadata)
  // Zona waktu WIT (Papua / Sorong) adalah UTC+9
  weddingDate: {
    targetISO: "2026-11-21T08:00:00+09:00",
    displayDateEn: "Sabtu, 21 November 2026",
    displayDateId: "Sabtu, 21 November 2026"
  },

  // Detail Acara
  events: {
    akad: {
      title: "Pemberkatan Nikah",
      icon: "💍",
      date: "Sabtu, 21 November 2026",
      time: "08.00 WIT",
      venue: "Gereja GKI Efata Matalamagi",
      address: "Kota Sorong, Papua Barat Daya",
      mapsUrl: "https://maps.app.goo.gl/23LgXSw2RQ5VDvaF6?g_st=ic"
    },
    resepsi: {
      title: "Resepsi Pernikahan",
      icon: "🎉",
      date: "Sabtu, 21 November 2026",
      time: "11.00 WIT",
      venue: "Gedung Tongkonan Toraya Kota Sorong",
      address: "Kota Sorong, Papua Barat Daya",
      mapsUrl: "https://maps.app.goo.gl/vWQRCj39WJFyimE68?g_st=ic"
    },
    // Embed Google Maps (Sorong / Tongkonan Toraya Kota Sorong)
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.514695028045!2d131.25!3d-0.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d595568efab6611%3A0x7d39356ef24e7561!2sSorong%2C%20Sorong%20City%2C%20West%20Papua!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
  },

  // Kisah Cinta / Milestone (Love Story)
  loveStory: [
    {
      date: "Tahun 2022",
      title: "Pertama Bertemu",
      description: "Berawal dari sebuah pertemuan di Polresta Sorong Kota pada tahun 2022 sebagai rekan kerja."
    },
    {
      date: "14 Maret 2023",
      title: "Menjalin Hubungan",
      description: "Takdir kemudian membawa kami semakin dekat hingga pada 14 Maret 2023, kami memutuskan untuk saling mengenal dan menjalin hubungan."
    },
    {
      date: "2023 – 2026",
      title: "Perjalanan Bersama",
      description: "Lebih dari tiga tahun bersama, kami melewati berbagai cerita, suka dan duka, menguatkan komitmen satu sama lain."
    },
    {
      date: "21 November 2026",
      title: "Melangkah ke Jenjang Pernikahan",
      description: "Hingga akhirnya kami memantapkan hati untuk melangkah ke jenjang pernikahan suci di hadapan Tuhan dan keluarga tercinta."
    }
  ],

  // Galeri Foto
  gallery: [
    { src: "galeri-1.webp", alt: "Momen Bahagia 1" },
    { src: "galeri-2.webp", alt: "Momen Bahagia 2" },
    { src: "galeri-3.webp", alt: "Momen Bahagia 3" },
    { src: "galeri-4.webp", alt: "Momen Bahagia 4" },
    { src: "galeri-5.webp", alt: "Momen Bahagia 5" },
    { src: "galeri-6.webp", alt: "Momen Bahagia 6" }
  ],

  // Background Audio & Cover
  media: {
    audioSrc: "Nadin Amizah - Berpayung Tuhan.mp3",
    audioType: "audio/mpeg"
  },

  // Turut Mengundang
  hosts: {
    groomFamily: [
      "Keluarga Besar IPTU BESLI ARWAN LINGGA, S.Sos.",
      "Keluarga Besar MAGDALENA DOLOKSARIBU, S.Tr.Keb.Bdn."
    ],
    brideFamily: [
      "Keluarga Besar Letkol (Purn) MELKI SEDECH MARINUS PASIK",
      "Keluarga Besar ELISABETH BONGI PADULANG"
    ]
  },

  // Quotes & Footer
  quote: {
    text: "Together, beyond forever"
  },

  footer: {
    message: "Terima kasih telah menjadi bagian dari hari bahagia kami",
    credit: "Dibuat dengan ❤️"
  }
};

