<template>
  <div>
    <!-- Section Page Heading Start   -->
    <section class="page-heading">
      <img
        :src="imageApi + conceptCarObj?.bannerImage"
        class="img-fluid"
        alt=""
      />
    </section>
    <!-- Section Page Heading End   -->

    <!-- Section Content Vision Start -->
    <section class="section-content py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-8">
            <div class="title-joy mb-4">
              <h2>{{ conceptCarObj?.section_1_title }}</h2>
              <p>{{ conceptCarObj?.section_1_description }}</p>
            </div>
          </div>
          <div class="col-sm-3 ms-auto">
            <div class="imgbox">
              <img
                :src="imageApi + conceptCarObj?.section_1_image"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Content Vision End -->

    <!-- Section Start -->
    <section class="section-car-variations pb-5">
      <img
        :src="imageApi + conceptCarObj?.section_2_image"
        class="img-fluid"
        alt=""
      />
    </section>
    <!-- Section End -->
    <!-- Regarding Text Start -->
    <section class="section-regarding_text pb-0">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-10 m-auto text-center">
            <p>{{ conceptCarObj?.section_2_description }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Regarding Text End -->

    <!-- Animation Start -->
    <section id="wrapper" class="carAnimationTop">
      <div class="car_box">
        <div class="car_text">The balanced number: Five</div>
        <div class="fangkuai">
          <img src="@/assets/images/icon.png" />
          <img src="@/assets/images/icon.png" />
          <img src="@/assets/images/icon.png" />
          <img src="@/assets/images/icon.png" />
          <img src="@/assets/images/icon.png" />
        </div>
        <div class="car_content">
          <div class="three_car">
            <div class="k_text">
              <div class="car_title1 title1">Joyful</div>
              <div class="describe describe1">Off-road performance</div>
            </div>
            <div class="zhezhao"></div>
            <img
              src="@/assets/images/v1.png"
              class="car_animation car1 img-fluid"
            />
            <img
              src="@/assets/images/light1.png"
              class="light car1_light img-fluid"
            />
          </div>
          <div class="three_car">
            <div class="k_text">
              <div class="car_title1 title2">Joyful</div>
              <div class="describe describe2">Outdoor experience</div>
            </div>
            <div class="zhezhao"></div>
            <img
              src="@/assets/images/v2.png"
              class="car_animation car2 img-fluid"
            />
            <img
              src="@/assets/images/light2.png"
              class="light car2_light img-fluid"
            />
          </div>
          <div class="three_car">
            <div class="k_text">
              <div class="car_title1 title3">Joyful</div>
              <div class="describe describe3">Stylish journey</div>
            </div>
            <div class="zhezhao"></div>
            <img
              src="@/assets/images/v3.png"
              class="car_animation car3 img-fluid"
            />
            <img
              src="@/assets/images/light3.png"
              class="light car3_light img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- Animation End -->
    <!-- Regarding Text Start -->
    <section class="section-regarding_text">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-10 m-auto text-center">
            <p>
              {{ conceptCarObj?.section_4_main_description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Regarding Text End -->
    <!-- Car Arrow Animation1 Start -->
    <section class="carAnimationTop1">
      <div class="carAnimation_arrow">
        <img src="@/assets/images/car_image1.jpg" class="topimage" />
        <div class="zhezhao"></div>
        <div class="car_line">
          <div class="car_line_box">
            <img src="@/assets/images/car_line1.png" class="car_line_img" />
          </div>
        </div>
        <div class="arrow_box">
          <img
            src="@/assets/images/car_image1_arrow_left.png"
            class="arrow_left"
          />
          <img
            src="@/assets/images/car_image1_arrow_right.png"
            class="arrow_right"
          />
        </div>
        <div class="text_box">
          <div class="left_text">
            <div class="left_box_subtext hover_mobile">
              <div
                class="content"
                style="max-height: 10vw; -webkit-line-clamp: 1"
              >
                {{ conceptCarObj?.section_5_description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Car Arrow Animation1 End -->

    <!-- Car Arrow Animation2 Start -->
    <section class="carAnimationTop2">
      <div class="carAnimation_arrow">
        <img src="@/assets/images/car_image2.jpg" />
        <div class="zhezhao"></div>
        <div class="car_line car_line_shadow">
          <div class="car_line_box_shadow">
            <img
              src="@/assets/images/car_imag2_line1.png"
              style="height: 211.2px"
            />
          </div>
        </div>
        <div class="car_line1">
          <div class="car_line_box2">
            <img
              src="@/assets/images/car_imag2_line2.png"
              style="height: 383.981px"
            />
          </div>
        </div>
        <div class="text_box">
          <div class="left_text">
            <div class="left_box_subtext hover_mobile">
              <div
                class="content"
                style="max-height: 10vw; -webkit-line-clamp: 1"
              >
                {{ conceptCarObj?.section_6_description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Car Arrow Animation2 End -->

    <!-- Section Start -->
    <section class="section-stylish pt-5 pb-4">
      <div class="container">
        <div class="row mb-4 align-items-center">
          <div class="col-sm-5">
            <div class="title-stylish">
              <h2 class="fw-bold">{{ conceptCarObj?.section_7_title }}</h2>
              <p>{{ conceptCarObj?.section_7_description }}</p>
            </div>
          </div>
          <div class="col-sm-7">
            <div class="img-box">
              <img
                :src="imageApi + conceptCarObj?.section_7_image"
                class="img-fluid w-100"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-sm-7">
            <div class="img-box">
              <img
                :src="imageApi + conceptCarObj?.section_8_image"
                class="img-fluid w-100"
                alt=""
              />
            </div>
          </div>
          <div class="col-sm-5">
            <div class="title-stylish p-5">
              <p>{{ conceptCarObj?.section_8_description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section End -->

    <!-- Section Scenario Design Start -->
    <section class="section-scenario-design">
      <img
        :src="imageApi + conceptCarObj?.section_9_image"
        class="img-fluid"
        alt=""
      />
      <div class="scenario-design-content">
        <h3>{{ conceptCarObj?.section_9_title }}</h3>
      </div>
    </section>
    <!-- Section Scenario Design End -->

    <!-- Section Start -->
    <section class="section-panels py-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="panel-box text-center mb-4">
              <!-- <h4 class="mb-4">Ripple-design control panel</h4> -->
              <h4 class="mb-4">{{ conceptCarObj?.section_10_title1 }}</h4>
              <div class="panel-image">
                <img
                  :src="imageApi + conceptCarObj?.section_10_image1"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="panel-box text-center mb-4">
              <!-- <h4 class="mb-4">"福"character sound panel</h4> -->
              <h4 class="mb-4">{{ conceptCarObj?.section_10_title2 }}</h4>
              <div class="panel-image">
                <img
                  :src="imageApi + conceptCarObj?.section_10_image2"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="panel-box text-center mb-4">
              <!-- <h4 class="mb-4">Oriental style cockpit</h4> -->
              <h4 class="mb-4">{{ conceptCarObj?.section_10_title3 }}</h4>
              <div class="panel-image">
                <img
                  :src="imageApi + conceptCarObj?.section_10_image3"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="panel-box">
              <h4 class="mb-4">{{ conceptCarObj?.section_10_title4 }}</h4>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="panel-box">
              <div class="panel-image">
                <img
                  :src="imageApi + conceptCarObj?.section_10_image4"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section End -->
  </div>
</template>

<script>
import { useConceptCarStore } from "../../store/modules/conceptCar";
import imageApi from "~/helpers/imageapi";
export default {
  name: "Concept Car",
  layout: "default",
  components: {},
  data() {
    return {
      imageApi: imageApi,
      conceptCarStore: useConceptCarStore(),
    };
  },
  computed: {
    conceptCarObj() {
      return this.conceptCarStore.getConceptCar;
    },
  },
  mounted() {
    this.fetchConceptCar();
  },
  methods: {
    fetchConceptCar() {
      this.conceptCarStore.fetchConceptCar();
    },
  },
};
</script>
