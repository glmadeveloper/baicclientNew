<template>
  <div>
    <!-- Section Page Heading Start   -->
    <section class="page-heading">
      <img
        src="@/assets/images/vision-page-heading.png"
        class="img-fluid"
        alt=""
      />
      <div class="page-heading-info">
        <div>
          <h4 class="text-uppercase">Brand Vision</h4>
          <h2 class="text-uppercase">
            Time-honored BAIC Contributes <br />To A Wonderful Life
          </h2>
        </div>
      </div>
    </section>
    <!-- Section Page Heading End   -->

    <!-- Section Content Vision Start -->
    <section class="section-content content-vision py-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div
              class="vision-banner-box"
              v-for="(vision, index) in visons"
              :key="index"
              :class="index % 2 == 0 ? 'right' : ''"
            >
              <img :src="imageApi + vision.image" class="img-fluid" alt="" />
              <div class="vision-banner-content">
                <div>
                  <h4>{{ vision.title }}</h4>
                  <h3>{{ vision.subTitle }}</h3>
                </div>
              </div>
            </div>
            <!-- <div class="vision-banner-box">
              <img
                src="@/assets/images/vision-banner2.png"
                class="img-fluid"
                alt=""
              />
              <div class="vision-banner-content">
                <div>
                  <h4>Brand Tonality</h4>
                  <h3>
                    Caring <br />
                    Confident <br />
                    Characteristic
                  </h3>
                </div>
              </div>
            </div>
            <div class="vision-banner-box right">
              <img
                src="@/assets/images/vision-banner3.png"
                class="img-fluid"
                alt=""
              />
              <div class="vision-banner-content">
                <div>
                  <h4>Brand Slogan</h4>
                  <h3>Always Be With You</h3>
                </div>
              </div>
            </div>
            <div class="vision-banner-box">
              <img
                src="@/assets/images/vision-banner4.png"
                class="img-fluid"
                alt=""
              />
              <div class="vision-banner-content">
                <div>
                  <h4>Brand Tonality</h4>
                  <h3>
                    Time-honored BAIC Contributes <br />
                    To A Wonderful Life
                  </h3>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </section>
    <!-- Section Content Vision End -->
  </div>
</template>

<script>
import { useVisionStore } from "../../store/modules/vision";
import imageApi from "~/helpers/imageapi";
export default {
  name: "Vision Page",
  layout: "default",
  components: {},
  data() {
    return {
      imageApi: imageApi,
      visionStore: useVisionStore(),
    };
  },
  computed: {
    visons() {
      return this.visionStore.getVision;
    },
  },
  mounted() {
    this.fetchVision();
  },
  methods: {
    fetchVision() {
      this.visionStore.fetchVision();
    },
  },
};
</script>
