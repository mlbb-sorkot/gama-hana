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
      fullName: "Gamaliel Lingga",
      childOrder: "Putra Pertama dari Tiga Bersaudara",
      parents: "Putra dari Bpk. Besli Lingga & Ibu Sri Manurung",
      instagram: "@gamalingga" // opsional
    },
    bride: {
      shortName: "Hana",
      fullName: "Hana Pasik",
      childOrder: "Putri Kedua dari Dua Bersaudara",
      parents: "Putri dari Bpk. Hendra Pasik & Ibu Rina",
      instagram: "@hanapasik" // opsional
    },
    monogram: "GM" // Digunakan untuk inisial / branding
  },

  // Waktu Acara Utama (Digunakan untuk Cover, Countdown, & Metadata)
  weddingDate: {
    // Format ISO untuk Countdown: YYYY-MM-DDTHH:mm:ss+ZonaWaktu (contoh: +07:00 untuk WIB)
    targetISO: "2026-11-21T08:00:00+07:00",
    displayDateEn: "Saturday, 21 November 2026",
    displayDateId: "Sabtu, 21 November 2026"
  },

  // Detail Acara
  events: {
    akad: {
      title: "Pemberkatan",
      icon: "💍",
      date: "Senin, 16 November 2026",
      time: "08:00 – 10:00 WIB",
      venue: "Gedung Serbaguna Grand Ballroom",
      address: "Jl. Sudirman No. 123, Jakarta Selatan",
      mapsUrl: "https://maps.google.com/?q=-6.2088,106.8456"
    },
    resepsi: {
      title: "Resepsi",
      icon: "🎉",
      date: "Sabtu, 21 November 2026",
      time: "11:00 – 14:00 WIB",
      venue: "Gedung Serbaguna Grand Ballroom",
      address: "Jl. Sudirman No. 123, Jakarta Selatan",
      mapsUrl: "https://maps.google.com/?q=-6.2088,106.8456"
    },
    // Embed Google Maps (iframe src)
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.194741399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
  },

  // Kisah Cinta / Milestone (Love Story)
  loveStory: [
    {
      date: "January 2025",
      title: "First Met",
      description: "Our paths crossed for the first time at a cozy little café downtown. It was an ordinary day that turned into something extraordinary — a simple hello that changed everything."
    },
    {
      date: "March 2025",
      title: "First Date",
      description: "A walk in the park under the cherry blossoms — nervous laughter, endless conversations, and the feeling that we had known each other for a lifetime."
    },
    {
      date: "June 2025",
      title: "The Proposal",
      description: "Under a canopy of stars, with a heart full of love, the question was asked and the answer was a tearful, joyful \"Yes!\" — the beginning of forever."
    },
    {
      date: "November 2026",
      title: "The Wedding",
      description: "The day we say \"I do\" and begin our greatest adventure together. Surrounded by the people we love most, we become one family, one heart, one story."
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
    audioSrc: "1103.WAV",
    audioType: "audio/wav"
  },

  // Turut Mengundang
  hosts: {
    groomFamily: [
      "Keluarga Besar Bpk. Besli Lingga",
      "Keluarga Besar Ibu Sri Manurung"
    ],
    brideFamily: [
      "Keluarga Besar Bpk. Hendra Pasik",
      "Keluarga Besar Ibu Rina"
    ]
  },

  // Footer & Ucapan
  footer: {
    message: "Thank you for being part of our special day",
    credit: "Made with ❤️"
  }
};

