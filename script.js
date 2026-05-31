const typewriter = document.getElementById("typewriter");
const loader = document.getElementById("loader");
const loaderMusic = document.getElementById("loaderMusic");
const bgMusic = document.getElementById("bgMusic");
const partyBtn = document.getElementById("partyBtn");
const enterBtn = document.getElementById("enterBtn");
const welcomeScreen = document.getElementById("welcomeScreen");
const partyPopup = document.getElementById("partyVideoPopup");
const partyVideo = document.getElementById("partyVideo");
const closeVideo = document.getElementById("closeVideo");

const texts = [
  "Connecting to Ananya's Heart ❤️",

  "Checking smile brightness... 9999% ✨",

  "Beauty level exceeded system limits 😍",

  "Finding all happy memories 📸",

  "Loading hugs and kisses 💕",

  "Preparing birthday magic 🎂",

  "Surprise unlocked ❤️",
];

let textIndex = 0;
let charIndex = 0;
partyBtn.classList.remove("show");

const collector = document.getElementById("memoryCollector");

function collectPhoto() {
  const img = document.createElement("img");

  const randomPhoto = Math.floor(Math.random() * 16) + 1;

  img.src = `assets/images/photo${randomPhoto}.jpeg`;

  img.classList.add("memory-photo");

  img.style.setProperty("--startX", `${Math.random() * 400 - 200}px`);

  collector.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 2000);
}

setInterval(collectPhoto, 200);

function typeEffect() {
  if (charIndex < texts[textIndex].length) {
    typewriter.innerHTML += texts[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 50);
  } else {
    setTimeout(() => {
      typewriter.innerHTML = "";
      charIndex = 0;
      textIndex++;

      if (textIndex < texts.length) {
        typeEffect();
      }
    }, 1000);
  }
}

createPopup("🎂 Birthday Girl Detected ❤️");

setTimeout(() => {
  confetti({
    particleCount: 400,
    spread: 360,
  });
}, 300);

// After loader completes
function startLoaderTimer() {
  setTimeout(() => {
    loader.style.opacity = "0";

    loaderMusic.pause();
    loaderMusic.currentTime = 0;

    // Play song4.mp3
    const introSong = new Audio("assets/music/song4.mp3");
    introSong.play();

    // After song4 ends, play song3 automatically
    introSong.addEventListener("ended", () => {
      const autoSong = new Audio("assets/music/song3.mp3");
      autoSong.loop = true; // optional
      autoSong.play();

      // Store globally if needed
      window.autoSong = autoSong;
    });

    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }, 9000);
}

const bubbles = document.querySelector(".loader-bubbles");

for (let i = 0; i < 30; i++) {
  const bubble = document.createElement("span");

  const size = 20 + Math.random() * 80;

  bubble.style.width = size + "px";
  bubble.style.height = size + "px";

  bubble.style.left = Math.random() * 100 + "%";

  bubble.style.animationDuration = 8 + Math.random() * 10 + "s";

  bubble.style.animationDelay = Math.random() * 5 + "s";

  bubbles.appendChild(bubble);
}

// START BUTTON

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  bgMusic.play();

  confetti({
    particleCount: 200,
    spread: 120,
  });
});

// FINAL HEART

const heartBtn = document.getElementById("heartBtn");
const finalMessage = document.getElementById("finalMessage");

let holdTimer;

heartBtn.addEventListener("mousedown", () => {
  holdTimer = setTimeout(() => {
    confetti({
      particleCount: 600,
      spread: 360,
    });

    finalMessage.classList.add("show");
  }, 3000);
});

heartBtn.addEventListener("mouseup", () => {
  clearTimeout(holdTimer);
});

heartBtn.addEventListener("touchstart", () => {
  holdTimer = setTimeout(() => {
    confetti({
      particleCount: 600,
      spread: 360,
    });

    finalMessage.classList.add("show");
  }, 3000);
});

heartBtn.addEventListener("touchend", () => {
  clearTimeout(holdTimer);
});

// RANDOM CELEBRATION CLICK

const randomMessages = [
  "❤️ +100 Love Points",
  "✨ Cute memory unlocked",
  "💖 Too much beauty detected",
  "💕 Relationship upgraded",
  "🥰 Warning: dangerously cute girl detected",
];

window.addEventListener("click", (e) => {
  confetti({
    particleCount: 80,
    spread: 90,
    origin: {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    },
  });

  const heart = document.createElement("div");

  heart.innerHTML = "💖";

  heart.style.position = "fixed";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  heart.style.fontSize = "24px";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "99999";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);

  if (Math.random() > 0.7) {
    createPopup(
      randomMessages[Math.floor(Math.random() * randomMessages.length)],
    );
  }
});

function createPopup(message) {
  const popup = document.createElement("div");

  popup.classList.add("popup");

  popup.innerHTML = message;

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 2000);
}

// PARTY MODE

partyBtn.addEventListener("click", () => {
  // Stop song2
  bgMusic.pause();

  document.body.classList.toggle("party-mode");

  partyPopup.classList.add("show");

  partyVideo.currentTime = 0;
  partyVideo.play();

  const interval = setInterval(() => {
    confetti({
      particleCount: 150,
      spread: 360,
      origin: {
        x: Math.random(),
        y: Math.random() * 0.6,
      },
    });
  }, 900);

  setTimeout(() => {
    clearInterval(interval);
  }, 9000);
});

function closePartyMode() {
  partyVideo.pause();

  partyPopup.classList.remove("show");

  document.body.classList.remove("party-mode");

  // Resume song2
  bgMusic.play();
}

partyVideo.addEventListener("ended", () => {
  closePartyMode();
});

closeVideo.addEventListener("click", () => {
  closePartyMode();
});

// CURSOR HEARTS

window.addEventListener("mousemove", (e) => {
  const spark = document.createElement("div");

  spark.innerHTML = "✨";

  spark.style.position = "fixed";
  spark.style.left = e.clientX + "px";
  spark.style.top = e.clientY + "px";
  spark.style.pointerEvents = "none";
  spark.style.fontSize = "12px";
  spark.style.opacity = "0.8";

  document.body.appendChild(spark);

  setTimeout(() => {
    spark.remove();
  }, 700);
});

window.addEventListener("load", () => {
  const duration = 5000;
  const end = Date.now() + duration;

  const interval = setInterval(() => {
    confetti({
      particleCount: 6,
      spread: 360,
      startVelocity: 30,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
      },
    });

    if (Date.now() > end) {
      clearInterval(interval);
    }
  }, 150);
});

window.addEventListener("load", () => {
  const duration = 5000;
  const end = Date.now() + duration;

  const interval = setInterval(() => {
    confetti({
      particleCount: 6,
      spread: 360,
      startVelocity: 30,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
      },
    });

    if (Date.now() > end) {
      clearInterval(interval);
    }
  }, 150);
});

const loaderTitle = document.getElementById("loaderTitle");

const loadingStages = [
  "Searching for the cutest girl... 🔍",
  "Found Ananya ❤️",
  "Scanning beautiful smile... 😊",
  "Collecting precious memories... 📸",
  "Loading unlimited happiness... ✨",
  "Birthday Surprise Ready 🎂",
];

let stage = 0;

const STAGE_DURATION = 9000 / loadingStages.length;

const titleInterval = setInterval(() => {
  if (stage < loadingStages.length) {
    loaderTitle.innerHTML = loadingStages[stage];
    stage++;
  } else {
    clearInterval(titleInterval);
  }
}, STAGE_DURATION);

const lovePercent = document.getElementById("lovePercent");

let love = 0;

const loveInterval = setInterval(() => {
  love += 100 / (9000 / 100);

  if (love >= 100) {
    love = 100;
    clearInterval(loveInterval);

    lovePercent.innerHTML = "100% Love Loaded ❤️";

    setTimeout(() => {
      lovePercent.innerHTML = "Ananya Verified ❤️";
    }, 500);
  } else {
    lovePercent.innerHTML = `${Math.floor(love)}% Love Loaded ❤️`;
  }
}, 100);

const sparkleContainer = document.getElementById("sparkleContainer");

setInterval(() => {
  const sparkle = document.createElement("div");

  sparkle.innerHTML = ["✨", "💖", "💕", "🌸", "🎀"][
    Math.floor(Math.random() * 5)
  ];

  sparkle.classList.add("sparkle");

  sparkle.style.left = Math.random() * 100 + "vw";

  sparkle.style.top = Math.random() * 100 + "vh";

  sparkleContainer.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 3000);
}, 150);

enterBtn.addEventListener("click", () => {
  enterBtn.classList.add("open");

  confetti({
    particleCount: 500,
    spread: 360,
  });

  loaderMusic.play();

  setTimeout(() => {
    welcomeScreen.style.display = "none";
    loader.style.display = "flex";

    typeEffect();
    startLoaderTimer();
  }, 1000);
});

for (let i = 0; i < 30; i++) {
  const heart = document.createElement("div");

  heart.innerHTML = "💖";

  heart.style.position = "fixed";
  heart.style.left = "50%";
  heart.style.top = "50%";
  heart.style.fontSize = "30px";
  heart.style.zIndex = "999999";

  document.body.appendChild(heart);

  const x = (Math.random() - 0.5) * 800;
  const y = (Math.random() - 0.5) * 800;

  heart.animate(
    [
      { transform: "translate(0,0)", opacity: 1 },
      { transform: `translate(${x}px,${y}px)`, opacity: 0 },
    ],
    {
      duration: 2000,
    },
  );

  setTimeout(() => heart.remove(), 2000);
}

startBtn.addEventListener("click", () => {
  if (window.autoSong) {
    window.autoSong.pause();
    window.autoSong.currentTime = 0;
  }

  bgMusic.currentTime = 0;
  bgMusic.play();

  confetti({
    particleCount: 200,
    spread: 120,
  });
});

const hiddenSections = document.querySelectorAll(
  ".memory-wall, .quiz, .letters, .dashboard, .future, .final",
);

function startLoaderTimer() {
  setTimeout(() => {
    loader.style.opacity = "0";

    loaderMusic.pause();
    loaderMusic.currentTime = 0;

    const introSong = new Audio("assets/music/song4.mp3");
    introSong.play();

    introSong.addEventListener("ended", () => {
      const autoSong = new Audio("assets/music/song3.mp3");
      autoSong.loop = true;
      autoSong.play();

      window.autoSong = autoSong;
    });

    setTimeout(() => {
      loader.style.display = "none";

      // Show button after 10 seconds on hero screen
      setTimeout(() => {
        startBtn.classList.add("show");
      }, 15000);
    }, 1000);
  }, 9000);
}

startBtn.addEventListener("click", () => {
  // Stop song3
  if (window.autoSong) {
    window.autoSong.pause();
    window.autoSong.currentTime = 0;
  }

  // Play song2 forever
  bgMusic.loop = true;
  bgMusic.currentTime = 0;
  bgMusic.play();

  // Show all sections
  hiddenSections.forEach((section) => {
    section.style.display = "flex";
  });

  confetti({
    particleCount: 300,
    spread: 180,
  });

  setTimeout(() => {
    document.querySelector(".memory-wall").scrollIntoView({
      behavior: "smooth",
    });
  }, 1000);

  setTimeout(() => {
    partyBtn.classList.add("show");

    confetti({
      particleCount: 300,
      spread: 180,
    });
  }, 2000);
});

const questions = [
  {
    q: "What is Ananya's Cuteness Level? 🤔",
    options: ["50%", "100%", "9999% 👑"],
    answer: 2,
  },
  {
    q: "Who owns today's crown? 👑",
    options: ["Someone Else", "Ananya ❤️", "Nobody"],
    answer: 1,
  },
  {
    q: "What should Ananya receive today? 🎂",
    options: ["Homework 😭", "Unlimited Happiness ✨", "More Exams 😭"],
    answer: 1,
  },
];

let current = 0;
let score = 0;

const question = document.getElementById("quizQuestion");
const buttons = document.getElementById("quizButtons");
const result = document.getElementById("quizResult");
const scoreBox = document.getElementById("quizScore");

function loadQuestion() {
  const q = questions[current];

  question.innerHTML = q.q;

  buttons.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");

    btn.innerHTML = option;

    btn.onclick = () => checkAnswer(index);

    buttons.appendChild(btn);
  });
}

function checkAnswer(index) {
  if (index === questions[current].answer) {
    score++;

    result.innerHTML = `<div class="correct-answer">
        🎉 Correct! Queen Ananya approves.
      </div>`;
  } else {
    result.innerHTML = `<div class="wrong-answer">
        😂 Nice try... but that's impossible.
      </div>`;
  }

  scoreBox.innerHTML = `Score: ${score} / 3`;

  setTimeout(() => {
    current++;

    if (current < questions.length) {
      result.innerHTML = "";
      loadQuestion();
    } else {
      question.innerHTML = "🏆 Congratulations!";

      buttons.innerHTML = "";

      result.innerHTML = `
      <div class="correct-answer">
        You successfully completed
        Ananya's Birthday Challenge 🎂❤️
        <br><br>
        Final Score: ${score}/3
      </div>
      `;
      alert("🎁 Secret Reward Unlocked! You officially know Queen Ananya.");
      confetti({
        particleCount: 250,
        spread: 120,
        origin: { y: 0.6 },
      });
    }
  }, 1200);
}

loadQuestion();

function openLetter(card) {
  if (card.classList.contains("open")) return;

  card.classList.add("open");

  confetti({
    particleCount: 120,
    spread: 90,
    origin: { y: 0.7 },
  });

  const popup = document.createElement("div");

  popup.className = "popup";

  popup.innerHTML = "💌 Secret Letter Opened Successfully ✨";

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 2500);
}

const res = [
  "⚠️ Alert: Beauty level exceeded server capacity.",
  "😍 Face detected. Confidence: 1000%. Scientists confused.",
  "🚀 Smile power strong enough to light up Kolkata.",
  "❤️ Birthday Queen status verified successfully.",
  "😂 Drama storage full. Additional cloud storage required.",
  "🌸 Cuteness overload detected. Emergency chocolates needed.",
  "👑 Official Result: World's Most Adorable Human.",
];

function runScan() {
  const text = document.getElementById("scanText");
  const beauty = document.getElementById("beautyText");

  text.innerHTML = "🔄 Scanning...";
  beauty.innerHTML = "Calculating...";

  setTimeout(() => {
    text.innerHTML = res[Math.floor(Math.random() * res.length)];

    beauty.innerHTML = 999 + Math.floor(Math.random() * 999) + "%";
  }, 1500);
}

runScan();

const heart = document.getElementById("heartBtn");
const reveal = document.getElementById("finalReveal");
const text = document.getElementById("unlockText");
const song = document.getElementById("loveSong");
const circle = document.getElementById("progressCircle");

const radius = 115;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

let holdInterval;
let progress = 0;

const cinematicTexts = [
  "🔍 Searching for the most beautiful soul...",
  "📸 Loading precious memories...",
  "❤️ Establishing heart connection...",
  "✨ Loading happiness database...",
  "👑 Birthday Queen Verified...",
];

function startUnlock() {
  bgMusic.pause();
  if (window.autoSong) {
    window.autoSong.pause();
  }
  song.currentTime = 0;
  song.play();

  setTimeout(() => {
    song.pause();

    bgMusic.currentTime = 0;
    bgMusic.play();
  }, 20000);

  let msgIndex = 0;

  holdInterval = setInterval(() => {
    progress += 2;

    const offset = circumference - (progress / 100) * circumference;

    circle.style.strokeDashoffset = offset;

    if (progress % 20 === 0) {
      text.innerHTML = cinematicTexts[msgIndex] || "❤️ Unlocking...";
      msgIndex++;
    }

    if (progress >= 100) {
      clearInterval(holdInterval);

      text.innerHTML = "💖 Ananya Unlocked Successfully";

      confetti({
        particleCount: 1000,
        spread: 360,
      });

      reveal.classList.add("show");

      createHeartStorm();
      showMemoryRain();
    }
  }, 100);
}

function stopUnlock() {
  clearInterval(holdInterval);

  progress = 0;

  circle.style.strokeDashoffset = circumference;

  text.innerHTML = "Hold Longer ❤️";
}

function createHeartStorm() {
  const emojis = ["💖", "💕", "❤️", "🌸", "✨", "🎀"];

  for (let i = 0; i < 200; i++) {
    setTimeout(() => {
      const e = document.createElement("div");

      e.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

      e.className = "heart";

      e.style.left = Math.random() * 100 + "vw";

      e.style.fontSize = 20 + Math.random() * 40 + "px";

      document.body.appendChild(e);

      setTimeout(() => {
        e.remove();
      }, 8000);
    }, i * 30);
  }
}

function showLoveExplosion() {
  confetti({
    particleCount: 1200,
    spread: 360,
  });

  createPopup("❤️ Infinite Happiness For Ananya ❤️");
}

function showMemoryRain() {
  for (let i = 1; i <= 16; i++) {
    setTimeout(() => {
      const img = document.createElement("img");

      img.src = `assets/images/photo${i}.jpeg`;

      img.className = "memory-rain";

      img.style.left = Math.random() * (window.innerWidth - 120) + "px";

      document.body.appendChild(img);
      setTimeout(() => {
        img.remove();
      }, 8000);
    }, i * 300);
  }
}

heart.addEventListener("mousedown", startUnlock);
heart.addEventListener("mouseup", stopUnlock);

heart.addEventListener("touchstart", startUnlock);
heart.addEventListener("touchend", stopUnlock);
