const wrapper = document.querySelector(".wrapper");

const fullscreen = () => {

  const slider = new Swiper('.page', {
    // Свои классы
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",

    // Вертикальный слайдер
    direction: "vertical",

    // Количество сладов для показа
    slidesPerView: "auto",

    // Управление с клавиатуры
    keyboard: {
      // Включить\Выключить
      enabled: true,

      // Включить\Выключить только когда слайдер в пределах вьюпорта
      onlyInViewport: true,

      // Включить\Выключить управление клавишами PageUp/PageDown
      pageUpDown: true,
    },

    // Управление колесом мыши
    mousewheel: {

      // Чувствительность коолеса мыши
      sensitivity: 1,

      // Класс объекта на котором будет срабатывать прокрутка мышью
      // eventsTarget: ".image-slider"
    },

    // Отключение функционала если слайдов меньше чем нужно
    watchOverflow: true,

    // Скорость
    speed: 800,

    // Обновить свайпер при изменении элементов слайдера
    observer: true,

    // Обновить свайпер при изменении дочерних элементов слайда
    observeSlideChildren: true,

    // Обновить свайпер при изменении родительских элементов слайдера
    observeParents: true,

    // Навигация
    // Буллеты, текущее положение
    pagination: {
      el: ".page__pagination",
      type: "bullets",
      clickable: true,
      bulletClass: "page__bullet",
      bulletActiveClass: "page__bullet_active",
      renderBullet: function (index) {
        return '<span class="' + "page__bullet page__bullet" + (index + 1) + '"></span>';
      },
    },

    // Скроллбар
    scrollbar: {
      el: ".page__scroll",
      dragClass: "page__drag-scroll",

      // Возможность перетаскивать скролл
      draggable: true,

    },

    // Отключаем автоинициализацию
    init: false,

    // События
    on: {
      // Событие инициализации
      init: function() {
        overflowCheck();
        menuSlider();
        wrapper.classList.add("wrapper_loaded");
      },
      // Событие смены слайда
      slideChange: function() {
        menuRemoveActive();

        // Если номер текущего слайда совпадает с одним из номеров ссылок меню - делаем его активным
        for(let i = 0; i < slidesLink.length; i++) {
          let currentAttribute = slidesLink[i].getAttribute("data-screen-number");

          if(currentAttribute == slider.realIndex) {
            slidesLink[i].classList.add("nav__link_active");
          }
        }
      },
      resize: function () {
        overflowCheck();
      },
    },

  });


  // Сопоставляем ссылки в меню со слайдами
  const slidesLink = document.querySelectorAll("a[data-screen-number]");

  function menuSlider() {

    if(slidesLink) {
      for (let i = 0; i < slidesLink.length; i++) {
        const currentLink = slidesLink[i];
        const currentAttribute = currentLink.getAttribute("data-screen-number");

        if(currentAttribute == slider.realIndex) {
          currentLink.classList.add("nav__link_active");
        }

        currentLink.addEventListener("click", (e) => {
          menuRemoveActive();
          e.preventDefault();
          currentLink.classList.add("nav__link_active");
          slider.slideTo(currentAttribute, 800);
        })
      }
    }
  }


  // Удаление активного состояния у всех ссылок
  function menuRemoveActive () {
    const activeLink = document.querySelector(".nav__link_active")

    if(activeLink) {
      activeLink.classList.remove("nav__link_active");
    }
  }

  // Проверка слайда на переполнение
  function overflowCheck () {

    // Удаляем лишний буллет
    const bullet8 = document.querySelector(".page__bullet8");
    if(bullet8) {
      bullet8.style.display = "none";
    }

    if(wrapper.classList.contains("wrapper_free")) {
      wrapper.classList.remove("wrapper_free");

      slider.enabled = true;
    }

    for(let i = 0; i < slider.slides.length; i++) {
      const slide = slider.slides[i];
      const slideContent = slide.querySelector(".container");

      if((slideContent.offsetHeight > window.innerHeight) && !slide.classList.contains("screen_last")) {
        wrapper.classList.add("wrapper_free");
        //console.log("Сломался слайд номер: " + i);

        slider.enabled = false;
        scroll();
      }
    }
  }




  // Альтернативный скролл, когда выключаем swiper
  const scroll = () => {

    if (wrapper.classList.contains("wrapper_free")) {

      const navBar = document.querySelector(".nav");
      const links = navBar.querySelectorAll(".nav__link");

      // Реализация плавного скролла по id
      links.forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();

          const linkHref = link.getAttribute("href");
          if(linkHref === "#") {
            return;
          }
          const section = document.querySelector(linkHref);

          if(section) {
            // Скролл с помощью библиотеки (кроссбарузерно)
            seamless.scrollIntoView(section, {
              behavior: "smooth",
              block: "start",
              inline: "center",
            });

            // Обычный скролл
            // section.scrollIntoView({
            //   block: "start",
            //   behavior: "smooth"
            // })
          }
        })
      })
    }
  }


  // Запускаем слайдер
  slider.init();


}

export default fullscreen;