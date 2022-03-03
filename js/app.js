window.addEventListener("DOMContentLoaded", function () {
  //header__menu-burger
  let burger = document.getElementById("nav__toggle");

  function myBurger() {
    let element = document.getElementById("nav");
    element.classList.toggle("open");
    burger.classList.toggle("active");
  }

  burger.addEventListener("click", myBurger);

  //header_menu-search
  const header = document.querySelector(".header__main-nav");
  const searchBtn = document.querySelector(".header__form-btn-open");
  const closeSearchBtn = document.querySelector(".header__form-btn-close");
  const formBtn = document.querySelector(".header__form-btn");
  const formBtninput = document.querySelector(".header__form-btn-input");

  //search 768px
  const widthScreen = window.innerWidth;
  const logo = document.querySelector(".header__menu-logo");

  searchBtn.onclick = (e) => {
    e.preventDefault();
    header.classList.add("active");
    formBtn.classList.add("active");
    formBtninput.classList.add("active");

    if (widthScreen <= 1024) {
      logo.classList.add("disappear");
      burger.classList.add("disappear");
    }
  };

  closeSearchBtn.onclick = (e) => {
    e.preventDefault();
    header.classList.remove("active");
    formBtn.classList.remove("active");
    formBtninput.classList.remove("active");
    if (widthScreen <= 1024) {
      logo.classList.remove("disappear");
      burger.classList.remove("disappear");
    }
  };

  //simplebar
  document.addEventListener("click", function (event) {
    const activeDropdown = document.querySelector(".dropdown-is-active");
    const activeDropdownButton = activeDropdown && activeDropdown.querySelector(".header__additional-btn");
    const tabIndex = document.querySelectorAll(".dropdown-link");
    const el = event.target;

    //чтобы убирался класс после нажатия
    activeDropdown && activeDropdown.classList.remove("dropdown-is-active");
    //менялся таб-индекс
    tabIndex.forEach(function (tabElem) {
      tabElem.setAttribute("tabindex", "-1");
    });

    //чтобы не закрывался симплбар при клике на него
    let dropDown = () => {
      el.closest(".header__additional-item").classList.add("dropdown-is-active");
      let parentDrop = el.closest(".header__additional-item").querySelector(".dropdown-list");
      parentDrop.querySelectorAll(".dropdown-link").forEach((ev) => {
        ev.setAttribute("tabindex", "0");
      });
    };

    const dropList = document.querySelectorAll(".simplebar-content");
    dropList.forEach((drop) => {
      if (drop === el) {
        dropDown();
      }
    });

    if (Array.from(el.classList).includes("header__additional-btn") && activeDropdownButton !== el) {
      dropDown();
    }
  });

  //accordion
  const accordions = document.querySelectorAll(".section-accordion__item");

  for (item of accordions) {
    item.addEventListener("click", function () {
      if (this.classList.contains("active")) {
        // this.classList.remove("active");
      } else {
        for (el of accordions) {
          el.classList.remove("active");
        }
        this.classList.add("active");
      }
    });
  }

  /* Catalog-country */
  const btnPainter = document.querySelectorAll(".accordion-btn");

  btnPainter.forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (eventTab) {
      const path = eventTab.currentTarget.dataset.path;
      document.querySelectorAll(".section-catalog__card").forEach(function (tabContent) {
        tabContent.classList.remove("card-is-active");
      });
      document.querySelector(`[data-target="${path}"]`).classList.add("card-is-active");
    });
  });

  btnPainter.forEach(function (activeBtn) {
    activeBtn.addEventListener("click", function (clickBtn) {
      btnPainter.forEach(function (eventBtn) {
        eventBtn.classList.remove("btn-active");
      });
      clickBtn.target.classList.add("btn-active");
    });
  });

  //intro-swiper
  new Swiper(".swiper-intro", {
    renderExternalUpdate: false,
    longSwipes: false,
    autoplay: {
      delay: 9000,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });

  /* choices */
  const element = document.querySelector("#gallery-select");
  new Choices(element, {
    searchEnabled: false,
    position: "bottom",
    placeholder: false,
  });

  //gallery-swiper
  /* Swiper-Gallery */
  new Swiper(".swiper-gallery", {
    pagination: {
      el: ".swiper-pagination-gallery",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        spaceBetween: 22,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      376: {
        spaceBetween: 38,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      769: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1025: {
        spaceBetween: 42,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  });

  /* Swiper-Events */
  new Swiper(".swiper-events", {
    loop: false,
    pagination: {
      el: ".swiper-pagination-events",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        spaceBetween: 20,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      577: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      769: {
        spaceBetween: 27,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1025: {
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 3,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    },
  });

  /*Projects */
  new Swiper(".swiper-projects", {
    longSwipes: false,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        spaceBetween: 50,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      500: {
        spaceBetween: 20,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      768: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      769: {
        spaceBetween: 49,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1025: {
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  });

  /* Tooltip */
  document.querySelectorAll(".section-projects__tooltip").forEach((btnTooltip, numberIndex) => {
    btnTooltip.onclick = () => {
      document.getElementById(`tooltipPopup-${numberIndex}`).classList.toggle("btn-tooltip");
      document.querySelectorAll(".section-projects__tooltip").forEach((btnTooltipOne, numberIndexOne) => {
        if (numberIndex !== numberIndexOne) {
          btnTooltipOne.classList.remove("btn-tooltip");
        }
      });
    };
  });

  /* Tippy */
  function trigger() {
    if (widthScreen <= 1024) {
      return "click";
    } else {
      return "mouseenter";
    }
  }

  function hideOnClick() {
    if (widthScreen >= 1025) {
      return "false";
    } else {
      return true;
    }
  }

  tippy("[data-tippy-content]", {
    hideOnClick: hideOnClick(),
    trigger: trigger(),
  });

  /* Form-Mask */
  let selector = document.querySelector("input[type='tel']");
  let im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  //just-validate
  new JustValidate(".js-form", {
    rules: {
      name: {
        required: true,
        minLength: 3,
        maxLength: 15,
        function: (name, value) => {
          let arrayCheck = /(?=.*\d)|(?=.*[.,#?№;%!:@$^&*"'{}|=+()-])/;
          return !arrayCheck.test(String(value));
        },
      },
      tel: {
        required: true,
        function: () => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        },
      },
    },
    messages: {
      name: {
        minLength: "Мин. количество символов :value",
        maxLength: "Макс. количество символов :value",
        required: "Введите имя",
      },
      tel: {
        required: "Введите номер",
        function: "Введите не менее 10 символов",
      },
    },
  });

  /* Yandex-map */
  function init() {
    let center = [55.758468, 37.601088];
    let myMap = new ymaps.Map("map", {
      center: center,
      zoom: 15,
      controls: ["smallMapDefaultSet"],
    });
    let placeMarkCustom = new ymaps.Placemark(
      center,
      {
        balloonContent: "Леонтьевский переулок, дом 5/1",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "../img/contacts/marker.svg",
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0],
      }
    );
    myMap.controls.remove("searchControl");
    myMap.controls.remove("trafficControl");
    myMap.controls.remove("fullscreenControl");
    myMap.controls.remove("rulerControl");
    myMap.behaviors.disable("scrollZoom");
    myMap.behaviors.disable("multiTouch");
    myMap.behaviors.disable("drag");
    myMap.controls.remove("typeSelector");
    myMap.geoObjects.add(placeMarkCustom);
  }

  let flag = 0;
  let coordinate = document.documentElement.scrollTop;

  if (widthScreen >= 1025) {
    if (coordinate >= 4000) {
      ymaps.ready(init);
      flag = 1;
    }
  }
  if (widthScreen <= 1024 && widthScreen >= 769) {
    if (coordinate >= 4600) {
      ymaps.ready(init);
      flag = 1;
    }
  }

  if (widthScreen <= 768 && widthScreen >= 321) {
    if (coordinate >= 5500) {
      ymaps.ready(init);
      flag = 1;
    }
  }

  if (widthScreen <= 320) {
    if (coordinate >= 5200) {
      ymaps.ready(init);
      flag = 1;
    }
  }

  window.addEventListener("scroll", () => {
    let mapOffset = document.querySelector("#map").offsetTop;
    let scrollY = window.scrollY;
    if (scrollY >= mapOffset - 1500 && flag === 0) {
      ymaps.ready(init);
      flag = 1;
    }
  });

  //прокрутка при клике
  const menuLinks = document.querySelectorAll(".header__nav-link[data-goto]");

  if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
      const menuLink = e.target;

      //проверка есть ли такой атрибут
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue =
          gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth",
        });
        e.preventDefault();
      }
    }
  }
});
