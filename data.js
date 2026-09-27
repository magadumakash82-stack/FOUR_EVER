/**
 * ====================================================================
 * OUR ENGINEERING STORY — CENTRALIZED CONTENT & DATA CONFIGURATION
 * ====================================================================
 * 
 * Edit this file to customize all names, photos, quotes, memories,
 * videos, songs, campus locations, and awards for your website!
 * 
 * PHOTO FOLDER STRUCTURE:
 * photos/
 *   ├── hero.jpg             (Main homepage hero background)
 *   ├── final.jpg            (Final Chapter celebration photo)
 *   ├── friend1/profile.jpg  (Friend 1 avatar & photos)
 *   ├── friend2/profile.jpg  (Friend 2 avatar & photos)
 *   ├── friend3/profile.jpg  (Friend 3 avatar & photos)
 *   ├── friend4/profile.jpg  (Friend 4 avatar & photos)
 *   ├── year1/               (Photos for Year 1)
 *   ├── year2/               (Photos for Year 2)
 *   ├── year3/               (Photos for Year 3)
 *   └── year4/               (Photos for Year 4)
 * 
 * Note: If a photo is not added yet, the website will cleanly show
 * "PHOTO COMING SOON" placeholder automatically.
 */

const MEMORY_DATA = {
  // ------------------------------------------------------------------
  // 1. BRANDING & SITE TITLE
  // ------------------------------------------------------------------
  branding: {
    siteTitle: "OUR ENGINEERING STORY",
    subtitle: "4 YEARS • 4 FRIENDS",
    mainTagline: "4 Years. 4 Friends. Countless Memories.",
    secondaryTagline: "From strangers in the first year to family by the final year. ❤️",
    collegeName: "Department of Engineering",
    batchYears: "2022 – 2026",
    heroGroupPhoto: "photos/hero.jpg",
    finalGroupPhoto: "photos/final.jpg",
    createdBy: "Akash & Friends",
    socialLinks: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      whatsapp: "https://whatsapp.com",
      email: "mailto:ourstory@example.com"
    }
  },

  // ------------------------------------------------------------------
  // 2. THE FOUR OF US (FRIEND PROFILES)
  // ------------------------------------------------------------------
  friends: [
    {
      id: "friend1",
      name: "Akash",
      fullName: "Akash Sharma",
      nickname: "The Architect",
      roleTitle: "The Engineer",
      profilePhoto: "photos/friend1/profile.jpg",
      accentColor: "#38bdf8", // Sky blue ring
      badge: "The Problem Solver",
      bio: "The one who actually wrote the code while everyone else argued about canteen snacks.",
      bestQuality: "Never gives up on a bug or a friend.",
      funniestHabit: "Starts coding 2 hours before the 11:59 PM deadline with zero panic.",
      famousDialogue: '"Bro, trust me, it works on my machine."',
      favoriteMemory: "Late-night hackathon where we drank 7 cups of chai and submitted at 11:58 PM.",
      personalQuote: "Engineering taught us calculus, but friendship taught us life.",
      photos: [
        "photos/friend1/1.jpg",
        "photos/friend1/2.jpg",
        "photos/friend1/3.jpg"
      ],
      videos: []
    },
    {
      id: "friend2",
      name: "Friend 2",
      fullName: "[Friend 2 Full Name]",
      nickname: "The Sleeper",
      roleTitle: "The Professional Sleeper",
      profilePhoto: "photos/friend2/profile.jpg",
      accentColor: "#f59e0b", // Warm gold ring
      badge: "Sleeping Champion",
      bio: "Can sleep through any lecture, fire alarm, or surprise test with impressive dedication.",
      bestQuality: "Brings calm vibes even during semester exam panics.",
      funniestHabit: "Wakes up right when the professor says 'attendance'.",
      famousDialogue: '"Just 5 more minutes bro, call me when lab starts."',
      favoriteMemory: "Waking up in the middle of a 3-hour marathon lecture and answering a question correctly by pure luck.",
      personalQuote: "Sleep is temporary, but backlog is forever... wait, reverse that.",
      photos: [
        "photos/friend2/1.jpg",
        "photos/friend2/2.jpg"
      ],
      videos: []
    },
    {
      id: "friend3",
      name: "Friend 3",
      fullName: "[Friend 3 Full Name]",
      nickname: "Canteen King",
      roleTitle: "The Canteen CEO",
      profilePhoto: "photos/friend3/profile.jpg",
      accentColor: "#10b981", // Emerald green ring
      badge: "Food Minister",
      bio: "Knows the exact inventory of the canteen and always convinced us to skip class for chai.",
      bestQuality: "Will share the last bite of samosa (most of the time).",
      funniestHabit: "Always broke until someone mentions eating out.",
      famousDialogue: '"Let\'s go to the canteen, we have a free 10-minute break (which turns into 2 hours)."',
      favoriteMemory: "The monsoon evening chai sessions where we discussed startups we never built.",
      personalQuote: "Great engineering ideas start at the canteen table, not the blackboard.",
      photos: [
        "photos/friend3/1.jpg",
        "photos/friend3/2.jpg"
      ],
      videos: []
    },
    {
      id: "friend4",
      name: "Friend 4",
      fullName: "[Friend 4 Full Name]",
      nickname: "The Wildcard",
      roleTitle: "The Trouble Maker",
      profilePhoto: "photos/friend4/profile.jpg",
      accentColor: "#f43f5e", // Rose pink ring
      badge: "Bounty Hunter",
      bio: "The one who instigated all the crazy trips, proxy attendance scams, and prank wars.",
      bestQuality: "Unstoppable energy and loyalty to the squad.",
      funniestHabit: "Starts unnecessary debates with professors just to burn class time.",
      famousDialogue: '"Don\'t worry bro, I gave your proxy attendance!"',
      favoriteMemory: "Convincing the entire group to take an unplanned 4 AM road trip after exam day.",
      personalQuote: "We didn't come to college to be normal. We came to make history.",
      photos: [
        "photos/friend4/1.jpg",
        "photos/friend4/2.jpg"
      ],
      videos: []
    }
  ],

  // ------------------------------------------------------------------
  // 3. HERO SECTION ACCENTS & QUOTES
  // ------------------------------------------------------------------
  hero: {
    floatingQuotes: [
      { text: "Same College", style: "top-left" },
      { text: "Different Dreams", style: "top-right" },
      { text: "Better Together", style: "mid-left" },
      { text: "Same Journey ♡", style: "mid-right" },
      { text: "Engineering Life ♡", style: "bottom-left" }
    ],
    heroFooterNote: "Not just college... it was life."
  },

  // ------------------------------------------------------------------
  // 4. OUR JOURNEY — 4 YEAR TIMELINE
  // ------------------------------------------------------------------
  timeline: [
    {
      yearNumber: "01",
      academicYear: "2022 – 2023",
      title: "YEAR 1 — THE BEGINNING",
      heading: "The Beginning",
      theme: "From Strangers to Companions",
      description: "This is where our story started. Nervous faces in orientation, oversized college bags, sitting on separate benches, and that first awkward conversation that sparked four years of brotherhood.",
      folderPath: "photos/year1/",
      photos: [
        { url: "photos/year1/1.jpg", caption: "Day 1: Orientation & Nervous Smiles" },
        { url: "photos/year1/2.jpg", caption: "First Classroom Lecture — Day 1 Backbenchers" },
        { url: "photos/year1/3.jpg", caption: "Our very first group photo together" }
      ],
      video: null,
      memoryCards: [
        { title: "First Meeting", desc: "Awkward introductions during engineering physics lab." },
        { title: "First Classroom", desc: "Room 304, where we claimed the back row as our territory." },
        { title: "First College Event", desc: "Freshers' party dancing like nobody was watching." },
        { title: "First Trip", desc: "The unplanned weekend getaway on two rented scooters." },
        { title: "First Crazy Moment", desc: "Getting locked in the campus library after closing hours." }
      ]
    },
    {
      yearNumber: "02",
      academicYear: "2023 – 2024",
      title: "YEAR 2 — BECOMING A TEAM",
      heading: "Becoming a Team",
      theme: "Chai, Backlogs & Late Nights",
      description: "The year we realized engineering isn't just about formulas; it's about survival. Shared assignments, group study sessions that became comedy shows, and bonding over hostel Maggi at 3 AM.",
      folderPath: "photos/year2/",
      photos: [
        { url: "photos/year2/1.jpg", caption: "Canteen table after a tough semester test" },
        { url: "photos/year2/2.jpg", caption: "Hostel room study marathon at 2 AM" },
        { url: "photos/year2/3.jpg", caption: "College cultural fest squad" }
      ],
      video: null,
      memoryCards: [
        { title: "The Samosa Pact", desc: "Agreement that whoever passes with highest marks treats everyone." },
        { title: "First Hackathon", desc: "36 hours of energy drinks, messy hair, and zero working code." },
        { title: "Proxy Masterclass", desc: "Perfecting the art of answering roll calls for each other." },
        { title: "Monsoon Chills", desc: "Getting drenched on the way back from campus and catching colds together." }
      ]
    },
    {
      yearNumber: "03",
      academicYear: "2024 – 2025",
      title: "YEAR 3 — THE GOLDEN ERA",
      heading: "The Golden Era",
      theme: "Unstoppable Energy & Big Dreams",
      description: "Our peak college year. We ruled the campus events, organized tech fests, planned road trips across state borders, and realized that our college clock was ticking faster than we wanted.",
      folderPath: "photos/year3/",
      photos: [
        { url: "photos/year3/1.jpg", caption: "The Epic Hill Station Road Trip" },
        { url: "photos/year3/2.jpg", caption: "Tech Fest Stage Organizers" },
        { url: "photos/year3/3.jpg", caption: "Sunset on the hostel terrace" }
      ],
      video: null,
      memoryCards: [
        { title: "The Mountain Road Trip", desc: "Four guys, one beat-up car, loud music, and pure freedom." },
        { title: "Organizing the Fest", desc: "Running backstage radios and feeling like VIPs for three days." },
        { title: "Late Night Talks", desc: "Sitting on the terrace talking about careers, love, and life after college." },
        { title: "The Project Breakthrough", desc: "When our robot actually moved forward instead of smoking." }
      ]
    },
    {
      yearNumber: "04",
      academicYear: "2025 – 2026",
      title: "YEAR 4 — THE FINAL CHAPTER",
      heading: "The Final Chapter",
      theme: "Goodbyes, Placements & Forever Bond",
      description: "The bittersweet finale. Interview suits, final year project reviews, count down to the last exam, writing messages on shirts, and realizing that these 4 years were the best time of our lives.",
      folderPath: "photos/year4/",
      photos: [
        { url: "photos/year4/1.jpg", caption: "Placement celebration dinner" },
        { url: "photos/year4/2.jpg", caption: "Final Project submission day" },
        { url: "photos/year4/3.jpg", caption: "Farewell Day: Black suits & wet eyes" }
      ],
      video: null,
      memoryCards: [
        { title: "First Placement Offer", desc: "Tears and hugs when the first one among us got placed." },
        { title: "Final Major Project Review", desc: "Presenting the project with 10 minutes of sleep and a straight face." },
        { title: "Signing T-shirts", desc: "Farewell night writing inside jokes on each other's white shirts." },
        { title: "The Last Walk", desc: "Walking down the main college boulevard for the very last time." }
      ]
    }
  ],

  // ------------------------------------------------------------------
  // 5. MEMORY STORY CARDS (HIGHLIGHT MOMENTS)
  // ------------------------------------------------------------------
  storyCards: [
    {
      id: "story-1",
      title: "Our First College Day",
      date: "August 12, 2022",
      location: "Academic Main Building",
      photo: "photos/year1/1.jpg",
      quote: "We were all terrified, pretending we knew where Room 101 was.",
      story: "We sat in different corners of the classroom on the first morning. By lunch, we were already sharing one plate of canteen fried rice. Who knew that random table choice would define the next four years?"
    },
    {
      id: "story-2",
      title: "That One Canteen Evening",
      date: "November 4, 2023",
      location: "Campus Canteen",
      photo: "photos/year2/1.jpg",
      quote: "The tea was cold, but the laughter was warmer than anything.",
      story: "It started as a quick 5-minute break between lectures. Three hours later, our notebooks were untouched, the rain was pouring outside, and we had invented ten impossible business ideas."
    },
    {
      id: "story-3",
      title: "The Midnight Project Night",
      date: "April 19, 2024",
      location: "Hostel Room B-204",
      photo: "photos/year3/2.jpg",
      quote: "Code error at 3 AM: 'Why is it doing that?' 'Because God wills it.'",
      story: "Six empty coffee mugs, circuits all over the floor, and a project deadline at 9 AM. At 4:15 AM, the circuit finally worked and we cheered so loud the hostel warden knocked on our door with a flashlight."
    },
    {
      id: "story-4",
      title: "The Unplanned Road Trip",
      date: "January 14, 2025",
      location: "Western Ghats Mountain Pass",
      photo: "photos/year3/1.jpg",
      quote: "No plans. Just a full tank of fuel and our playlist.",
      story: "Right after submitting semester finals, one of us said 'pack a bag for two days'. We drove into the misty hills, watched the sunrise above the clouds, and sang at the top of our lungs."
    },
    {
      id: "story-5",
      title: "The Farewell Evening",
      date: "May 22, 2026",
      location: "College Amphitheatre",
      photo: "photos/year4/3.jpg",
      quote: "It's not a goodbye, it's a see you soon.",
      story: "Standing in our farewell suits, watching the montage video of our batch. Tough guys pretending there was dust in their eyes. We walked out through the college gate as engineers, but forever brothers."
    }
  ],

  // ------------------------------------------------------------------
  // 6. MEMORY PHOTO GALLERY
  // ------------------------------------------------------------------
  galleryCategories: [
    "ALL",
    "CLASSROOM",
    "COLLEGE",
    "CANTEEN",
    "EVENTS",
    "TRIPS",
    "PROJECTS",
    "FESTIVALS",
    "FUNNY MOMENTS",
    "FAREWELL",
    "RANDOM MEMORIES"
  ],

  galleryPhotos: [
    {
      id: "g1",
      url: "photos/year1/1.jpg",
      title: "Day One in College",
      category: "CLASSROOM",
      date: "Aug 2022",
      location: "Main Block",
      people: "Akash, Squad",
      caption: "The start of an unforgettable chapter."
    },
    {
      id: "g2",
      url: "photos/year1/2.jpg",
      title: "Backbencher Kingdom",
      category: "CLASSROOM",
      date: "Oct 2022",
      location: "Lecture Hall 2",
      people: "All 4 Friends",
      caption: "Where all the best gossip and paper airplanes happened."
    },
    {
      id: "g3",
      url: "photos/year2/1.jpg",
      title: "Canteen Chai Table",
      category: "CANTEEN",
      date: "Feb 2023",
      location: "College Canteen",
      people: "The 4 of Us",
      caption: "More time spent here than in all labs combined."
    },
    {
      id: "g4",
      url: "photos/year2/2.jpg",
      title: "Tech Fest Hackathon",
      category: "PROJECTS",
      date: "Apr 2023",
      location: "Computer Lab 4",
      people: "Akash & Team",
      caption: "Survived on instant ramen and caffeine."
    },
    {
      id: "g5",
      url: "photos/year3/1.jpg",
      title: "Sunrise Road Trip",
      category: "TRIPS",
      date: "Jan 2024",
      location: "Hill Station Viewpoint",
      people: "The 4 Friends",
      caption: "Wind in our hair, 2000s music on the stereo."
    },
    {
      id: "g6",
      url: "photos/year3/2.jpg",
      title: "College Fest Night",
      category: "FESTIVALS",
      date: "Mar 2024",
      location: "Campus Grounds",
      people: "All of Us",
      caption: "Concert lights, confetti, and our favorite songs."
    },
    {
      id: "g7",
      url: "photos/year4/1.jpg",
      title: "Placement Celebration",
      category: "EVENTS",
      date: "Nov 2025",
      location: "City Diner",
      people: "The Gang",
      caption: "The relief of securing that first offer letter!"
    },
    {
      id: "g8",
      url: "photos/year4/2.jpg",
      title: "Final Review Survival",
      category: "PROJECTS",
      date: "Apr 2026",
      location: "Dept Seminar Hall",
      people: "Akash & Squad",
      caption: "External viva passed! The weight off our shoulders."
    },
    {
      id: "g9",
      url: "photos/year4/3.jpg",
      title: "Farewell T-Shirt Signing",
      category: "FAREWELL",
      date: "May 2026",
      location: "College Lawn",
      people: "The 4 Friends",
      caption: "White shirts covered in memories and signatures."
    }
  ],

  // ------------------------------------------------------------------
  // 7. INSIDE JOKES & DIALOGUES ("THINGS ONLY WE UNDERSTAND 😂")
  // ------------------------------------------------------------------
  insideJokesCategories: ["ALL", "FUNNY", "DIALOGUES", "INSIDE JOKES", "LEGENDARY MOMENTS", "EXCUSES", "FRIENDSHIP"],
  insideJokes: [
    {
      id: "joke-1",
      category: "DIALOGUES",
      quote: "“Bro, assignment ready? Bas naam change karke bhej dena.”",
      context: "Every single Sunday midnight before Monday 9 AM class.",
      author: "Every Engineering Student",
      reactions: 42
    },
    {
      id: "joke-2",
      category: "EXCUSES",
      quote: "“Tomorrow we will definitely start studying from 6:00 AM sharp.”",
      context: "Said at 2:30 AM while opening another YouTube documentary.",
      author: "The Entire Group",
      reactions: 58
    },
    {
      id: "joke-3",
      category: "INSIDE JOKES",
      quote: "“Just 5 minutes in the canteen, one cutting chai only.”",
      context: "Proceeds to order samosa, maggi, cold coffee, and skip two lectures.",
      author: "Friend 3",
      reactions: 67
    },
    {
      id: "joke-4",
      category: "LEGENDARY MOMENTS",
      quote: "“Proxy laga di bhai, chill kar!”",
      context: "Followed by the professor calling the exact roll number for a spot question.",
      author: "Friend 4",
      reactions: 51
    },
    {
      id: "joke-5",
      category: "FUNNY",
      quote: "“What is the circuit doing?” — “Heating up nicely, sir.”",
      context: "Basic Electrical Engineering Lab, 2nd Semester.",
      author: "Akash",
      reactions: 39
    },
    {
      id: "joke-6",
      category: "FRIENDSHIP",
      quote: "“If we fail, we fail together. If we pass, party is on whoever got the highest.”",
      context: "The unwritten rule of the backbenches.",
      author: "The Squad",
      reactions: 84
    }
  ],

  // ------------------------------------------------------------------
  // 8. OUR SOUNDTRACK (THE SONGS OF OUR 4 YEARS)
  // ------------------------------------------------------------------
  soundtrack: {
    title: "THE SOUNDTRACK OF OUR ENGINEERING LIFE 🎵",
    subtitle: "The songs that played in our earphones, car stereos, and hostel speakers",
    tracks: [
      {
        id: "track-1",
        year: "YEAR 1",
        title: "Iktara / Give Me Some Sunshine",
        artist: "Amit Trivedi / Swanand Kirkire",
        whyMatters: "The anthem of every new engineering student trying to find their footing in college.",
        cover: "assets/images/music-cover-1.svg",
        audioSrc: "", // Optional local audio URL e.g. "assets/audio/year1.mp3"
        spotifyId: ""
      },
      {
        id: "track-2",
        year: "YEAR 2",
        title: "Ilahi",
        artist: "Arijit Singh",
        whyMatters: "Played on loop during all our spontaneous late evening bike rides and canteen hangouts.",
        cover: "assets/images/music-cover-2.svg",
        audioSrc: "",
        spotifyId: ""
      },
      {
        id: "track-3",
        year: "YEAR 3",
        title: "Dil Chahta Hai",
        artist: "Shankar-Ehsaan-Loy",
        whyMatters: "Blasted at maximum volume during our legendary hill station road trip.",
        cover: "assets/images/music-cover-3.svg",
        audioSrc: "",
        spotifyId: ""
      },
      {
        id: "track-4",
        year: "YEAR 4",
        title: "Yaaron",
        artist: "KK",
        whyMatters: "The tear-jerker farewell song. Not a single dry eye when this played on the final night.",
        cover: "assets/images/music-cover-4.svg",
        audioSrc: "",
        spotifyId: ""
      }
    ]
  },

  // ------------------------------------------------------------------
  // 9. COLLEGE MAP / MEMORY LOCATIONS ("PLACES THAT BECAME MEMORIES")
  // ------------------------------------------------------------------
  campusLocations: [
    {
      id: "loc-classroom",
      name: "The Lecture Hall (Room 304)",
      coords: { x: 44, y: 32 }, // Percentage position on map
      photo: "photos/year1/2.jpg",
      date: "2022 – 2026",
      memory: "The legendary last two rows where sleep, memes, and unexpected revelations occurred.",
      funnyQuote: "We learned more life skills in this room than actual engineering."
    },
    {
      id: "loc-canteen",
      name: "Student Canteen",
      coords: { x: 64, y: 55 },
      photo: "photos/year2/1.jpg",
      date: "Every Day, 11:15 AM",
      memory: "Our official headquarters. The place where exam strategies were plotted over hot chai.",
      funnyQuote: "If we paid tuition for the canteen, we'd have graduated with honors."
    },
    {
      id: "loc-library",
      name: "Central Library",
      coords: { x: 62, y: 22 },
      photo: "photos/year2/2.jpg",
      date: "Exam Week Only",
      memory: "Visited only 3 days before semester exams. Free AC, quiet naps, and panic revision.",
      funnyQuote: "The only place where silence was louder than our exam anxiety."
    },
    {
      id: "loc-lab",
      name: "Engineering Workshop & Labs",
      coords: { x: 80, y: 38 },
      photo: "photos/year1/3.jpg",
      date: "Every Wednesday",
      memory: "Where components released magical white smoke and multimeters were tapped for hope.",
      funnyQuote: "Output error: expected 5V, got flames."
    },
    {
      id: "loc-ground",
      name: "Sports Ground & Track",
      coords: { x: 80, y: 76 },
      photo: "photos/year3/2.jpg",
      date: "Evenings after 5 PM",
      memory: "Sunset cricket matches, college sports day rallies, and sitting on the bleachers talking for hours.",
      funnyQuote: "Ran 100 meters, required 3 days of medical recovery."
    },
    {
      id: "loc-auditorium",
      name: "Main Auditorium",
      coords: { x: 45, y: 74 },
      photo: "photos/year3/2.jpg",
      date: "Festivals & Convocation",
      memory: "Cultural fests, battle of the bands, cheering from the balcony, and our final graduation ceremony.",
      funnyQuote: "Entered as freshers, walked out with degrees and thousands of stories."
    },
    {
      id: "loc-hostel",
      name: "Hostel Blocks (A & B)",
      coords: { x: 18, y: 48 },
      photo: "photos/year2/2.jpg",
      date: "24/7 Home",
      memory: "Midnight birthday birthday bumps, shared Wi-Fi, 3 AM Maggi cooking on an electric kettle.",
      funnyQuote: "Four guys, one water bottle, infinite memories."
    },
    {
      id: "loc-garden",
      name: "Campus Garden & Fountain",
      coords: { x: 28, y: 72 },
      photo: "photos/year1/1.jpg",
      date: "Spring Evenings",
      memory: "Strolling between lectures, sitting under the banyan tree, and clicking sunset pictures.",
      funnyQuote: "The best photography spot on campus."
    }
  ],

  // ------------------------------------------------------------------
  // 10. ENGINEERING LIFE AWARDS 😂
  // ------------------------------------------------------------------
  awards: [
    {
      id: "award-1",
      trophy: "🏆",
      title: "Most Late to Class",
      winner: "Friend 2",
      photo: "photos/friend2/profile.jpg",
      description: "Entered lecture at 9:48 AM for a 9:00 AM class holding hot tea with absolute confidence."
    },
    {
      id: "award-2",
      trophy: "🏆",
      title: "Canteen CEO",
      winner: "Friend 3",
      photo: "photos/friend3/profile.jpg",
      description: "Spent more cumulative hours on canteen chairs than in the registered classroom."
    },
    {
      id: "award-3",
      trophy: "🏆",
      title: "Assignment Deadline Champion",
      winner: "Akash",
      photo: "photos/friend1/profile.jpg",
      description: "Submitted the 60-page major report at 11:59:45 PM without breaking a sweat."
    },
    {
      id: "award-4",
      trophy: "🏆",
      title: "Professional Backbencher",
      winner: "Friend 4",
      photo: "photos/friend4/profile.jpg",
      description: "Undefeated champion of desk doodling, stealth phone usage, and master proxy calls."
    },
    {
      id: "award-5",
      trophy: "🏆",
      title: "Best Excuse Creator",
      winner: "Friend 4",
      photo: "photos/friend4/profile.jpg",
      description: "Invented medical conditions unknown to modern science just to skip 8 AM lectures."
    },
    {
      id: "award-6",
      trophy: "🏆",
      title: "Sleep During Lecture Award",
      winner: "Friend 2",
      photo: "photos/friend2/profile.jpg",
      description: "Fell asleep with eyes wide open behind his spectacles. Even the professor was impressed."
    },
    {
      id: "award-7",
      trophy: "🏆",
      title: "Group Chat Ghost",
      winner: "Friend 3",
      photo: "photos/friend3/profile.jpg",
      description: "Never replies to 500 messages, but instantly arrives within 2 minutes when food is mentioned."
    },
    {
      id: "award-8",
      trophy: "🏆",
      title: "Project Night Survivor",
      winner: "Akash",
      photo: "photos/friend1/profile.jpg",
      description: "Survived 48 continuous hours of debugging with zero sleep and purely powered by chai."
    }
  ],

  // ------------------------------------------------------------------
  // 11. SPECIAL MOMENTS (HORIZONTAL SCROLLING SHOWCASE)
  // ------------------------------------------------------------------
  specialMoments: [
    {
      title: "THE FIRST DAY",
      tag: "FIRST DAY",
      date: "August 2022",
      photo: "photos/year1/1.jpg",
      description: "Four strangers walking into the engineering auditorium with big dreams and zero idea of what lay ahead.",
      quote: "Every epic journey starts with a simple 'Hello'."
    },
    {
      title: "THE FIRST ROAD TRIP",
      tag: "FIRST TRIP",
      date: "January 2023",
      photo: "photos/year1/3.jpg",
      description: "Packed into an old car, missing GPS turns, and finding the most breathtaking sunset viewpoint by accident.",
      quote: "Not all who wander are lost... some just forgot the highway exit."
    },
    {
      title: "THE FIRST TECH FEST",
      tag: "FIRST EVENT",
      date: "March 2023",
      photo: "photos/year2/3.jpg",
      description: "Wearing matching volunteer badges, organizing events, and dancing in the festival crowd until 2 AM.",
      quote: "The night the campus felt alive."
    },
    {
      title: "THE FINAL SUBMISSION",
      tag: "PROJECT DAYS",
      date: "April 2026",
      photo: "photos/year4/2.jpg",
      description: "Hardbound black and gold project report stamped by HOD. The feeling of absolute triumph.",
      quote: "Blood, sweat, coffee, and 1000 git commits."
    },
    {
      title: "THE LAST WALK",
      tag: "FAREWELL",
      date: "May 2026",
      photo: "photos/year4/3.jpg",
      description: "Tossing graduation caps into the golden sunset sky. Hugging each other knowing our lives had changed forever.",
      quote: "4 Years. 4 Friends. One brotherhood for eternity."
    }
  ],

  // ------------------------------------------------------------------
  // 12. VIDEO MEMORIES ("MEMORIES IN MOTION 🎥")
  // ------------------------------------------------------------------
  videos: [
    {
      id: "v1",
      title: "College Life Compilation — 4 Years in 3 Minutes",
      thumbnail: "photos/hero.jpg",
      videoUrl: "", // Add local MP4 path e.g. "videos/compilation.mp4" or YouTube embed
      duration: "03:24",
      category: "College Life"
    },
    {
      id: "v2",
      title: "The Great Hill Station Road Trip Vlog",
      thumbnail: "photos/year3/1.jpg",
      videoUrl: "",
      duration: "05:12",
      category: "Trips"
    },
    {
      id: "v3",
      title: "Behind The Scenes: The Final Project Hacking",
      thumbnail: "photos/year4/2.jpg",
      videoUrl: "",
      duration: "02:45",
      category: "Projects"
    },
    {
      id: "v4",
      title: "Farewell Night: Final Goodbye & T-Shirt Signing",
      thumbnail: "photos/year4/3.jpg",
      videoUrl: "",
      duration: "04:18",
      category: "Farewell"
    }
  ],

  // ------------------------------------------------------------------
  // 13. QUOTE WALL ("WORDS WE'LL REMEMBER")
  // ------------------------------------------------------------------
  quotes: [
    {
      text: "Some people enter your life as classmates and leave as family.",
      author: "Akash",
      date: "Final Year",
      highlight: true
    },
    {
      text: "Degree mil gayi, par asli qualification toh yeh chaar saal the.",
      author: "Friend 2",
      date: "Farewell Day",
      highlight: false
    },
    {
      text: "We didn't realize we were making memories; we just knew we were having fun.",
      author: "Winnie the Pooh / The Squad",
      date: "Hostel Night",
      highlight: true
    },
    {
      text: "A semester without backlogs is cool, but a college life without these three idiots would be worthless.",
      author: "Friend 4",
      date: "Year 3",
      highlight: false
    },
    {
      text: "Engineering ended. Our story didn't.",
      author: "Forever 4",
      date: "May 2026",
      highlight: true
    }
  ],

  // ------------------------------------------------------------------
  // 14. THE FINAL CHAPTER STATS & FAREWELL
  // ------------------------------------------------------------------
  finalChapter: {
    stats: {
      days: "1,460",
      weeks: "208",
      months: "48",
      memories: "Countless",
      friends: "4"
    },
    headline1: "Engineering ended.",
    headline2: "But our story didn't.",
    narrative: "From the first day to the final goodbye, every exam panic, every cutting chai, every late-night coding breakthrough, and every road trip became a part of our story. We didn't just survive engineering; we made it legendary.",
    finalPhoto: "photos/final.jpg",
    finalPhotoOverlay: {
      line1: "Some chapters end.",
      line2: "The memories don't.",
      subline: "Forever grateful for these four years."
    }
  }
};

// Export to window for browser usage
if (typeof window !== "undefined") {
  window.MEMORY_DATA = MEMORY_DATA;
}
