<template>
  <div>
    <!-- Section Page Heading Start   -->
    <section class="page-heading">
      <img
        :src="imageApi + afterSalesService.bannerImage"
        class="img-fluid"
        alt=""
        v-if="afterSalesService"
      />
      <div class="page-heading-info">
        <div>
          <h1 class="text-uppercase" v-if="afterSalesService">
            {{ afterSalesService.title }}
          </h1>
        </div>
      </div>
    </section>
    <!-- Section Page Heading End   -->

    <!-- Section Content Vision Start -->
    <section class="section-content py-5">
      <div class="container">
        <div class="row mb-4">
          <div class="col-sm-12 col-lg-10 m-auto">
            <p class="text-uppercase text-center" v-if="afterSalesService">
              {{ afterSalesService.subTitle }}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <a href="javascript:void(0);" class="sales-service-box featured">
              <div class="sales-image">
                <img src="@/assets/images/s1.png" class="img-fluid" alt="" />
              </div>
              <div class="sales-content">
                <h3>Integrity</h3>
                <p>Original spare parts and transparent and reasonable price</p>
              </div>
            </a>
          </div>
          <div class="col-sm-8">
            <div class="row">
              <div class="col-sm-6">
                <a href="javascript:void(0);" class="sales-service-box">
                  <div class="sales-image">
                    <img
                      src="@/assets/images/s2.png"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="sales-content">
                    <h3>Warm</h3>
                    <p>
                      Convenient service service dealers and quick repair and
                      maintenance
                    </p>
                  </div>
                </a>
              </div>
              <div class="col-sm-6">
                <a href="javascript:void(0);" class="sales-service-box">
                  <div class="sales-image">
                    <img
                      src="@/assets/images/s3.png"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="sales-content">
                    <h3>Care</h3>
                    <p>
                      Focus on customer needs and dedicated after-sales service
                    </p>
                  </div>
                </a>
              </div>
              <div class="col-sm-12">
                <a href="javascript:void(0);" class="sales-service-box">
                  <div class="sales-image">
                    <img
                      src="@/assets/images/s4.png"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="sales-content">
                    <h3>Professional</h3>
                    <p>Advanced facilities and professional service team</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Content Vision End -->

    <!-- Section Sales Service Point Start -->
    <section class="section-sales-services py-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 m-auto">
            <div class="text-center text-white mt-3" v-if="afterSalesService">
              <h4>{{ afterSalesService.worldTitle }}</h4>
              <p>{{ afterSalesService.worldSubTitle }}</p>
            </div>
            <div class="map-image my-5">
              <img
                :src="imageApi + afterSalesService.worldimage"
                class="img-fluid mx-auto"
                alt=""
                v-if="afterSalesService"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="featured-service-banner mt-5">
              <div class="featured-service-image">
                <img
                  :src="imageApi + afterSalesService.featureimage"
                  class="img-fluid"
                  alt=""
                  v-if="afterSalesService"
                />
              </div>
              <div class="featured-service-content" v-if="afterSalesService">
                <h4>{{ afterSalesService.featureTitle }}</h4>
                <p>
                  {{ afterSalesService.featureSubTitle }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-if="featureServices">
          <div
            class="col-sm-4"
            v-for="(service, index) in featureServices"
            :key="index"
          >
            <a href="javascript:void(0);" class="qabox">
              <div class="qabox-image">
                <img :src="imageApi + service.image" class="img-fluid" alt="" />
              </div>
              <h4>{{ service.title }}</h4>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Sales Service Point End -->

    <!-- Section Questionnaire Start -->
    <section class="section-questionnaire">
      <img
        src="@/assets/images/banner-questionnaire.png"
        class="img-fluid"
        alt=""
      />
      <div class="section-questionnaire-content">
        <div>
          <h3>Please Click To Fill In The Questionnaire</h3>
          <h5>45 after-sales service channels and 189 service dealers</h5>
          <NuxtLink class="btn btn-outline-light">Lorem Ipsum</NuxtLink>
        </div>
      </div>
    </section>
    <!-- Section Questionnaire End -->
  </div>
</template>

<script>
import { useAfterSalesServiceStore } from "../../store/modules/afterSalesService";
import { useFeatureServicesStore } from "../../store/modules/featureServices";
import imageApi from "~/helpers/imageapi";
export default {
  name: "AfterSalesService Page",
  layout: "default",
  components: {},
  data() {
    return {
      imageApi: imageApi,
      afterSalesSeviceStore: useAfterSalesServiceStore(),
      featureServicesStore: useFeatureServicesStore(),
    };
  },
  computed: {
    afterSalesService() {
      return this.afterSalesSeviceStore.getAfterSalesService;
    },
    featureServices() {
      return this.featureServicesStore.getFeatureServices;
    },
  },
  mounted() {
    this.fetchAfterSalesService();
    this.fetchFeatureServices();
  },
  methods: {
    fetchAfterSalesService() {
      this.afterSalesSeviceStore.fetchAfterSalesService();
    },
    fetchFeatureServices() {
      this.featureServicesStore.fetchFeatureServices();
    },
  },
};
</script>
