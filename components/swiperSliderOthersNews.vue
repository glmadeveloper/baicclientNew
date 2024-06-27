<template>
  <swiper
    :slides-per-view="1"
    :space-between="1"
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    :autoplay="{
      delay: 2500,
    }"
  >
    <swiper-slide v-for="(item, index) in otherNewsRelease" :key="index">
      <div class="other-news-box">
        <div class="row">
          <div class="col-sm-4">
            <div class="other-news-box-image">
              <img :src="imageApi + item.image" class="img-fluid" alt="" />
            </div>
          </div>
          <div class="col-sm-8">
            <div class="other-news-box-content">
              <h4>
                <!-- <a href="#"
                  >BAIC JoyTech: First in China! Magic Core Power has obtained
                  the “Excellent Silent Engine” (3A) certification</a
                > -->
                {{ item.title }}
              </h4>
              <!-- <p>
                BAIC JoyTech: First in China! Magic Core Power has obtained the
                “Excellent Silent Engine” (3A) certification.Marking that the
                NVH performance of BAIC’s self-developed hybrid engine has
                topped in China.
              </p> -->
              <p>{{ item.subTitle }}</p>
              <div class="news-meta">
                <div class="date">
                  {{ new Date(item.createdAt) }}
                </div>
                <a href="#" class="btn btn-outline-dark">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <!-- <swiper-slide>
      <div class="other-news-box">
        <div class="row">
          <div class="col-sm-4">
            <div class="other-news-box-image">
              <img
                src="@/assets/images/news-image.png"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div class="col-sm-8">
            <div class="other-news-box-content">
              <h4>
                <a href="#"
                  >BAIC JoyTech: First in China! Magic Core Power has obtained
                  the “Excellent Silent Engine” (3A) certification</a
                >
              </h4>
              <p>
                BAIC JoyTech: First in China! Magic Core Power has obtained the
                “Excellent Silent Engine” (3A) certification.Marking that the
                NVH performance of BAIC’s self-developed hybrid engine has
                topped in China.
              </p>
              <div class="news-meta">
                <div class="date">2024-01-04</div>
                <a href="#" class="btn btn-outline-dark">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="other-news-box">
        <div class="row">
          <div class="col-sm-4">
            <div class="other-news-box-image">
              <img
                src="@/assets/images/news-image.png"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div class="col-sm-8">
            <div class="other-news-box-content">
              <h4>
                <a href="#"
                  >BAIC JoyTech: First in China! Magic Core Power has obtained
                  the “Excellent Silent Engine” (3A) certification</a
                >
              </h4>
              <p>
                BAIC JoyTech: First in China! Magic Core Power has obtained the
                “Excellent Silent Engine” (3A) certification.Marking that the
                NVH performance of BAIC’s self-developed hybrid engine has
                topped in China.
              </p>
              <div class="news-meta">
                <div class="date">2024-01-04</div>
                <a href="#" class="btn btn-outline-dark">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide> -->
  </swiper>
</template>
<script>
import { useNewsReleaseStore } from "../../store/modules/newRelease";

import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/vue";
import imageApi from "~/helpers/imageapi";

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
    // const onSwiper = swiper => {
    //   console.log(swiper);
    // };
    // const onSlideChange = () => {
    //   console.log("slide change");
    // };
    return {
      // onSwiper,
      // onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, Autoplay],
    };
  },
  data() {
    return {
      imageApi: imageApi,
      newsReleaseStore: useNewsReleaseStore(),
    };
  },
  computed: {
    newsReleases() {
      return this.newsReleaseStore.getNewsRelease;
    },
    otherNewsRelease() {
      if (this.newsReleases) {
        return this.newsReleases.filter(n => n.otherNews == true);
      }
    },
  },
};
</script>
