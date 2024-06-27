<template>
  <div>
    <!-- Section Page Heading Start   -->
    <section class="page-heading" v-if="offRoadObj">
      <img :src="imageApi + offRoadObj?.bannerImage" class="img-fluid" alt="" />
      <div
        class="page-heading-info"
        style="right: 0; left: auto; padding-right: 100px; padding-left: 0"
      >
        <div>
          <h1 class="text-uppercase">{{ offRoadObj?.bannerTitle }}</h1>
          <p>
            {{ offRoadObj?.bannerDescription }}
          </p>
        </div>
      </div>
    </section>
    <!-- Section Page Heading End   -->

    <!-- Section Content Vision Start -->
    <section
      class="section-vehicle-ability position-relative"
      v-if="offRoadObj"
    >
      <div class="car-pattern1">
        <img
          src="@/assets/images/pattern1-offroad.png"
          class="img-fluid"
          alt=""
        />
      </div>

      <div class="section-vehicle-verification-ability">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-sm-7">
              <div class="verification-ability-content">
                <p>{{ offRoadObj?.image1Description }}</p>
                <div class="title mt-5 mb-3 text-uppercase">
                  <h2>{{ offRoadObj?.image1Title }}</h2>
                </div>
                <p>{{ offRoadObj?.image1MainDescription }}</p>
              </div>
            </div>
            <div class="col-sm-5 p-0">
              <div class="verification-ability-image">
                <img
                  :src="imageApi + offRoadObj?.image1"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-vehicle-production-ability">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-sm-6 p-0">
              <div class="production-ability-image">
                <img
                  :src="imageApi + offRoadObj?.image2"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="production-ability-content">
                <div class="title mb-3 text-uppercase">
                  <h2>{{ offRoadObj?.image2Title }}</h2>
                </div>
                <p>
                  {{ offRoadObj?.image2Description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Content Vision End -->

    <!-- Section Reliability Start -->
    <section class="section-reliability">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-white">
            <h3 class="text-uppercase">{{ offRoadObj?.image3Title }}</h3>
            <p>{{ offRoadObj?.image3Description }}</p>
          </div>
        </div>
      </div>
      <img :src="imageApi + offRoadObj?.image3" class="img-fluid" alt="" />
    </section>
    <!-- Section Reliability End -->

    <!-- Section Timeline Slider Start -->
    <section class="section-timeline py-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <swiper
              class="sliderCarvariations"
              :pagination="pagination"
              :scrollbar="true"
              :modules="modules"
            >
              <swiper-slide>
                <img src="@/assets/images/slide.png" class="img-fluid" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/slide.png" class="img-fluid" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/slide.png" class="img-fluid" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/slide.png" class="img-fluid" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/slide.png" class="img-fluid" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/slide.png" class="img-fluid" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/slide.png" class="img-fluid" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/slide.png" class="img-fluid" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/slide.png" class="img-fluid" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img src="@/assets/images/slide.png" class="img-fluid" alt="" />
              </swiper-slide>
              <!-- <swiper-slide>Slide 3</swiper-slide> -->
            </swiper>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Timeline Slider End -->
  </div>
</template>

<script>
import { useOffRoadStore } from "../../store/modules/offRoad";
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

const menu = [
  "1960-1963",
  "1966",
  "1974",
  "1999",
  "2002",
  "2008",
  "2009",
  "2013",
  "2015",
  "Today",
];

export default {
  name: "Off Road Page",
  layout: "default",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      imageApi: imageApi,
      offRoadStore: useOffRoadStore(),
      modules: [Navigation, Pagination, Scrollbar, Autoplay],
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<div class="' +
            className +
            '"><span>' +
            menu[index] +
            "</span></div>"
          );
        },
      },
    };
  },
  computed: {
    offRoadObj() {
      return this.offRoadStore.getOffRoad;
    },
  },
  mounted() {
    this.fetchAfterSalesService();
  },
  methods: {
    fetchAfterSalesService() {
      this.offRoadStore.fetchOffRoad();
    },
  },
};
</script>
