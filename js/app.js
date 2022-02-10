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
  const searchBtn = document.querySelector(".header__form-btn-open");
  const closeSearchBtn = document.querySelector(".header__form-btn-close");
  const formBtn = document.querySelector(".header__form-btn");
  const formBtninput = document.querySelector(".header__form-btn-input");

  //search 768px
  const widthScreen = window.innerWidth;
  const logo = document.querySelector(".header__menu-logo");

  searchBtn.onclick = (e) => {
    e.preventDefault();
    formBtn.classList.add("active");
    formBtninput.classList.add("active");
    if (widthScreen <= 1023) {
      logo.classList.add("disappear");
      burger.classList.add("disappear");
    }
  };

  closeSearchBtn.onclick = (e) => {
    e.preventDefault();
    formBtn.classList.remove("active");
    formBtninput.classList.remove("active");
    if (widthScreen <= 1023) {
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

    let dropDown = () => {
      el.closest(".header__additional-item").classList.add("dropdown-is-active");
      let parentDrop = el.closest(".header__additional-item").querySelector(".dropdown-list");
      parentDrop.querySelectorAll(".dropdown-link").forEach((ev) => {
        ev.setAttribute("tabindex", "0");
      });
    };

    //чтобы не закрывался симплбар при клике на него
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
});
