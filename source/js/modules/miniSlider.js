const miniSlider = () => {

  const startSlide = () => {
    window.mySwipe = new Swipe(document.querySelector('.slider'), {
      startSlide: 0,
      speed: 800,
      auto: 3000,
      continuous: true,
      disableScroll: false,
      stopPropagation: false,
      callback: function(index, elem) {},
      transitionEnd: function(index, elem) {}
    });

    const left = document.querySelector(".swipe__left");
    const right = document.querySelector(".swipe__right");

    left.addEventListener("click", () => {
      window.mySwipe.prev()
    })

    right.addEventListener("click", () => {
      window.mySwipe.next()
    })

  }

  if(window.screen.width < 1200) {
    if(!window.mySwipe) {
      startSlide()
    }
  }

  window.addEventListener("resize", () => {
    if(window.screen.width < 1200) {
      if(!window.mySwipe) {
        startSlide()
      }
    }else if (window.mySwipe){
      window.mySwipe.stop()
      window.mySwipe.kill()
    }
  })

}

export default miniSlider;