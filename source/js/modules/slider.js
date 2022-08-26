const sliders = () => {

  const miniSlider = new Swiper('.page-mini', {
    init: false,
    // Свои классы
    wrapperClass: "page-mini__wrapper",
    slideClass: "page-mini__screen",

    // Вертикальный слайдер
    direction: 'horizontal',

    // Количество сладов для показа
    slidesPerView: "auto",

    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false
    },

    // Скорость
    speed: 800,

    // Навигация
    pagination: {
      el: ".page-mini__pagination",
      type: "bullets",
      clickable: true,
      bulletClass: "page-mini__bullet",
      bulletActiveClass: "page-mini__bullet_active",
      renderBullet: function (index) {
        return '<span class="' + "page-mini__bullet page-mini__bullet" + (index + 1) + '"></span>';
      },
    },

    navigation: {
      nextEl: '.page-mini__button-next',
      prevEl: '.page-mini__button-prev',
      disabledClass: "page-mini__button-disabled"
    },
    // События
    on: {
      // Событие инициализации
      init: function() {
        positionControls();
      },
      // Событие смены слайда
      resize: function () {
        positionControls();
      },
      slideChange: function() {
        positionControls();
      }
    }

  })

  miniSlider.init();

  function positionControls() {
    let miniSliderControls = document.querySelector(".page-mini__controls");
    const miniSliderDesc = document.querySelectorAll(".difference__desc");
    const pageMiniScreen = document.querySelector(".page-mini__screen");
    const header = document.querySelector(".header");
    const pageMiniScreenTop = window.getComputedStyle(pageMiniScreen).paddingTop;
    const str = pageMiniScreenTop.replace(/[a-zа-яё]/gi, '');

    // let currentDescSize = 0;
    // for(let i = 0; i < miniSliderDesc.length; i++) {
    //   if(miniSliderDesc[i].clientHeight > currentDescSize) {
    //     currentDescSize = miniSliderDesc[i].clientHeight;
    //   }
    // }

    if (miniSliderDesc[miniSlider.realIndex].classList.contains("difference__desc_3")) {
      miniSliderControls.classList.add("page-mini__controls_right");
      //let offsetLeftDesc = miniSliderDesc[miniSlider.realIndex].offsetLeft;
      //miniSliderControls.style.left = offsetLeftDesc + "px";

    } else {
      if(miniSliderControls.classList.contains("page-mini__controls_right")) {
        miniSliderControls.classList.remove("page-mini__controls_right");
        miniSliderControls.style.left = "auto";
      }
    }

    // let size = window.outerHeight - currentDescSize - str - header.clientHeight;
    // miniSliderControls.style.bottom = size + "px";
  }
}

export default sliders;