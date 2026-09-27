/**
 * ====================================================================
 * OUR ENGINEERING STORY — CINEMATIC MEMORY WEBSITE
 * Core Interactive Application Engine (app.js)
 * ====================================================================
 */

// Global State
let currentData = null;
let currentLightboxIndex = 0;
let currentLightboxList = [];
let currentTrackIndex = 0;
let isAudioPlaying = false;
let audioContext = null;
let ambientOscillator = null;
let ambientGain = null;

// Image Error Fallback Handler
window.handleImageError = function (img, originalSrc) {
  if (img.dataset.hasFailed) return;
  img.dataset.hasFailed = "true";

  const isAvatar = img.closest('.hero-avatar-ring, .friend-card-avatar, .friend-modal-avatar, .award-winner-avatar');
  const fallback = isAvatar ? 'assets/images/avatar-placeholder.svg' : 'assets/images/photo-placeholder.svg';
  
  img.src = fallback;
  img.title = `Missing photo: ${originalSrc}\n(Add this image to your photos folder)`;
  img.alt = "PHOTO COMING SOON";
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  loadData();
  setupNavigation();
  setupThemeToggle();
  renderAllSections();
  setupSoundtrackPlayer();
  setupCustomizerModal();
  setupScrollAnimations();
});

/**
 * Load Data from window.MEMORY_DATA or localStorage cache
 */
function loadData() {
  const cached = localStorage.getItem("custom_memory_data");
  if (cached) {
    try {
      currentData = JSON.parse(cached);
    } catch (e) {
      console.warn("Could not parse cached memory data, using default.", e);
      currentData = window.MEMORY_DATA;
    }
  } else {
    currentData = window.MEMORY_DATA;
  }
}

/**
 * Setup Navigation, ScrollSpy, and Mobile Menu
 */
function setupNavigation() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky Frosted Glass on Scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    updateScrollSpy();
  }, { passive: true });

  // Mobile Hamburger Menu Toggle
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navMenu.classList.toggle("open");
  });

  // Close Mobile Menu on Link Click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navMenu.classList.remove("open");
    });
  });

  // Replay Story Button
  const replayBtn = document.getElementById("btn-replay-story");
  if (replayBtn) {
    replayBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

/**
 * ScrollSpy: Highlights Active Navigation Link
 */
function updateScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY + 120;

  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (link) {
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    }
  });
}

/**
 * Theme Toggle (Dark Cinematic <-> Warm Nostalgic Light)
 */
function setupThemeToggle() {
  const btn = document.getElementById("btn-theme-toggle");
  const savedTheme = localStorage.getItem("memory_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const nextTheme = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("memory_theme", nextTheme);
  });
}

/**
 * Render All Page Sections from Data
 */
function renderAllSections() {
  renderBrandingAndHero();
  renderFriendsSection();
  renderTimelineSection();
  renderStoriesSection();
  renderGallerySection();
  renderSpecialMoments();
  renderInsideJokes();
  renderCampusMap();
  renderAwards();
  renderVideos();
  renderQuotesWall();
  renderFinalChapter();
}

/**
 * 1. Branding & Hero Section
 */
function renderBrandingAndHero() {
  const b = currentData.branding;
  document.title = `${b.siteTitle} — ${b.subtitle}`;
  
  // Nav text
  const navTitle = document.getElementById("nav-brand-title");
  const navSub = document.getElementById("nav-brand-sub");
  if (navTitle) navTitle.textContent = b.siteTitle;
  if (navSub) navSub.textContent = b.subtitle;

  // Hero Image
  const heroImg = document.getElementById("hero-img");
  if (heroImg) {
    heroImg.src = b.heroGroupPhoto;
  }

  // Hero Tagline
  const heroTagline = document.getElementById("hero-tagline");
  if (heroTagline) heroTagline.textContent = b.secondaryTagline;

  // 4 Circular Avatars in Hero
  const friendsRow = document.getElementById("hero-friends-row");
  if (friendsRow) {
    friendsRow.innerHTML = currentData.friends.map(friend => `
      <div class="hero-friend-item" onclick="openFriendModal('${friend.id}')">
        <div class="hero-avatar-ring" style="border: 2px solid ${friend.accentColor}; box-shadow: 0 0 15px ${friend.accentColor}55;">
          <img src="${friend.profilePhoto}" alt="${friend.name}" onerror="handleImageError(this, '${friend.profilePhoto}')">
        </div>
        <span class="hero-friend-name">${friend.name}</span>
      </div>
    `).join("");
  }

  // Footer text
  const footerTitle = document.getElementById("footer-site-title");
  const footerTagline = document.getElementById("footer-tagline");
  const footerAuthor = document.getElementById("footer-author");
  const footerBatch = document.getElementById("footer-batch");
  if (footerTitle) footerTitle.textContent = b.siteTitle;
  if (footerTagline) footerTagline.textContent = b.mainTagline;
  if (footerAuthor) footerAuthor.textContent = b.createdBy;
  if (footerBatch) footerBatch.textContent = b.batchYears;
}

/**
 * 2. The Four of Us Profile Cards
 */
function renderFriendsSection() {
  const container = document.getElementById("friends-cards-container");
  if (!container) return;

  container.innerHTML = currentData.friends.map(friend => `
    <div class="friend-card" style="--accent-color: ${friend.accentColor};" onclick="openFriendModal('${friend.id}')">
      <div class="friend-card-avatar" style="border-color: ${friend.accentColor}; box-shadow: 0 0 20px ${friend.accentColor}44;">
        <img src="${friend.profilePhoto}" alt="${friend.name}" onerror="handleImageError(this, '${friend.profilePhoto}')">
      </div>
      <h3>${friend.name}</h3>
      <div class="nickname">“${friend.nickname}”</div>
      <div class="friend-role-badge">${friend.roleTitle}</div>
      <p class="friend-card-quote">“${friend.personalQuote}”</p>
      <div class="btn-view-profile">
        <span>EXPLORE MEMORIES</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
      </div>
    </div>
  `).join("");
}

/**
 * Open Friend Profile Modal
 */
window.openFriendModal = function (friendId) {
  const friend = currentData.friends.find(f => f.id === friendId);
  if (!friend) return;

  const content = document.getElementById("friend-modal-content");
  content.innerHTML = `
    <div class="friend-modal-header">
      <div class="friend-modal-avatar" style="border-color: ${friend.accentColor};">
        <img src="${friend.profilePhoto}" alt="${friend.name}" onerror="handleImageError(this, '${friend.profilePhoto}')">
      </div>
      <div class="friend-modal-info">
        <h2>${friend.fullName || friend.name}</h2>
        <div class="modal-nickname">“${friend.nickname}” • ${friend.roleTitle}</div>
        <p style="color: var(--text-muted); font-size: 0.95rem;">${friend.bio}</p>
      </div>
    </div>

    <div class="friend-modal-details-grid">
      <div class="detail-item">
        <div class="detail-label">🌟 Best Quality</div>
        <div class="detail-value">${friend.bestQuality}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">😂 Funniest Habit</div>
        <div class="detail-value">${friend.funniestHabit}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">🗣️ Famous Dialogue</div>
        <div class="detail-value">${friend.famousDialogue}</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">🏆 Squad Role</div>
        <div class="detail-value">${friend.badge || friend.roleTitle}</div>
      </div>
    </div>

    <div class="detail-item" style="margin-bottom: 24px;">
      <div class="detail-label">💖 Favorite Memory</div>
      <div class="detail-value" style="font-style: italic;">“${friend.favoriteMemory}”</div>
    </div>

    <div class="friend-modal-photos">
      <h4>Personal Photos (${friend.photos.length})</h4>
      <div class="friend-modal-photo-gallery">
        ${friend.photos.map((photoUrl, idx) => `
          <div class="friend-modal-photo-thumb" onclick="openLightboxSingle('${photoUrl}', '${friend.name} - Photo ${idx + 1}')">
            <img src="${photoUrl}" alt="${friend.name} photo" onerror="handleImageError(this, '${photoUrl}')">
          </div>
        `).join("")}
      </div>
    </div>
  `;

  const modal = document.getElementById("friend-modal");
  modal.classList.add("active");
};

// Close Friend Modal
document.getElementById("friend-modal-close").addEventListener("click", () => {
  document.getElementById("friend-modal").classList.remove("active");
});

/**
 * 3. Our Journey — 4 Year Timeline
 */
function renderTimelineSection() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  const timelineHtml = currentData.timeline.map((yearItem, idx) => `
    <div class="timeline-year-item">
      <div class="timeline-node"></div>
      <div class="timeline-card">
        <span class="timeline-year-badge">${yearItem.academicYear} • YEAR ${yearItem.yearNumber}</span>
        <h3>${yearItem.heading}</h3>
        <div class="year-theme">“${yearItem.theme}”</div>
        <p class="year-desc">${yearItem.description}</p>

        <!-- Photo Grid for Year -->
        <div class="timeline-photo-grid">
          ${yearItem.photos.map(p => `
            <div class="timeline-photo-thumb" onclick="openLightboxSingle('${p.url}', '${p.caption || yearItem.heading}')">
              <img src="${p.url}" alt="${p.caption}" onerror="handleImageError(this, '${p.url}')" loading="lazy">
            </div>
          `).join("")}
        </div>

        <!-- Highlight Bullet Memories -->
        <div class="timeline-highlights">
          ${yearItem.memoryCards.map(m => `
            <div class="timeline-highlight-card">
              <span class="highlight-bullet">✦</span>
              <div>
                <strong>${m.title}:</strong>
                <span>${m.desc}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `).join("");

  // Keep the vertical glowing line
  container.innerHTML = `<div class="timeline-line"></div>` + timelineHtml;
}

/**
 * 4. Memory Story Cards ("Memories We Will Never Forget")
 */
function renderStoriesSection() {
  const container = document.getElementById("stories-container");
  if (!container) return;

  container.innerHTML = currentData.storyCards.map(story => `
    <div class="story-card">
      <div class="story-card-image" onclick="openLightboxSingle('${story.photo}', '${story.title}')">
        <img src="${story.photo}" alt="${story.title}" onerror="handleImageError(this, '${story.photo}')" loading="lazy">
      </div>
      <div class="story-card-body">
        <div class="story-meta">
          <span>📅 ${story.date}</span>
          <span>📍 ${story.location}</span>
        </div>
        <h3>${story.title}</h3>
        <div class="story-quote">“${story.quote}”</div>
        <p class="story-text">${story.story}</p>
      </div>
    </div>
  `).join("");
}

/**
 * 5. Memory Gallery & Filters
 */
function renderGallerySection() {
  const filterBox = document.getElementById("gallery-filters");
  const galleryBox = document.getElementById("gallery-container");
  if (!filterBox || !galleryBox) return;

  // Categories
  filterBox.innerHTML = currentData.galleryCategories.map((cat, i) => `
    <button class="filter-btn ${i === 0 ? 'active' : ''}" onclick="filterGallery('${cat}', this)">${cat}</button>
  `).join("");

  renderGalleryItems("ALL");
}

function renderGalleryItems(category) {
  const galleryBox = document.getElementById("gallery-container");
  const filtered = category === "ALL" 
    ? currentData.galleryPhotos 
    : currentData.galleryPhotos.filter(p => p.category === category);

  currentLightboxList = filtered;

  if (filtered.length === 0) {
    galleryBox.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p>No photos in this category yet. Upload your photos to see them here!</p>
      </div>
    `;
    return;
  }

  galleryBox.innerHTML = filtered.map((photo, idx) => `
    <div class="gallery-item" onclick="openLightboxIndex(${idx})">
      <img src="${photo.url}" alt="${photo.title}" onerror="handleImageError(this, '${photo.url}')" loading="lazy">
      <div class="gallery-overlay">
        <span class="gallery-cat-badge">${photo.category}</span>
        <h4 class="gallery-title">${photo.title}</h4>
        <div class="gallery-meta">📅 ${photo.date} • 📍 ${photo.location}</div>
      </div>
    </div>
  `).join("");
}

window.filterGallery = function (category, btn) {
  document.querySelectorAll(".gallery-filters .filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderGalleryItems(category);
};

/**
 * Lightbox Modal Logic
 */
window.openLightboxIndex = function (index) {
  currentLightboxIndex = index;
  const photo = currentLightboxList[index];
  if (!photo) return;

  updateLightboxContent(photo);
  document.getElementById("lightbox-modal").classList.add("active");
};

window.openLightboxSingle = function (url, title) {
  currentLightboxList = [{ url, title, caption: "", date: "", location: "", people: "" }];
  currentLightboxIndex = 0;
  updateLightboxContent(currentLightboxList[0]);
  document.getElementById("lightbox-modal").classList.add("active");
};

function updateLightboxContent(photo) {
  const img = document.getElementById("lightbox-img");
  img.src = photo.url;
  img.onerror = () => handleImageError(img, photo.url);

  document.getElementById("lightbox-title").textContent = photo.title || "College Memory";
  document.getElementById("lightbox-caption").textContent = photo.caption || "";
  document.getElementById("lightbox-date").textContent = photo.date ? `📅 ${photo.date}` : "";
  document.getElementById("lightbox-location").textContent = photo.location ? `📍 ${photo.location}` : "";
  document.getElementById("lightbox-people").textContent = photo.people ? `👥 ${photo.people}` : "";
  
  const dlLink = document.getElementById("lightbox-download-link");
  dlLink.href = photo.url;
}

// Lightbox Controls
document.getElementById("lightbox-close").addEventListener("click", () => {
  document.getElementById("lightbox-modal").classList.remove("active");
});

document.getElementById("lightbox-prev").addEventListener("click", () => {
  if (currentLightboxList.length <= 1) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxList.length) % currentLightboxList.length;
  updateLightboxContent(currentLightboxList[currentLightboxIndex]);
});

document.getElementById("lightbox-next").addEventListener("click", () => {
  if (currentLightboxList.length <= 1) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxList.length;
  updateLightboxContent(currentLightboxList[currentLightboxIndex]);
});

// Keyboard controls for Lightbox
window.addEventListener("keydown", (e) => {
  const modal = document.getElementById("lightbox-modal");
  if (!modal.classList.contains("active")) return;

  if (e.key === "Escape") modal.classList.remove("active");
  if (e.key === "ArrowLeft") document.getElementById("lightbox-prev").click();
  if (e.key === "ArrowRight") document.getElementById("lightbox-next").click();
});

/**
 * 6. Special Moments (Horizontal Scrolling Layout)
 */
function renderSpecialMoments() {
  const track = document.getElementById("moments-track");
  if (!track) return;

  track.innerHTML = currentData.specialMoments.map(m => `
    <div class="moment-card">
      <div class="moment-image" onclick="openLightboxSingle('${m.photo}', '${m.title}')">
        <img src="${m.photo}" alt="${m.title}" onerror="handleImageError(this, '${m.photo}')" loading="lazy">
      </div>
      <div class="moment-content">
        <div class="moment-tag">${m.tag} • ${m.date}</div>
        <h3>${m.title}</h3>
        <div class="moment-quote">“${m.quote}”</div>
        <p class="moment-desc">${m.description}</p>
      </div>
    </div>
  `).join("");
}

/**
 * 7. Inside Jokes & Dialogues
 */
function renderInsideJokes() {
  const filterBox = document.getElementById("jokes-filters");
  const jokesBox = document.getElementById("jokes-container");
  if (!filterBox || !jokesBox) return;

  filterBox.innerHTML = currentData.insideJokesCategories.map((cat, i) => `
    <button class="filter-btn ${i === 0 ? 'active' : ''}" onclick="filterJokes('${cat}', this)">${cat}</button>
  `).join("");

  renderJokesCards("ALL");
}

function renderJokesCards(category) {
  const jokesBox = document.getElementById("jokes-container");
  const filtered = category === "ALL" 
    ? currentData.insideJokes 
    : currentData.insideJokes.filter(j => j.category === category);

  jokesBox.innerHTML = filtered.map(joke => `
    <div class="joke-card">
      <div>
        <span class="joke-category-tag">${joke.category}</span>
        <div class="joke-quote">${joke.quote}</div>
        <p class="joke-context">"${joke.context}"</p>
      </div>
      <div class="joke-footer">
        <span class="joke-author">— ${joke.author}</span>
        <button class="btn-react" onclick="reactToJoke(this, '${joke.id}')">
          <span>😂</span>
          <span class="count">${joke.reactions}</span>
        </button>
      </div>
    </div>
  `).join("");
}

window.filterJokes = function (category, btn) {
  document.querySelectorAll("#jokes-filters .filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderJokesCards(category);
};

window.reactToJoke = function (btn, jokeId) {
  const countSpan = btn.querySelector(".count");
  let val = parseInt(countSpan.textContent, 10) || 0;
  countSpan.textContent = val + 1;
  btn.style.transform = "scale(1.25)";
  setTimeout(() => { btn.style.transform = "scale(1)"; }, 200);
};

/**
 * 8. Campus Map / Memory Locations
 */
function renderCampusMap() {
  const layer = document.getElementById("map-pins-layer");
  if (!layer) return;

  layer.innerHTML = currentData.campusLocations.map(loc => `
    <div class="map-pin" style="top: ${loc.coords.y}%; left: ${loc.coords.x}%;" onclick="openLocationModal('${loc.id}')" title="${loc.name}">
      <div class="pin-pulse"></div>
      <div class="pin-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
      </div>
      <div class="pin-label">${loc.name}</div>
    </div>
  `).join("");
}

window.openLocationModal = function (locId) {
  const loc = currentData.campusLocations.find(l => l.id === locId);
  if (!loc) return;

  const content = document.getElementById("location-modal-content");
  content.innerHTML = `
    <div style="aspect-ratio: 16/9; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 18px;">
      <img src="${loc.photo}" alt="${loc.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="handleImageError(this, '${loc.photo}')">
    </div>
    <span class="section-tag" style="margin-bottom: 8px;">CAMPUS MEMORY</span>
    <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 6px;">${loc.name}</h3>
    <div style="font-size: 0.85rem; color: var(--accent-gold-light); margin-bottom: 14px;">📅 ${loc.date}</div>
    <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 16px;">${loc.memory}</p>
    <div style="font-family: var(--font-handwriting); font-size: 1.3rem; color: var(--text-cream); border-left: 3px solid var(--accent-gold); padding-left: 12px;">
      “${loc.funnyQuote}”
    </div>
  `;

  document.getElementById("location-modal").classList.add("active");
};

document.getElementById("location-modal-close").addEventListener("click", () => {
  document.getElementById("location-modal").classList.remove("active");
});

/**
 * 9. Engineering Life Awards
 */
function renderAwards() {
  const container = document.getElementById("awards-container");
  if (!container) return;

  container.innerHTML = currentData.awards.map(award => `
    <div class="award-card">
      <div class="trophy-badge">${award.trophy}</div>
      <h3>${award.title}</h3>
      <div class="award-winner-avatar">
        <img src="${award.photo}" alt="${award.winner}" onerror="handleImageError(this, '${award.photo}')">
      </div>
      <div class="award-winner-name">${award.winner}</div>
      <p class="award-desc">${award.description}</p>
    </div>
  `).join("");
}

/**
 * 10. Our Soundtrack Turntable Player
 */
function setupSoundtrackPlayer() {
  const trackListContainer = document.getElementById("track-list-container");
  if (!trackListContainer) return;

  const tracks = currentData.soundtrack.tracks;

  trackListContainer.innerHTML = tracks.map((track, i) => `
    <div class="track-item ${i === 0 ? 'active' : ''}" onclick="selectTrack(${i})">
      <span class="track-year-pill">${track.year}</span>
      <div class="track-info">
        <div class="track-title">${track.title}</div>
        <div class="track-artist">${track.artist}</div>
        <div class="track-why">“${track.whyMatters}”</div>
      </div>
    </div>
  `).join("");

  const playPauseBtn = document.getElementById("btn-play-pause");
  const playIcon = document.getElementById("play-icon");
  const pauseIcon = document.getElementById("pause-icon");
  const vinylDisc = document.getElementById("current-vinyl");

  playPauseBtn.addEventListener("click", () => {
    isAudioPlaying = !isAudioPlaying;
    if (isAudioPlaying) {
      playIcon.style.display = "none";
      pauseIcon.style.display = "block";
      vinylDisc.classList.add("playing");
      startWebAudioAmbient();
    } else {
      playIcon.style.display = "block";
      pauseIcon.style.display = "none";
      vinylDisc.classList.remove("playing");
      stopWebAudioAmbient();
    }
  });

  document.getElementById("btn-prev-track").addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    selectTrack(currentTrackIndex);
  });

  document.getElementById("btn-next-track").addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    selectTrack(currentTrackIndex);
  });
}

window.selectTrack = function (index) {
  currentTrackIndex = index;
  const tracks = currentData.soundtrack.tracks;
  const track = tracks[index];
  if (!track) return;

  document.querySelectorAll(".track-item").forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });

  document.getElementById("current-song-title").textContent = track.title;
  document.getElementById("current-song-artist").textContent = track.artist;
  
  const vinylDisc = document.getElementById("current-vinyl");
  if (track.cover) {
    vinylDisc.src = track.cover;
  }
};

/**
 * Web Audio Ambient Melodic Harmonizer (Zero-dependency fallback playback)
 */
function startWebAudioAmbient() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    
    if (!audioContext) {
      audioContext = new AudioContext();
    }
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    if (!ambientOscillator) {
      // Warm chord notes (C-E-G-B cinematic arpeggio)
      ambientOscillator = audioContext.createOscillator();
      ambientGain = audioContext.createGain();

      ambientOscillator.type = "sine";
      ambientOscillator.frequency.setValueAtTime(261.63, audioContext.currentTime); // C4

      // Gentle soothing volume
      ambientGain.gain.setValueAtTime(0.01, audioContext.currentTime);
      ambientGain.gain.exponentialRampToValueAtTime(0.08, audioContext.currentTime + 1.5);

      ambientOscillator.connect(ambientGain);
      ambientGain.connect(audioContext.destination);
      ambientOscillator.start();
    }
  } catch (e) {
    console.log("Web audio ambient notice:", e);
  }
}

function stopWebAudioAmbient() {
  if (ambientGain && audioContext) {
    ambientGain.gain.linearRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
    setTimeout(() => {
      if (ambientOscillator) {
        try { ambientOscillator.stop(); } catch (err) {}
        ambientOscillator.disconnect();
        ambientOscillator = null;
      }
    }, 550);
  }
}

/**
 * 11. Video Memories Section
 */
function renderVideos() {
  const container = document.getElementById("videos-container");
  if (!container) return;

  container.innerHTML = currentData.videos.map(v => `
    <div class="video-card" onclick="openVideoPlayer('${v.videoUrl}', '${v.title}')">
      <div class="video-thumb-container">
        <img src="${v.thumbnail}" alt="${v.title}" onerror="handleImageError(this, '${v.thumbnail}')" loading="lazy">
        <div class="video-play-btn">▶</div>
        <span class="video-duration">${v.duration}</span>
      </div>
      <div class="video-info">
        <span class="video-category">${v.category}</span>
        <h3>${v.title}</h3>
      </div>
    </div>
  `).join("");
}

window.openVideoPlayer = function (videoUrl, title) {
  const container = document.getElementById("video-player-container");
  if (!videoUrl) {
    container.innerHTML = `
      <div style="padding: 40px 20px; text-align: center; color: var(--text-main);">
        <h3 style="font-family: var(--font-serif); margin-bottom: 12px;">${title}</h3>
        <p style="color: var(--text-muted); margin-bottom: 20px;">
          To play your video, specify your MP4 file or YouTube embed link in <code>data.js</code> under <code>videos</code>.
        </p>
        <div style="display: inline-block; padding: 12px 24px; border-radius: var(--radius-md); background: rgba(245, 158, 11, 0.15); border: 1px solid var(--accent-border); color: var(--accent-gold-light);">
          Example: <code>photos/videos/my-clip.mp4</code>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <video controls autoplay style="width: 100%; border-radius: var(--radius-md); max-height: 70vh;">
        <source src="${videoUrl}" type="video/mp4">
        Your browser does not support video playback.
      </video>
    `;
  }

  document.getElementById("video-modal").classList.add("active");
};

document.getElementById("video-modal-close").addEventListener("click", () => {
  const container = document.getElementById("video-player-container");
  container.innerHTML = "";
  document.getElementById("video-modal").classList.remove("active");
});

/**
 * 12. Quote Wall
 */
function renderQuotesWall() {
  const container = document.getElementById("quotes-container");
  if (!container) return;

  container.innerHTML = currentData.quotes.map(q => `
    <div class="quote-wall-card ${q.highlight ? 'highlight' : ''}">
      <div class="quote-icon">“</div>
      <div class="quote-body">${q.text}</div>
      <div class="quote-author-info">
        <strong>${q.author}</strong>
        <span>${q.date}</span>
      </div>
    </div>
  `).join("");
}

/**
 * 13. The Final Chapter & Fullscreen Tribute
 */
function renderFinalChapter() {
  const statsContainer = document.getElementById("final-stats-container");
  if (statsContainer) {
    const s = currentData.finalChapter.stats;
    statsContainer.innerHTML = `
      <div class="stat-box">
        <div class="stat-number">${s.days}</div>
        <div class="stat-label">Days</div>
      </div>
      <div class="stat-box">
        <div class="stat-number">${s.weeks}</div>
        <div class="stat-label">Weeks</div>
      </div>
      <div class="stat-box">
        <div class="stat-number">${s.months}</div>
        <div class="stat-label">Months</div>
      </div>
      <div class="stat-box">
        <div class="stat-number">${s.memories}</div>
        <div class="stat-label">Memories</div>
      </div>
      <div class="stat-box">
        <div class="stat-number">${s.friends}</div>
        <div class="stat-label">Friends Forever</div>
      </div>
    `;
  }

  const h1 = document.getElementById("final-headline-1");
  const h2 = document.getElementById("final-headline-2");
  const storyText = document.getElementById("final-story-text");
  if (h1) h1.textContent = currentData.finalChapter.headline1;
  if (h2) h2.textContent = currentData.finalChapter.headline2;
  if (storyText) storyText.textContent = currentData.finalChapter.narrative;

  // Final fullscreen photo & 4 Names
  const finaleImg = document.getElementById("finale-img");
  if (finaleImg) {
    finaleImg.src = currentData.finalChapter.finalPhoto || currentData.branding.finalGroupPhoto;
  }

  const namesRow = document.getElementById("finale-names-row");
  if (namesRow) {
    namesRow.innerHTML = currentData.friends.map((f, i) => `
      <span>${f.name}</span>
      ${i < currentData.friends.length - 1 ? '<span>•</span>' : ''}
    `).join("");
  }
}

/**
 * 14. Centralized In-Browser Customizer
 */
function setupCustomizerModal() {
  const openBtn = document.getElementById("btn-open-customizer");
  const modal = document.getElementById("customizer-modal");
  const closeBtn = document.getElementById("customizer-close");
  const tabs = document.querySelectorAll(".customizer-tab-btn");
  const tabContent = document.getElementById("customizer-tab-content");
  const saveBtn = document.getElementById("btn-save-customizer");
  const exportBtn = document.getElementById("btn-export-data");
  const resetBtn = document.getElementById("btn-reset-data");

  if (!openBtn || !modal) return;

  openBtn.addEventListener("click", () => {
    modal.classList.add("active");
    renderCustomizerTab("general");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderCustomizerTab(tab.dataset.tab);
    });
  });

  saveBtn.addEventListener("click", () => {
    applyCustomizerInputs();
    localStorage.setItem("custom_memory_data", JSON.stringify(currentData));
    renderAllSections();
    modal.classList.remove("active");
    alert("✅ Changes successfully applied and saved!");
  });

  exportBtn.addEventListener("click", () => {
    applyCustomizerInputs();
    const dataString = "const MEMORY_DATA = " + JSON.stringify(currentData, null, 2) + ";\n\nif (typeof window !== 'undefined') { window.MEMORY_DATA = MEMORY_DATA; }";
    const blob = new Blob([dataString], { type: "application/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.js";
    a.click();
    URL.revokeObjectURL(url);
  });

  resetBtn.addEventListener("click", () => {
    if (confirm("Reset all customizations back to default data.js values?")) {
      localStorage.removeItem("custom_memory_data");
      currentData = JSON.parse(JSON.stringify(window.MEMORY_DATA));
      renderAllSections();
      modal.classList.remove("active");
    }
  });
}

function renderCustomizerTab(tabKey) {
  const container = document.getElementById("customizer-tab-content");
  if (!container) return;

  if (tabKey === "general") {
    const b = currentData.branding;
    container.innerHTML = `
      <div class="customizer-form-group">
        <label>Website Title</label>
        <input type="text" id="cust-siteTitle" class="customizer-input" value="${b.siteTitle}">
      </div>
      <div class="customizer-form-group">
        <label>Subtitle (e.g., 4 YEARS • 4 FRIENDS)</label>
        <input type="text" id="cust-subtitle" class="customizer-input" value="${b.subtitle}">
      </div>
      <div class="customizer-form-group">
        <label>Main Tagline</label>
        <input type="text" id="cust-mainTagline" class="customizer-input" value="${b.mainTagline}">
      </div>
      <div class="customizer-form-group">
        <label>Secondary Tagline (Emotional)</label>
        <input type="text" id="cust-secondaryTagline" class="customizer-input" value="${b.secondaryTagline}">
      </div>
      <div class="customizer-form-group">
        <label>College / Department Name</label>
        <input type="text" id="cust-collegeName" class="customizer-input" value="${b.collegeName}">
      </div>
      <div class="customizer-form-group">
        <label>Batch Years (e.g., 2022 – 2026)</label>
        <input type="text" id="cust-batchYears" class="customizer-input" value="${b.batchYears}">
      </div>
      <div class="customizer-form-group">
        <label>Created By Name</label>
        <input type="text" id="cust-createdBy" class="customizer-input" value="${b.createdBy}">
      </div>
    `;
  } else if (tabKey === "friends") {
    container.innerHTML = currentData.friends.map((f, i) => `
      <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--card-border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
        <h4 style="color: ${f.accentColor}; margin-bottom: 10px;">Friend ${i + 1} (${f.name})</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="customizer-form-group">
            <label>Short Name</label>
            <input type="text" id="cust-friend-${i}-name" class="customizer-input" value="${f.name}">
          </div>
          <div class="customizer-form-group">
            <label>Nickname</label>
            <input type="text" id="cust-friend-${i}-nickname" class="customizer-input" value="${f.nickname}">
          </div>
        </div>
        <div class="customizer-form-group">
          <label>Role / Funny Title (e.g., The Engineer)</label>
          <input type="text" id="cust-friend-${i}-roleTitle" class="customizer-input" value="${f.roleTitle}">
        </div>
        <div class="customizer-form-group">
          <label>Personal Quote</label>
          <input type="text" id="cust-friend-${i}-quote" class="customizer-input" value="${f.personalQuote}">
        </div>
      </div>
    `).join("");
  } else if (tabKey === "timeline") {
    container.innerHTML = currentData.timeline.map((y, i) => `
      <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--card-border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
        <h4 style="color: var(--accent-gold-light); margin-bottom: 10px;">Year ${i + 1}</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="customizer-form-group">
            <label>Heading</label>
            <input type="text" id="cust-year-${i}-heading" class="customizer-input" value="${y.heading}">
          </div>
          <div class="customizer-form-group">
            <label>Academic Year</label>
            <input type="text" id="cust-year-${i}-acad" class="customizer-input" value="${y.academicYear}">
          </div>
        </div>
        <div class="customizer-form-group">
          <label>Description</label>
          <textarea id="cust-year-${i}-desc" class="customizer-input" rows="2">${y.description}</textarea>
        </div>
      </div>
    `).join("");
  } else if (tabKey === "quotes") {
    const s = currentData.finalChapter.stats;
    container.innerHTML = `
      <h4 style="color: var(--accent-gold-light); margin-bottom: 10px;">Final Chapter Stats</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
        <div class="customizer-form-group">
          <label>Days</label>
          <input type="text" id="cust-stat-days" class="customizer-input" value="${s.days}">
        </div>
        <div class="customizer-form-group">
          <label>Weeks</label>
          <input type="text" id="cust-stat-weeks" class="customizer-input" value="${s.weeks}">
        </div>
        <div class="customizer-form-group">
          <label>Months</label>
          <input type="text" id="cust-stat-months" class="customizer-input" value="${s.months}">
        </div>
      </div>
      <div class="customizer-form-group">
        <label>Final Headline 1</label>
        <input type="text" id="cust-final-h1" class="customizer-input" value="${currentData.finalChapter.headline1}">
      </div>
      <div class="customizer-form-group">
        <label>Final Headline 2</label>
        <input type="text" id="cust-final-h2" class="customizer-input" value="${currentData.finalChapter.headline2}">
      </div>
      <div class="customizer-form-group">
        <label>Final Story Text</label>
        <textarea id="cust-final-narrative" class="customizer-input" rows="3">${currentData.finalChapter.narrative}</textarea>
      </div>
    `;
  }
}

function applyCustomizerInputs() {
  const getVal = id => {
    const el = document.getElementById(id);
    return el ? el.value : null;
  };

  if (document.getElementById("cust-siteTitle")) {
    currentData.branding.siteTitle = getVal("cust-siteTitle");
    currentData.branding.subtitle = getVal("cust-subtitle");
    currentData.branding.mainTagline = getVal("cust-mainTagline");
    currentData.branding.secondaryTagline = getVal("cust-secondaryTagline");
    currentData.branding.collegeName = getVal("cust-collegeName");
    currentData.branding.batchYears = getVal("cust-batchYears");
    currentData.branding.createdBy = getVal("cust-createdBy");
  }

  currentData.friends.forEach((f, i) => {
    if (document.getElementById(`cust-friend-${i}-name`)) {
      f.name = getVal(`cust-friend-${i}-name`);
      f.nickname = getVal(`cust-friend-${i}-nickname`);
      f.roleTitle = getVal(`cust-friend-${i}-roleTitle`);
      f.personalQuote = getVal(`cust-friend-${i}-quote`);
    }
  });

  currentData.timeline.forEach((y, i) => {
    if (document.getElementById(`cust-year-${i}-heading`)) {
      y.heading = getVal(`cust-year-${i}-heading`);
      y.academicYear = getVal(`cust-year-${i}-acad`);
      y.description = getVal(`cust-year-${i}-desc`);
    }
  });

  if (document.getElementById("cust-stat-days")) {
    currentData.finalChapter.stats.days = getVal("cust-stat-days");
    currentData.finalChapter.stats.weeks = getVal("cust-stat-weeks");
    currentData.finalChapter.stats.months = getVal("cust-stat-months");
    currentData.finalChapter.headline1 = getVal("cust-final-h1");
    currentData.finalChapter.headline2 = getVal("cust-final-h2");
    currentData.finalChapter.narrative = getVal("cust-final-narrative");
  }
}

/**
 * Scroll Animations (IntersectionObserver)
 */
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".friend-card, .timeline-card, .story-card, .gallery-item, .moment-card, .award-card, .quote-wall-card").forEach(el => {
    observer.observe(el);
  });
}
