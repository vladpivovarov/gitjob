const video = () => {

  const fullVideo = () => {
    const videoWrap = document.querySelector(".video-big");
    const btn = document.querySelector(".smart__play-link");
    const video = videoWrap.querySelectorAll("video")[0];
    const videoClose = videoWrap.querySelector(".video-big__close");
    let playPause = 0;

    video.addEventListener("click", (e) => {
      e.preventDefault();
      if(video.paused) {
        video.play();
        playPause = 1;
        console.log("play");
      } else if(video.played) {
        video.pause();
        playPause = 0;
        console.log("pause");
      }

      let timerId = setInterval(() => console.log("paused: ", video.paused), 1000);
    })

    video.addEventListener("pause", (e) => {
      console.log("пауза");
      if(playPause === 0) {
        return;
      } else {
        video.play();
      }
    })

    btn.addEventListener("click", () => {
      videoWrap.classList.add("video-big_active");

      if(video.paused) {
        video.play();
        playPause = 1;
      }
    })



    //При клике на кнопку закрытия - скрываем его
    videoClose.addEventListener("click", () => {
      if(videoWrap.classList.contains("video-big_active")) {
        if(video.played) {
          video.pause();
          playPause = 0;
        }

        videoWrap.classList.remove("video-big_active")
      }
    })

    //При клике вне модального окна - скрываем его
    videoWrap.addEventListener("click", (event) => {
      const clickedElementsTree = event.composedPath();

      if(clickedElementsTree.includes(video)) {
        return;
      } else {
        if(video.played) {
          video.pause();
        }

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
    })

    //playPaused(video);
  }

  miniVideo();
  fullVideo();
}

export default video;