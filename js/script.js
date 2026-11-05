/* ==========================================================================
   Wedding Invitation — Main JavaScript
   Pure vanilla JS, no jQuery dependency
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
     DOM References
     ------------------------------------------------------------------ */
  const cover         = document.getElementById('cover');
  const openBtn       = document.getElementById('openInvitation');
  const mainContent   = document.getElementById('mainContent');
  const guestGreeting = document.getElementById('guestGreeting');
  const musicToggle   = document.getElementById('musicToggle');
  const musicIcon     = document.getElementById('musicIcon');
  const bgMusic       = document.getElementById('bgMusic');
  const lightbox      = document.getElementById('lightbox');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxBody  = document.getElementById('lightboxContent');

  /* ------------------------------------------------------------------
     0. Render Data dari Database Statis (WEDDING_DATA di js/data.js)
     ------------------------------------------------------------------ */
  function applyWeddingData() {
    if (typeof WEDDING_DATA === 'undefined') return;

    var data = WEDDING_DATA;
    var groom = data.couple && data.couple.groom ? data.couple.groom.shortName : 'Romeo';
    var bride = data.couple && data.couple.bride ? data.couple.bride.shortName : 'Juliet';
    var coupleDisplay = groom + ' & ' + bride;

    // Title Tag & Meta
    document.title = 'Wedding of ' + coupleDisplay;

    // Cover Section
    var coverNames = document.querySelector('.cover__names');
    if (coverNames) {
      coverNames.innerHTML = 
        '<span class="cover__name">' + groom + '</span>' +
        '<span class="cover__amp">&amp;</span>' +
        '<span class="cover__name">' + bride + '</span>';
    }
    var coverDate = document.querySelector('.cover__date');
    if (coverDate && data.weddingDate && data.weddingDate.displayDateEn) {
      coverDate.textContent = data.weddingDate.displayDateEn;
    }

    // Hero Section
    var heroNames = document.querySelector('.hero__names');
    if (heroNames) {
      heroNames.innerHTML = 
        '<span class="hero__name">' + groom + '</span>' +
        '<span class="hero__amp">&amp;</span>' +
        '<span class="hero__name">' + bride + '</span>';
    }
    var heroDate = document.querySelector('.hero__date');
    if (heroDate && data.weddingDate && data.weddingDate.displayDateEn) {
      heroDate.textContent = data.weddingDate.displayDateEn;
    }

    // Couple Profile Section
    if (data.couple) {
      if (data.couple.groom) {
        var gFull = document.getElementById('groomFullName');
        var gOrder = document.getElementById('groomChildOrder');
        var gParents = document.getElementById('groomParents');
        if (gFull) gFull.textContent = data.couple.groom.fullName || groom;
        if (gOrder) gOrder.textContent = data.couple.groom.childOrder || '';
        if (gParents) gParents.textContent = data.couple.groom.parents || '';
      }
      if (data.couple.bride) {
        var bFull = document.getElementById('brideFullName');
        var bOrder = document.getElementById('brideChildOrder');
        var bParents = document.getElementById('brideParents');
        if (bFull) bFull.textContent = data.couple.bride.fullName || bride;
        if (bOrder) bOrder.textContent = data.couple.bride.childOrder || '';
        if (bParents) bParents.textContent = data.couple.bride.parents || '';
      }
    }

    // Love Story Timeline
    if (data.loveStory && data.loveStory.length > 0) {
      var timelineContainer = document.querySelector('.timeline');
      if (timelineContainer) {
        var timelineHTML = '';
        data.loveStory.forEach(function (story, index) {
          var isLeft = (index % 2 === 0);
          var alignClass = isLeft ? 'timeline__item--left' : 'timeline__item--right';
          var aosAnim = isLeft ? 'fade-right' : 'fade-left';

          timelineHTML += 
            '<div class="timeline__item ' + alignClass + '" data-aos="' + aosAnim + '" data-aos-duration="800">' +
              '<div class="timeline__marker" aria-hidden="true"></div>' +
              '<div class="timeline__content">' +
                '<div class="timeline__photo" aria-label="Photo placeholder">' +
                  '<span>Photo</span>' +
                '</div>' +
                '<div class="timeline__text">' +
                  '<span class="timeline__date">' + story.date + '</span>' +
                  '<h3 class="timeline__title">' + story.title + '</h3>' +
                  '<p class="timeline__desc">' + story.description + '</p>' +
                '</div>' +
              '</div>' +
            '</div>';
        });
        timelineContainer.innerHTML = timelineHTML;
      }
    }

    // Event Details (Akad & Resepsi)
    if (data.events) {
      var eventCards = document.querySelectorAll('.event-card');
      if (eventCards.length >= 2) {
        // Akad
        if (data.events.akad) {
          var cardAkad = eventCards[0];
          cardAkad.querySelector('.event-card__icon').textContent = data.events.akad.icon || '💍';
          cardAkad.querySelector('.event-card__title').textContent = data.events.akad.title;
          cardAkad.querySelector('.event-card__date').textContent = data.events.akad.date;
          cardAkad.querySelector('.event-card__time').textContent = data.events.akad.time;
          cardAkad.querySelector('.event-card__venue').textContent = data.events.akad.venue;
          cardAkad.querySelector('.event-card__address').textContent = data.events.akad.address;
          var btnAkad = cardAkad.querySelector('.event-card__btn');
          if (btnAkad && data.events.akad.mapsUrl) btnAkad.href = data.events.akad.mapsUrl;
        }

        // Resepsi
        if (data.events.resepsi) {
          var cardResepsi = eventCards[1];
          cardResepsi.querySelector('.event-card__icon').textContent = data.events.resepsi.icon || '🎉';
          cardResepsi.querySelector('.event-card__title').textContent = data.events.resepsi.title;
          cardResepsi.querySelector('.event-card__date').textContent = data.events.resepsi.date;
          cardResepsi.querySelector('.event-card__time').textContent = data.events.resepsi.time;
          cardResepsi.querySelector('.event-card__venue').textContent = data.events.resepsi.venue;
          cardResepsi.querySelector('.event-card__address').textContent = data.events.resepsi.address;
          var btnResepsi = cardResepsi.querySelector('.event-card__btn');
          if (btnResepsi && data.events.resepsi.mapsUrl) btnResepsi.href = data.events.resepsi.mapsUrl;
        }
      }

      // Maps Embed
      var mapsIframe = document.querySelector('.events__map iframe');
      if (mapsIframe && data.events.mapsEmbedUrl) {
        mapsIframe.src = data.events.mapsEmbedUrl;
      }
    }

    // Gallery Grid
    if (data.gallery && data.gallery.length > 0) {
      var galleryGrid = document.querySelector('.gallery__grid');
      if (galleryGrid) {
        var galleryHTML = '';
        data.gallery.forEach(function (photo, idx) {
          var delay = (idx % 3) * 100;
          galleryHTML += 
            '<div class="gallery__item" data-aos="fade-up" data-aos-delay="' + delay + '" tabindex="0" role="button" aria-label="View Photo ' + (idx + 1) + '">' +
              '<img src="' + photo.src + '" alt="' + (photo.alt || 'Foto Galeri ' + (idx + 1)) + '" class="gallery__img" loading="lazy">' +
              '<div class="gallery__overlay"><span>View</span></div>' +
            '</div>';
        });
        galleryGrid.innerHTML = galleryHTML;
      }
    }

    // Audio Soundtrack
    if (data.media && data.media.audioSrc && bgMusic) {
      var sourceEl = bgMusic.querySelector('source');
      if (sourceEl) {
        sourceEl.src = data.media.audioSrc;
        if (data.media.audioType) sourceEl.type = data.media.audioType;
        bgMusic.load();
      }
    }

    // Turut Mengundang (Hosts)
    if (data.hosts) {
      var hostsGroomTitle = document.getElementById('hostsGroomTitle');
      var hostsBrideTitle = document.getElementById('hostsBrideTitle');
      var hostsGroomList  = document.getElementById('hostsGroomList');
      var hostsBrideList  = document.getElementById('hostsBrideList');

      if (hostsGroomTitle) {
        hostsGroomTitle.textContent = 'Keluarga ' + groom;
      }
      if (hostsBrideTitle) {
        hostsBrideTitle.textContent = 'Keluarga ' + bride;
      }

      if (hostsGroomList && Array.isArray(data.hosts.groomFamily)) {
        hostsGroomList.innerHTML = data.hosts.groomFamily
          .map(function (name) { return '<li>' + name + '</li>'; })
          .join('');
      }

      if (hostsBrideList && Array.isArray(data.hosts.brideFamily)) {
        hostsBrideList.innerHTML = data.hosts.brideFamily
          .map(function (name) { return '<li>' + name + '</li>'; })
          .join('');
      }
    }

    // Footer
    var footerNames = document.querySelector('.footer__names');
    if (footerNames) footerNames.textContent = coupleDisplay;

    var footerMessage = document.querySelector('.footer__message');
    if (footerMessage && data.footer && data.footer.message) {
      footerMessage.textContent = data.footer.message;
    }

    var footerDate = document.querySelector('.footer__date');
    if (footerDate && data.weddingDate && data.weddingDate.displayDateEn) {
      footerDate.textContent = data.weddingDate.displayDateEn;
    }

    var footerCredit = document.querySelector('.footer__credit');
    if (footerCredit && data.footer && data.footer.credit) {
      footerCredit.textContent = data.footer.credit;
    }
  }

  /* ------------------------------------------------------------------
     1. Guest Name from URL Parameter (?to=Nama+Tamu)
     ------------------------------------------------------------------ */
  function setGuestName() {
    const params = new URLSearchParams(window.location.search);
    const guestName = params.get('to');
    if (guestName && guestGreeting) {
      guestGreeting.textContent = 'Dear ' + decodeURIComponent(guestName) + ',';
    }
  }

  /* ------------------------------------------------------------------
     2. Cover Page — Open Invitation & Slow Auto-Scroll
     ------------------------------------------------------------------ */
  var autoScrollActive = false;
  var autoScrollAnimationId = null;

  function stopAutoScroll() {
    if (autoScrollActive) {
      autoScrollActive = false;
      if (autoScrollAnimationId) {
        cancelAnimationFrame(autoScrollAnimationId);
        autoScrollAnimationId = null;
      }
    }
  }

  function startSlowAutoScroll() {
    stopAutoScroll();
    autoScrollActive = true;

    // Kecepatan scroll (pixel per frame, sangat halus & santai)
    var scrollSpeed = 0.8;

    function step() {
      if (!autoScrollActive) return;

      var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= maxScroll - 2) {
        stopAutoScroll();
        return;
      }

      window.scrollBy(0, scrollSpeed);
      autoScrollAnimationId = requestAnimationFrame(step);
    }

    autoScrollAnimationId = requestAnimationFrame(step);

    // Hentikan auto-scroll jika pengguna melakukan interaksi manual
    var stopEvents = ['wheel', 'touchstart', 'touchmove', 'keydown', 'mousedown'];
    function onUserInteraction() {
      stopAutoScroll();
      stopEvents.forEach(function (evt) {
        window.removeEventListener(evt, onUserInteraction, { passive: true });
      });
    }

    stopEvents.forEach(function (evt) {
      window.addEventListener(evt, onUserInteraction, { passive: true });
    });
  }

  function initCover() {
    if (!openBtn || !cover || !mainContent) return;

    openBtn.addEventListener('click', function () {
      // Slide cover up
      cover.classList.add('cover--hidden');

      // Reveal main content
      mainContent.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = '';

      // Start music
      playMusic();

      // Show music toggle
      if (musicToggle) {
        musicToggle.classList.add('music-toggle--visible');
      }

      // Initialise AOS after content is visible
      setTimeout(function () {
        if (typeof AOS !== 'undefined') {
          AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 40,
            disable: false // animations enabled on all devices
          });
          AOS.refresh();
        }
      }, 100);

      // Mulai auto-scroll perlahan setelah cover selesai terbuka
      setTimeout(function () {
        startSlowAutoScroll();
      }, 1200);
    });

    // Prevent scrolling while cover is shown
    document.body.style.overflow = 'hidden';
  }

  /* ------------------------------------------------------------------
     3. Countdown Timer — Target Date
     ------------------------------------------------------------------ */
  function initCountdown() {
    var targetDateStr = (typeof WEDDING_DATA !== 'undefined' && WEDDING_DATA.weddingDate && WEDDING_DATA.weddingDate.targetISO) 
      ? WEDDING_DATA.weddingDate.targetISO 
      : '2026-11-21T08:00:00+07:00';
    var targetDate = new Date(targetDateStr).getTime();

    var daysEl    = document.getElementById('cdDays');
    var hoursEl   = document.getElementById('cdHours');
    var minutesEl = document.getElementById('cdMinutes');
    var secondsEl = document.getElementById('cdSeconds');

    if (!daysEl) return;

    function pad(n) {
      return n < 10 ? '0' + n : String(n);
    }

    function updateNumber(el, value) {
      var padded = pad(value);
      if (el.textContent !== padded) {
        el.textContent = padded;
        // Trigger flip animation
        el.classList.remove('flip');
        // Force reflow
        void el.offsetWidth;
        el.classList.add('flip');
      }
    }

    function tick() {
      var now  = Date.now();
      var diff = targetDate - now;

      if (diff <= 0) {
        daysEl.textContent    = '00';
        hoursEl.textContent   = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        return;
      }

      var days    = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
      var minutes = Math.floor((diff / (1000 * 60)) % 60);
      var seconds = Math.floor((diff / 1000) % 60);

      updateNumber(daysEl, days);
      updateNumber(hoursEl, hours);
      updateNumber(minutesEl, minutes);
      updateNumber(secondsEl, seconds);
    }

    tick();
    setInterval(tick, 1000);
  }

  /* ------------------------------------------------------------------
     4. Background Music
     ------------------------------------------------------------------ */
  var isPlaying = false;

  function playMusic() {
    if (!bgMusic) return;
    var playPromise = bgMusic.play();
    if (playPromise !== undefined) {
      playPromise.then(function () {
        isPlaying = true;
        updateMusicUI();
      }).catch(function () {
        // Autoplay blocked — user can tap the toggle
        isPlaying = false;
        updateMusicUI();
      });
    }
  }

  function toggleMusic() {
    if (!bgMusic) return;
    if (isPlaying) {
      bgMusic.pause();
      isPlaying = false;
    } else {
      bgMusic.play().then(function () {
        isPlaying = true;
      }).catch(function () {});
    }
    updateMusicUI();
  }

  function updateMusicUI() {
    if (!musicToggle || !musicIcon) return;
    if (isPlaying) {
      musicIcon.textContent = '♫';
      musicToggle.classList.add('is-playing');
      musicToggle.setAttribute('aria-label', 'Pause background music');
    } else {
      musicIcon.textContent = '▶';
      musicToggle.classList.remove('is-playing');
      musicToggle.setAttribute('aria-label', 'Play background music');
    }
  }

  function initMusic() {
    if (!musicToggle) return;
    musicToggle.addEventListener('click', toggleMusic);
  }

  /* ------------------------------------------------------------------
     5. Photo Gallery Lightbox
     ------------------------------------------------------------------ */
  function initGallery() {
    var galleryItems = document.querySelectorAll('.gallery__item');

    galleryItems.forEach(function (item) {
      item.addEventListener('click', function () {
        openLightbox(item);
      });
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(item);
        }
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightbox) {
      lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
          closeLightbox();
        }
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    });
  }

  function openLightbox(item) {
    stopAutoScroll();
    if (!lightbox || !lightboxBody) return;

    lightboxBody.innerHTML = '';

    // Check if item contains an img or placeholder
    var img = item.querySelector('.gallery__img');
    var placeholder = item.querySelector('.gallery__placeholder');

    if (img) {
      var fullImg = document.createElement('img');
      fullImg.src = img.src;
      fullImg.alt = img.alt || 'Foto Galeri';
      lightboxBody.appendChild(fullImg);
    } else if (placeholder) {
      var clone = placeholder.cloneNode(true);
      lightboxBody.appendChild(clone);
    }

    lightbox.classList.add('lightbox--active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('lightbox--active');
    lightbox.setAttribute('aria-hidden', 'true');

    // Restore scroll only if cover is already hidden
    if (cover && cover.classList.contains('cover--hidden')) {
      document.body.style.overflow = '';
    }
  }

  /* ------------------------------------------------------------------
     6. Smooth Scroll for Anchor Links (fallback)
     ------------------------------------------------------------------ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  /* ------------------------------------------------------------------
     Initialise Everything
     ------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', function () {
    applyWeddingData();
    setGuestName();
    initCover();
    initCountdown();
    initMusic();
    initGallery();
    initSmoothScroll();
  });

})();
