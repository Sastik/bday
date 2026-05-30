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

const flyingPhotos = document.getElementById("flyingPhotos");

for (let i = 1; i <= 16; i++) {
  const img = document.createElement("img");

  img.src = `assets/images/photo${i}.jpeg`;

  img.style.left = Math.random() * 100 + "%";
  img.style.animationDuration = 6 + Math.random() * 5 + "s";
  img.style.animationDelay = Math.random() * 3 + "s";

  flyingPhotos.appendChild(img);
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

// QUIZ

const wrong = document.querySelector(".wrong");
const correct = document.querySelector(".correct");
const result = document.getElementById("quizResult");

wrong.addEventListener("click", () => {
  result.innerHTML = "❌ System Error: Incorrect answer detected 😂";

  createPopup("Too much attitude detected 😂");
});

correct.addEventListener("click", () => {
  result.innerHTML = "✅ Correct Answer ❤️";

  confetti({
    particleCount: 300,
    spread: 180,
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

  // Start auto journey after a short delay
  setTimeout(startAutoJourney, 1000);
});


const timings = [
  8000,
  5000,
  6000, 
  5000, 
  7000, 
  8000 
];

function startAutoJourney() {

  const sections = [
    ".memory-wall",
    ".quiz",
    ".letters",
    ".dashboard",
    ".future",
    ".final"
  ];

  const timings = [
    8000,
    5000,
    6000,
    5000,
    7000,
    8000
  ];

  let i = 0;

  function move() {

    if (i >= sections.length) {

      // Final journey completed
      setTimeout(() => {

        partyBtn.classList.add("show");

        confetti({
          particleCount: 300,
          spread: 180
        });

      }, 2000);

      return;
    }

    document.querySelector(sections[i]).scrollIntoView({
      behavior: "smooth"
    });

    const delay = timings[i];
    i++;

    setTimeout(move, delay);
  }

  move();
}