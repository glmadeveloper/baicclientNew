<template>
  <div>
    <!-- Section Beauty Start   -->
    <section class="section-beauty" v-if="capitalBeautyObj">
      <img
        :src="imageApi + capitalBeautyObj?.bannerImage"
        class="img-fluid"
        alt=""
      />
      <div class="beauty-info">
        <h2>{{ capitalBeautyObj?.bannerTitle }}</h2>
        <h4 class="text-uppercase font-w-6">
          {{ capitalBeautyObj?.bannerSubTitle }}
        </h4>
        <!-- <div class="text-center">
          <NuxtLink to="/" class="btn btn-outline-secondary">{{
            capitalBeautyObj?.bannerTitle
          }}</NuxtLink>
        </div> -->
      </div>
    </section>
    <!-- Section Beauty End   -->

    <!-- Section Beauty Features Start   -->
    <section class="section-content" v-if="capitalBeautyObj">
      <div class="beauty-introduction my-5">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-sm-4 col-lg-4">
              <img
                :src="imageApi + capitalBeautyObj?.image1"
                class="img-fluid"
                alt="CAPITAL BEAUTY"
              />
            </div>
            <div class="col-sm-6 col-lg-4 text-end">
              <h4>{{ capitalBeautyObj?.image1Description }}</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="stripe-glory-dream" v-if="capitalBeautyObj">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <ul class="glory-stripe">
                <li>
                  <div class="img-box">
                    <img
                      :src="imageApi + capitalBeautyObj?.gdImage1"
                      class="img-fluid"
                      alt="Glory Image"
                    />
                  </div>
                </li>
                <li>
                  <div class="img-box">
                    <span>Glory</span>
                    <img
                      :src="imageApi + capitalBeautyObj?.gdImage2"
                      class="img-fluid"
                      alt="Glory Image"
                    />
                  </div>
                </li>
                <li>
                  <div class="img-box">
                    <img
                      :src="imageApi + capitalBeautyObj?.gdImage3"
                      class="img-fluid"
                      alt="Glory Image"
                    />
                  </div>
                </li>
                <li>
                  <div class="img-box">
                    <span>Dream</span>
                    <img
                      :src="imageApi + capitalBeautyObj?.gdImage4"
                      class="img-fluid"
                      alt="Glory Image"
                    />
                  </div>
                </li>
                <li>
                  <div class="img-box">
                    <img
                      :src="imageApi + capitalBeautyObj?.gdImage5"
                      class="img-fluid"
                      alt="Glory Image"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="beauty-concept pt-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <div class="beauty-style-box">
                <div class="style-box-image">
                  <img
                    src="@/assets/images/style1.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="style-box-content">
                  <h4 class="text-uppercase fw-bold">Confidence</h4>
                  <h6>
                    Peaceful, calm, simple <br />
                    but nat shallow
                  </h6>
                </div>
              </div>
              <div class="beauty-style-box">
                <img
                  src="@/assets/images/style4.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div class="col-sm-4">
              <h3 class="text-center py-4 text-uppercase fw-bold">
                CAPITAL BEAUTY: <br /><br />
                KEYWORDS OF THE DESIGN CONCEPT ARE...
              </h3>
              <div class="beauty-style-box">
                <div class="style-box-image">
                  <img
                    src="@/assets/images/style2.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="style-box-content">
                  <h4 class="text-uppercase fw-bold">Warmth</h4>
                  <h6>
                    Friendly, practical, comfortable <br />
                    but not exaggerated
                  </h6>
                </div>
              </div>
              <div class="beauty-style-box">
                <div class="style-box-image">
                  <img
                    src="@/assets/images/style5.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="beauty-style-box">
                <div class="style-box-image">
                  <img
                    src="@/assets/images/style3.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="style-box-content">
                  <h4 class="text-uppercase fw-bold">Oriental Style</h4>
                  <h6>
                    Unique, aesthetic, stylish <br />
                    but not conservative
                  </h6>
                </div>
              </div>
              <div class="beauty-style-box">
                <div class="style-box-image">
                  <img
                    src="@/assets/images/style6.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="style-box-content"></div>
              </div>
              <h2 class="text-center p-2 text-uppercase fw-light">
                The essence of <br /><br />
                <span class="fw-bold"
                  >"leaving <br />
                  blank"</span
                ><br />
                expands new reverie
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="section-beauty-simplicity" v-if="capitalBeautyObj">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-5">
              <div class="beauty-simplicity-content">
                <h2>{{ capitalBeautyObj?.image2Title }}</h2>
                <p>
                  {{ capitalBeautyObj?.image2Description }}
                </p>
              </div>
            </div>
            <div class="col-sm-7">
              <div class="beauty-simplicity-image">
                <img
                  :src="imageApi + capitalBeautyObj?.image2"
                  class="img-fluid"
                  alt="MODERN SIMPLICITY"
                />
              </div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-sm-8 p-5">
              <div class="beauty-simplicity-image">
                <img
                  :src="imageApi + capitalBeautyObj?.image3"
                  class="img-fluid"
                  alt="WARM EXPERIENCE"
                />
              </div>
            </div>
            <div class="col-sm-4">
              <div class="beauty-simplicity-content text-end">
                <h2>{{ capitalBeautyObj?.image3Title }}</h2>
                <p>{{ capitalBeautyObj?.image3Description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Beauty Features End   -->

    <!-- Section Banner Start   -->
    <section class="section" v-if="capitalBeautyObj">
      <div class="banner-box">
        <img
          :src="imageApi + capitalBeautyObj?.image4"
          class="img-fluid"
          alt="Image Priview"
        />
      </div>
    </section>
    <!-- Section Banner End   -->
  </div>
</template>

<script>
import { useCapitalBeautyStore } from "../../store/modules/capitalBeauty";

import imageApi from "~/helpers/imageapi";
export default {
  name: "Capital Beauty Page",
  layout: "default",
  components: {},
  data() {
    return {
      imageApi: imageApi,
      capitalBeautyStore: useCapitalBeautyStore(),
    };
  },
  computed: {
    capitalBeautyObj() {
      return this.capitalBeautyStore.getCapitalBeauty;
    },
  },
  mounted() {
    this.fetchCapitalBeauty();
  },
  methods: {
    fetchCapitalBeauty() {
      this.capitalBeautyStore.fetchCapitalBeauty();
    },
  },
};
</script>
