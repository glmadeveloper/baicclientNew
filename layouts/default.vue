<template>
  <div>
    <header class="site-header position-absolute1">
      <Navbar />
    </header>
    <main>
      <slot />
    </main>
    <footer id="footer" class="section-footer pt-5 pb-4">
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import $ from "jquery";

export default {
  head: {
    script: [
      {
        type: "text/javascript",
        src: "~/assets/js/script.js",
        defer: true,
      },
    ],
  },
  name: "IndexPage",
  layout: "default",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      locale: this.$i18n.locale,
    };
  },
  mounted() {
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

    function isInScreenPlusOffset(el, offset) {
      var rect = el[0].getBoundingClientRect();
      return rect.top >= -offset && rect.bottom <= $(window).height() + offset;
    }

    $(window).on("scroll", function (e) {
      $(".car_text").each(function (i) {
        var thisBox = $(this);
        thisBox.toggleClass("car_text_an", isInScreenPlusOffset(thisBox, 300));
      });

      $(".fangkuai").each(function (i) {
        var thisBox = $(this);
        thisBox.toggleClass("text", isInScreenPlusOffset(thisBox, 300));
      });

      $(".light").each(function (i) {
        var thisBox = $(this);
        thisBox.toggleClass("light_an", isInScreenPlusOffset(thisBox, 200));
      });

      $(".car1").each(function (i) {
        var thisBox = $(this);
        thisBox.toggleClass(
          "car1_animation1",
          isInScreenPlusOffset(thisBox, 100)
        );
      });

      $(".car2").each(function (i) {
        var thisBox = $(this);
        thisBox.toggleClass(
          "car1_animation2",
          isInScreenPlusOffset(thisBox, 200)
        );
      });

      $(".car3").each(function (i) {
        var thisBox = $(this);
        thisBox.toggleClass(
          "car1_animation3",
          isInScreenPlusOffset(thisBox, 300)
        );
      });

      $(".title1").each(function (i) {
        var thisBox = $(this);
        thisBox.toggleClass(
          "car_title1_an",
          isInScreenPlusOffset(thisBox, 100)
        );
      });

      $(".title2").each(function (i) {
        var thisBox = $(this);
        thisBox.toggleClass(
          "car_title2_an",
          isInScreenPlusOffset(thisBox, 200)
        );
      });

      $(".title3").each(function (i) {
        var thisBox = $(this);
        thisBox.toggleClass(
          "car_title3_an",
          isInScreenPlusOffset(thisBox, 300)
        );
      });

      $(".describe1").each(function (i) {
        var thisBox = $(this);
        thisBox.toggleClass("describe1_an", isInScreenPlusOffset(thisBox, 500));
      });

      $(".describe2").each(function (i) {
        var thisBox = $(this);
        thisBox.toggleClass("describe2_an", isInScreenPlusOffset(thisBox, 500));
      });

      $(".describe3").each(function (i) {
        var thisBox = $(this);
        thisBox.toggleClass("describe3_an", isInScreenPlusOffset(thisBox, 500));
      });

      // Car Line Animation
      $(".zhezhao").each(function (i) {
        var thisBox = $(this);
        thisBox.toggleClass("zhezhao1", isInScreenPlusOffset(thisBox, 500));
      });
      $(".car_line_box").each(function (i) {
        var thisBox = $(this);
        thisBox.toggleClass("car_an", isInScreenPlusOffset(thisBox, 500));
      });
      $(".arrow_box").each(function (i) {
        var thisBox = $(this);
        thisBox.toggleClass("zhezhao1", isInScreenPlusOffset(thisBox, 500));
      });
      $(".arrow_left").each(function (i) {
        var thisBox = $(this);
        thisBox.toggleClass("left_arrow", isInScreenPlusOffset(thisBox, 500));
      });
      $(".arrow_right").each(function (i) {
        var thisBox = $(this);
        thisBox.toggleClass("right_arrow", isInScreenPlusOffset(thisBox, 600));
      });
      $(".text_box").each(function (i) {
        var thisBox = $(this);
        thisBox.toggleClass("text1", isInScreenPlusOffset(thisBox, 500));
      });
      $(".car_line_box_shadow").each(function (i) {
        var thisBox = $(this);
        thisBox.toggleClass("car_an", isInScreenPlusOffset(thisBox, 900));
      });
      $(".car_line_box2").each(function (i) {
        var thisBox = $(this);
        thisBox.toggleClass("car_an", isInScreenPlusOffset(thisBox, 100));
      });
    });
  },
  methods: {
    switchLocale(lang) {
      this.$i18n.locale = lang;
      // this.$i18n.setLocale(lang);
      // this.$router.push("/" + lang);
    },
  },
};
// Any setup code or global layout logic can go here.
</script>

<style>
/* Add global layout styles here */
</style>
