# 🎓 OUR ENGINEERING STORY — 4 YEARS • 4 FRIENDS • COUNTLESS MEMORIES

> *"From strangers in the first year to family by the final year."* ❤️

A premium, cinematic personal memory website documenting the complete 4-year engineering journey of four best friends. Designed as a fusion of a documentary, digital scrapbook, interactive timeline, and college photo album.

---

## 📸 Photo Folder Architecture

The website is configured to use **YOUR REAL PERSONAL PHOTOS**. No AI or stock images are used for memories.

```
photos/
├── hero.jpg             # Main homepage hero background photo
├── final.jpg            # Final Chapter & graduation tribute photo
├── friend1/             # Friend 1 photos
│   └── profile.jpg      # Profile avatar for Friend 1
├── friend2/             # Friend 2 photos
│   └── profile.jpg      # Profile avatar for Friend 2
├── friend3/             # Friend 3 photos
│   └── profile.jpg      # Profile avatar for Friend 3
├── friend4/             # Friend 4 photos
│   └── profile.jpg      # Profile avatar for Friend 4
├── year1/               # Photos for 1st Year timeline & memories
├── year2/               # Photos for 2nd Year timeline & memories
├── year3/               # Photos for 3rd Year timeline & memories
└── year4/               # Photos for Final Year timeline & memories
```

> **Note on Placeholders:**
> If any photo has not been added yet, the website displays an elegant **"PHOTO COMING SOON"** placeholder with instructions on where to add the photo.

---

## 🚀 How to Run the Website

### Option 1: 1-Click Windows Launcher (Recommended)
Simply double-click **`run.bat`** in the project folder. It launches a local development server and opens your default browser at `http://localhost:8080`.

### Option 2: Using Python in Terminal
```bash
python server.py
```
Then visit `http://localhost:8080` in your web browser.

### Option 3: Direct File Opening
You can double-click **`index.html`** to open it directly in Chrome, Edge, Firefox, or Safari!

---

## ✏️ How to Customize Your Content

You have two convenient ways to customize the website:

### 1. In-Browser Live Customizer (Instant)
1. Click the **`EDIT`** button in the top navigation bar.
2. An interactive customization modal will open with tabs:
   - **General & Names**: Change website title, subtitles, taglines, college name, batch years, and author.
   - **The 4 Friends**: Change names, nicknames, funny role titles, and personal quotes.
   - **Years & Timeline**: Customize headings, academic years, and descriptions.
   - **Quotes & Final**: Adjust the 1,460 days / 208 weeks / 48 months counter and final words.
3. Click **"Save & Apply Changes"** to see your updates live on the page!
4. Click **"Download data.js"** to save your updated configuration file.

### 2. Direct File Editing via `data.js`
Open **`data.js`** in VS Code or Notepad. All content is organized with clear comments and editable fields:

```javascript
// Example in data.js:
friends: [
  {
    id: "friend1",
    name: "Akash",
    fullName: "Akash Sharma",
    nickname: "The Architect",
    roleTitle: "The Engineer",
    profilePhoto: "photos/friend1/profile.jpg",
    personalQuote: "Engineering taught us calculus, but friendship taught us life.",
    ...
  }
]
```

---

## 🔍 Smart Photo Scanner (`scan_photos.py`)

Whenever you drop new photos or videos into the `photos/` folders, you can run:

```bash
python scan_photos.py
```

This utility automatically inspects your media directories, verifies file paths, and reports on all detected images!

---

## 🌟 Included Website Features

1. **Cinematic Hero**: Fullscreen background with real hero photo, glowing CTA, 4 friend avatars, floating handwritten notes, and scroll indicator.
2. **The Four Of Us**: 4 interactive character cards with custom color rings; clicking opens detailed personal profile modals with quotes, funniest habits, and personal photo albums.
3. **4-Year Timeline**: Vertical chronological timeline for 2022–2026 with academic years, photo grids, and milestone cards.
4. **Memory Story Cards**: Beautiful narrative cards highlighting defining college moments.
5. **Memory Gallery**: Masonry layout with category filter tabs (CLASSROOM, CANTEEN, TRIPS, PROJECTS, FESTIVALS, FAREWELL, etc.) and full-screen lightbox with keyboard arrow controls and original image download.
6. **Special Moments**: Cinematic horizontal scrolling timeline.
7. **Things Only We Understand 😂**: Inside joke cards with funny categories and interactive "😂" reaction counters.
8. **College Map**: Illustrated campus map with pulsing location pins (Classroom, Canteen, Library, Labs, Ground, Hostel, etc.) that pop open memory stories when clicked.
9. **Engineering Life Awards 🏆**: 8 funny awards with trophy badges, winner avatars, and humorous descriptions.
10. **Soundtrack Turntable**: Vinyl record player with animated spinning disc, visual equalizer wave bars, and 4-year tracklist.
11. **Video Memories 🎥**: Video cards with thumbnails, duration badges, and popup video modal player.
12. **Quote Wall**: Handwritten cards with famous batch quotes.
13. **The Final Chapter**: 1,460 Days / 208 Weeks / 48 Months stats counter, emotional narrative, and "Replay Our Story ❤️" smooth scroll button.
14. **Final Tribute**: Fullscreen farewell section with names and golden sunset atmosphere.
15. **Theme Switcher**: Seamless switch between Dark Cinematic mode and Warm Nostalgic mode.
16. **100% Mobile Responsive**: Hamburger drawer menu, touch gestures, and optimized layout across phones, tablets, and desktops.
