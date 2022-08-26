const video = () => {

  const playPaused = (video) => {
    video.addEventListener('click', function (e) {
      e.preventDefault();
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    })

    video.addEventListener('touchstart', function (e) {
      e.preventDefault();
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    })
  }



  const fullVideo = () => {
    const videoWrap = document.querySelector(".video-big");
    const btn = document.querySelector(".smart__play-link");
    const video = videoWrap.querySelector("video");
    const videoClose = videoWrap.querySelector(".video-big__close");

    btn.addEventListener("click", () => {
      videoWrap.classList.add("video-big_active");
      video.play();
    })

    playPaused(video);

    // При клике вне модального окна - скрываем его
    videoClose.addEventListener("click", () => {
      if(videoWrap.classList.contains("video-big_active")) {
        video.pause();
        videoWrap.classList.remove("video-big_active")
      }
    })

    // При клике вне модального окна - скрываем его
    videoWrap.addEventListener("click", (event) => {
      const clickedElementsTree = event.composedPath();

      if(clickedElementsTree.includes(video)) {
        return;
      } else {
        video.pause();
        videoWrap.classList.remove("video-big_active");
      }
    })
  }

  const miniVideo = () => {
    const videoWrap = document.querySelector(".how-work__video");
    const preview = videoWrap.querySelector(".how-work__video-poster");
    const video = videoWrap.querySelector("video");

    preview.addEventListener("click", () => {
      videoWrap.classList.add("how-work__video_active");
      video.play();
    })

    playPaused(video);
  }

  miniVideo();
  fullVideo();
}

export default video;