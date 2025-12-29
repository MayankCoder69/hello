const videos = document.querySelectorAll("video");

videos.forEach(video => {
  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
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
