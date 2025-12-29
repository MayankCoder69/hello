const collage = document.getElementById("collage");

/* ADD ALL YOUR PHOTOS & VIDEOS HERE */
const media = [
  { type: "img", src: "media/p1.jpg" },
  { type: "img", src: "media/p2.jpg" },
  { type: "img", src: "media/p3.jpg" },
  { type: "img", src: "media/p4.jpg" },
  { type: "img", src: "media/p5.jpg" },
  { type: "img", src: "media/p6.jpg" }
  // add 6 more here
];

/* Create collage cards */
media.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.style.setProperty("--r", `${Math.random()*10-5}deg`);

  if (item.type === "img") {
    const img = document.createElement("img");
    img.src = item.src;
    card.appendChild(img);
  } else {
    const video = document.createElement("video");
    video.src = item.src;
    video.controls = false;
    video.muted = true;

    video.onclick = () => {
      video.muted = false;
      video.play();
    };

    card.appendChild(video);
  }

  collage.appendChild(card);
});

/* Beating hearts */
const hearts = document.getElementById("hearts");
const heartsContainer = document.getElementById("hearts");

// Number of fixed hearts
const HEART_COUNT = 14;

for (let i = 0; i < HEART_COUNT; i++) {
  const heart = document.createElement("span");
  heart.textContent = Math.random() > 0.5 ? "💖" : "💗";

  // Random fixed position
  heart.style.left = Math.random() * 90 + "vw";
  heart.style.top = Math.random() * 90 + "vh";

  // Slight variation in beat speed
  heart.style.animationDuration = 1.4 + Math.random() * 1.2 + "s";

  heartsContainer.appendChild(heart);
}


/* Cute fixed random stickers */
const stickers = ["🧸","🌸","💌","⭐","🎀","🐻‍❄️"];
const stickerBox = document.getElementById("stickers");

stickers.forEach(s => {
  const el = document.createElement("span");
  el.textContent = s;
  el.style.left = Math.random() * 90 + "vw";
  el.style.top = Math.random() * 90 + "vh";
  el.style.transform = `rotate(${Math.random()*40-20}deg)`;
  stickerBox.appendChild(el);
});

const photos = document.querySelectorAll(".photo-collage img");

photos.forEach(photo => {
  const rotate = Math.random() * 10 - 5; // -5° to +5°
  photo.style.setProperty("--rot", `${rotate}deg`);
});


const music = document.getElementById("bg-music");

// Try autoplay muted
music.volume = 0.6;
music.muted = true;
music.play().catch(() => {});

// Unmute on first user interaction
document.addEventListener("click", () => {
  if (music.muted) {
    music.muted = false;
    music.play();
  }
}, { once: true });