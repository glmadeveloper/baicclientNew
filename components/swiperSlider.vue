<template>
  <swiper
    :slides-per-view="1"
    :space-between="1"
    :pagination="pagination"
    :scrollbar="{ draggable: true }"
    :loop="true"
    :autoplay="{
      delay: 2500,
    }"
    :modules="modules"
  >
    <swiper-slide>
      <img :src="imageApi + homeObj?.banner_image1" alt="" class="img-fluid" />
      <div class="slider-info">
        <div>
          <h1>{{ homeObj?.banner_image1_title }}</h1>
          <h5>
            {{ homeObj?.banner_image1_description }}
          </h5>
          <div class="text-center slider-action-buttons">
            <NuxtLink
              :to="homeObj?.banner_image1_button1_url"
              class="btn btn-outline-light"
              >{{ homeObj?.banner_image1_button1 }}</NuxtLink
            >
            <NuxtLink
              :to="homeObj?.banner_image1_button2_url"
              class="btn btn-light"
              >{{ homeObj?.banner_image1_button2 }}</NuxtLink
            >
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img :src="imageApi + homeObj?.banner_image2" alt="" class="img-fluid" />
      <div class="slider-info">
        <div>
          <h1>{{ homeObj?.banner_image2_title }}</h1>
          <h5>
            {{ homeObj?.banner_image2_description }}
          </h5>
          <div class="text-center slider-action-buttons">
            <NuxtLink
              :to="homeObj?.banner_image2_button1_url"
              class="btn btn-outline-light"
              >{{ homeObj?.banner_image2_button1 }}</NuxtLink
            >
            <NuxtLink
              :to="homeObj?.banner_image2_button2_url"
              class="btn btn-light"
              >{{ homeObj?.banner_image2_button2 }}</NuxtLink
            >
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img :src="imageApi + homeObj?.banner_image3" alt="" class="img-fluid" />
      <div class="slider-info">
        <div>
          <h1>{{ homeObj?.banner_image3_title }}</h1>
          <h5>
            {{ homeObj?.banner_image3_description }}
          </h5>
          <div class="text-center slider-action-buttons">
            <NuxtLink
              :to="homeObj?.banner_image3_button1_url"
              class="btn btn-outline-light"
              >{{ homeObj?.banner_image3_button1 }}</NuxtLink
            >
            <NuxtLink
              :to="homeObj?.banner_image3_button2_url"
              class="btn btn-light"
              >{{ homeObj?.banner_image3_button2 }}</NuxtLink
            >
          </div>
        </div>
      </div>
    </swiper-slide>
    <!-- <swiper-slide>Slide 3</swiper-slide> -->
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { useHomeStore } from "../store/modules/home";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import imageApi from "~/helpers/imageapi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, Autoplay],
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1" aria-current="true"></span>';
        },
      },
    };
  },
  data() {
    return {
      homeStore: useHomeStore(),
      imageApi,
    };
  },
  computed: {
    homeObj() {
      return this.homeStore.getHome;
    },
  },
};
</script>
