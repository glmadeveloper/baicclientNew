<template>
  <div>
    <!--Single Car Details Start-->
    <section class="section-single-car d-flex align-items-center">
      <div class="container">
        <div class="single-car-details">
          <div class="row align-items-center">
            <div class="col-sm-4">
              <div class="single-car-content">
                <h2>{{ modelDetail?.name }}</h2>
                <p>{{ modelDetail?.description }}</p>
                <div class="vehicle-features">
                  <div class="row">
                    <div class="col col-4">
                      <div class="vehicle-feature-box">
                        <img
                          src="@/assets/images/icon-dashboard.png"
                          class="img-fluid"
                          alt=""
                        />
                        <h4>{{ modelDetail?.power }}</h4>
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
                        <!-- <h4>206 <small>kw</small></h4> -->
                        <h4>{{ modelDetail?.torque }}</h4>
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
                        <h4>{{ modelDetail?.wheelbase }}</h4>
                        <p>WHEELBASE</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vehicle-color-variations">
                  <ul class="color-list">
                    <li
                      class="color-item"
                      v-for="(modelColor, index) in modelsWithColors"
                      :key="index"
                      :class="{ active: activeColor == modelColor.color }"
                      @click="selectColor(modelColor.color, index)"
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
                  <NuxtLink to="/" class="btn btn-outline-dark mx-1"
                    >View VR</NuxtLink
                  >
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="gallery-image">
                <img
                  :src="imageApi + modelDetail?.image1"
                  alt="Slide 01"
                  class="img-fluid xyz-in"
                  xyz="fade ease-in right-25% duration-10"
                  v-if="!activeColor"
                />
                <img
                  v-else
                  alt="Slide 01"
                  class="img-fluid xyz-in"
                  xyz="fade ease-in right-25% duration-10"
                  :src="imageApi + modelsWithColors[indexColor]?.image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Single Car Details End-->
    <!-- Single Car Banner Start -->
    <section class="single-car-banner">
      <div class="container">
        <img :src="imageApi + modelDetail?.image2" class="img-fluid" alt="" />
        <div class="single-car-banner-info">
          <h2>{{ modelDetail?.image2_title }}</h2>
          <h4>{{ modelDetail?.image2_description }}</h4>
        </div>
      </div>
    </section>
    <!-- Single Car Banner End -->
    <!-- Single Car Feature Box Start -->
    <section class="single-car-features">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="car-feature-box">
              <img
                :src="imageApi + modelDetail?.image3"
                class="img-fluid"
                alt=""
              />
              <div class="car-feature-info">
                <h2>{{ modelDetail?.image3_title }}</h2>
                <h4>{{ modelDetail?.image3_description }}</h4>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="car-feature-box">
              <img
                :src="imageApi + modelDetail?.image4"
                class="img-fluid"
                alt=""
              />
              <div class="car-feature-info">
                <h2>{{ modelDetail?.image4_title }}</h2>
                <h4>{{ modelDetail?.image4_description }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Single Car Feature Box End -->
    <!-- Single Car Video Box Start -->
    <section class="car-video-section">
      <div class="container">
        <img :src="imageApi + modelDetail?.image5" class="img-fluid" alt="" />
      </div>
    </section>
    <!-- Single Car Video Box End -->
  </div>
</template>
<script>
import { useModelsStore } from "../../store/modules/models";
import { useModelColorsStore } from "../store/modules/modelColor";
import imageApi from "~/helpers/imageapi";
export default {
  data() {
    return {
      modelStore: useModelsStore(),
      modelColorStore: useModelColorsStore(),
      imageApi,
      activeColor: null,
      indexColor: 0,
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    modelsColors() {
      return this.modelColorStore.getModelColors;
    },
    modelDetail() {
      if (this.id) {
        return this.modelStore.getModelDetail;
      }
    },
    modelsWithColors() {
      let modelColorArr = [];
      if (this.modelDetail && this.modelsColors) {
        this.modelsColors.forEach(color => {
          if (this.id == color.modelId) {
            modelColorArr.push(color);
          }
        });
      }
      return modelColorArr;
    },
  },
  mounted() {
    this.fetchModelDetail();
    this.fetchModelColors();
  },
  methods: {
    fetchModelDetail() {
      if (this.id) {
        this.modelStore.fetchModelDetail(this.id);
      }
    },
    fetchModelColors() {
      if (this.id) {
        this.modelColorStore.fetchModelColors();
      }
    },
    selectColor(colorName, index) {
      this.activeColor = colorName;
      this.indexColor = index;
    },
  },
};
</script>
