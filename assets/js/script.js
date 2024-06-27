import $ from "jquery";
import { Swiper } from "swiper";
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

//sticky Header
var wind = $(window);
var sticky = $(".site-header");
wind.on("scroll", function () {
  var scroll = wind.scrollTop();
  if (scroll < 100) {
    sticky.removeClass("sticky");
  } else {
    sticky.addClass("sticky");
  }
});

// Home Banner Slider
const swiper = new Swiper(".sliderBanner", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var galleryThumbs = new Swiper(".gallery-thumbs", {
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 5,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  direction: "vertical",
});

var galleryMain = new Swiper(".gallery-main", {
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  preventInteractionOnTransition: true,
  loop: true,
  speed: 1000,
  parallax: true,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  thumbs: {
    swiper: galleryThumbs,
  },
});

// galleryMain.on("slideChangeTransitionStart", function () {
//   galleryThumbs.slideTo(galleryMain.activeIndex);
// });

// galleryThumbs.on("transitionStart", function () {
//   galleryMain.slideTo(galleryThumbs.activeIndex);
// });

// tippy(".tippy", {
//   theme: "light",
//   size: "big",
//   arrow: true,
// });
