const video = (videoHolderSelector) => {
  const videoHolder = document.querySelectorAll(videoHolderSelector),
    overlay = document.querySelector(".overlay"),
    body = document.querySelector("body"),
    closeBtn = document.querySelector(".close-overlay"),
    video = document.querySelector(".hidden-video");

  function openVideo(target) {
    body.style.marginRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
    closeBtn.style.display = "block";
    overlay.style.display = "block";
    body.style.overflowY = "hidden";
    video.classList.add("hidden-video-show");
  }

  function closeVideo() {
    body.style.marginRight = "0";
    closeBtn.style.display = "none";
    overlay.style.display = "none";
    body.style.overflowY = "scroll";
    video.classList.remove("hidden-video-show");
  }

  videoHolder.forEach((item) => {
    item.addEventListener("click", (e) => openVideo(e.target));
  });

  overlay.addEventListener("click", closeVideo);
};

export default video;
