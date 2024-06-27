<template>
  <div class="sliderModels">
    <swiper
      class="bigImage"
      ref="mainSwiper"
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :loop="true"
      :speed="2000"
      :parallax="true"
      :thumbs="{ swiper: thumbsSwiper }"
    >
      <swiper-slide v-for="(model, index) in modelsArray" :key="index">
        <div class="row">
          <div class="col-sm-4">
            <div class="gallery-content xyz-in" xyz="fade ease-in up-25%">
              <h3 class="">{{ model?.modelName }}</h3>

              <p>{{ model?.description }}</p>
              <div class="vehicle-features">
                <div class="row">
                  <div class="col col-4">
                    <div class="vehicle-feature-box">
                      <img
                        src="@/assets/images/icon-dashboard.png"
                        class="img-fluid"
                        alt=""
                      />

                      <h4>{{ model?.power }}</h4>
                      <p>POWER</p>
                    </div>
                  </div>
                  <div class="col col-4">
                    <div class="vehicle-feature-box">
                      <img
                        src="@/assets/images/icon-dashboard.png"
                        class="img-fluid"
                        alt=""
                      />

                      <h4>{{ model?.torque }}</h4>
                      <p>TORQUE</p>
                    </div>
                  </div>
                  <div class="col col-4">
                    <div class="vehicle-feature-box">
                      <img
                        src="@/assets/images/icon-dashboard.png"
                        class="img-fluid"
                        alt=""
                      />

                      <h4>{{ model?.wheelbase }}</h4>
                      <p>WHEELBASE</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="vehicle-color-variations">
                <ul class="color-list">
                  <li
                    class="color-item"
                    :class="{ active: activeColor == modelColor.color }"
                    @click="selectColor(modelColor.color, i)"
                    v-for="(modelColor, i) in model.colorArr"
                    :key="i"
                  >
                    <div
                      class="color-icon"
                      :style="{ 'background-color': modelColor.color }"
                    ></div>
                  </li>
                </ul>
              </div>
              <div class="vehicle-action-buttons">
                <NuxtLink to="/test-drive" class="btn btn-outline-dark mx-1"
                  >Test Drive</NuxtLink
                >
                <NuxtLink
                  to="/"
                  target="_blank"
                  class="btn btn-outline-dark mx-1"
                  >View VR</NuxtLink
                >
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="gallery-image">
              <img
                :src="imageApi + model?.image1"
                alt="Slide 01"
                class="img-fluid xyz-in"
                xyz="fade ease-in right-50%"
                v-if="!activeColor"
              />
              <img
                v-else
                alt="Slide 01"
                class="img-fluid xyz-in"
                xyz="fade ease-in right-50%"
                :src="imageApi + model.colorArr[indexColor]?.image"
              />
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <swiper
      class="thumbImage"
      ref="thumbsSwiper"
      @swiper="onSwiper"
      :centeredSlides="true"
      :centeredSlidesBounds="true"
      :slidesPerView="3"
      :watchOverflow="true"
      :watchSlidesVisibility="true"
      :watchSlidesProgress="true"
      :direction="'vertical'"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
    >
      <swiper-slide
        v-for="(model, index) in modelsArray"
        :key="index"
        @click="() => onClickCar()"
      >
        <img :src="imageApi + model?.image1" class="img-fluid" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SwiperCore from "swiper/core";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { useModelsStore } from "../store/modules/models";
import imageApi from "~/helpers/imageapi";
SwiperCore.use([FreeMode, Navigation, Thumbs]);

export default {
  props: {
    modelsArray: {
      type: Array, // array of { name, isSortable, id }
      required: false,
      default: [],
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      imageApi,
      thumbsSwiper: null,
      modelsStore: useModelsStore(),
      indexColor: 0,
      activeColor: null,
    };
  },
  computed: {
    models() {
      return this.modelsStore.getModels;
    },
  },
  mounted() {
    this.fetchModels();
  },
  methods: {
    onSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    fetchModels() {
      this.modelsStore.fetchModels();
    },
    selectColor(colorName, index) {
      this.activeColor = colorName;
      this.indexColor = index;
    },
    onClickCar() {
      this.activeColor = null;
      this.indexColor = 0;
    },
  },
};
</script>
