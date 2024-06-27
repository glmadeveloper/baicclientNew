<template>
  <div>
    <!-- Section Page Heading Start   -->
    <section class="page-heading" v-if="researchDevelopmentObj">
      <img
        :src="imageApi + researchDevelopmentObj.banner_image"
        class="img-fluid"
        alt=""
      />
      <div class="page-heading-info">
        <div>
          <!-- <h1 class="text-uppercase">
            research & <br />
            development
          </h1> -->
          <h1 class="text-uppercase">
            {{ researchDevelopmentObj.banner_title }}
          </h1>
        </div>
      </div>
    </section>
    <!-- Section Page Heading End   -->

    <!-- Section Baic Institude Start -->
    <section class="section-baic-institude py-5" v-if="researchDevelopmentObj">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title">
              <h3 class="fw-bold mb-4">
                {{ researchDevelopmentObj.section1_title }}
              </h3>
              <p>
                {{ researchDevelopmentObj?.section1_short_description_1 }}
              </p>
            </div>
            <div class="institude-timeline">
              <ul>
                <li>
                  Vehicle <br />
                  Architecture
                </li>
                <li>
                  Power <br />
                  Development
                </li>
                <li>
                  Modelling <br />
                  Design
                </li>
                <li>
                  Perfomance <br />
                  Development
                </li>
                <li>
                  Intelligent <br />
                  Network
                </li>
                <li>
                  Trail Production <br />
                  Test
                </li>
                <li>
                  EIC <br />
                  Development
                </li>
              </ul>
            </div>
            <p>
              {{ researchDevelopmentObj?.section1_short_description_2 }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Baic Institude End -->

    <!-- Section Content Vision Start -->
    <section class="section-vehicle-innovation" v-if="researchDevelopmentObj">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="title mb-3 text-white">
              <!-- <h2>
                New Energy <br />
                Vehicle <br />
                Innovation
              </h2> -->
              <h2>{{ researchDevelopmentObj.section2_title }}</h2>
              <p>
                {{ researchDevelopmentObj.section2_description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Content Vision End -->

    <!-- Section Connected Vehicle Start -->
    <section
      class="section-connected-vehicle py-5"
      v-if="researchDevelopmentObj"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <img
              :src="imageApi + researchDevelopmentObj.section3_image"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-sm-6 text-end">
            <div class="title">
              <!-- <h2>
                Smart Connected <br />
                Vehicle
              </h2> -->
              <h2>{{ researchDevelopmentObj.section3_title }}</h2>
            </div>
            <p>
              {{ researchDevelopmentObj.section3_description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Connected Vehicle End -->

    <!-- Section Power Engine Start -->
    <section class="section-power-engine pb-5" v-if="researchDevelopmentObj">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="custom-title">
              <h3>Power</h3>
            </div>
          </div>
        </div>
        <div class="row mb-5 engine-row1">
          <div class="col-sm-6">
            <div class="title">
              <!-- <h2>
                Magic Core <br />
                Power-Rewarded <br />
                CHINA10 BEST ENGINES
              </h2> -->
              <h2>
                {{ researchDevelopmentObj.section4_left_title }}
              </h2>
            </div>
            <!-- <ul class="engine-features">
              <li>Up to 21 denoising technologies</li>
              <li>Idle noise as low as 57.5db</li>
              <li>Maximum torque: 305N·m</li>
              <li>Maximum power: 138KW</li>
              <li>Thermal efficiency up to 39.2%</li>
              <li>40000+ hours full scenario strict German standard testing</li>
            </ul> -->
            <p class="engine-features">
              {{ researchDevelopmentObj.section4_left_description }}
            </p>
          </div>
          <div class="col-sm-6">
            <img
              :src="imageApi + researchDevelopmentObj.section4_left_image"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <img
              :src="imageApi + researchDevelopmentObj.section4_right_image"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-sm-6">
            <div class="title">
              <!-- <h2>
                Magic Core <br />
                Power-Rewarded <br />
                CHINA10 BEST ENGINES
              </h2> -->
              <h2>{{ researchDevelopmentObj.section4_right_title }}</h2>
            </div>
            <!-- <ul class="engine-features">
              <li>Up to 21 denoising technologies</li>
              <li>Idle noise as low as 57.5db</li>
              <li>Maximum torque: 305N·m</li>
              <li>Maximum power: 138KW</li>
              <li>Thermal efficiency up to 39.2%</li>
              <li>40000+ hours full scenario strict German standard testing</li>
            </ul> -->
            <p class="engine-features">
              {{ researchDevelopmentObj?.section4_right_description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Power Engine End -->

    <!-- Section Vehicle Future Start -->
    <section class="section-vehicle-future" v-if="researchDevelopmentObj">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 m-auto text-center">
            <!-- <h3 class="mb-3">In the future…</h3> -->
            <h3>{{ researchDevelopmentObj.section5_title }}</h3>
            <!-- <p>
              BAIC will continue to pursue two main technical routes of new
              energy and intelligent networking, strengthening layout and
              control core technologies so as to realize the competitiveness
              improvement with EIC technology and new generation electron schema
              application with intelligent connect.
            </p> -->
            <p>{{ researchDevelopmentObj.section5_description }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Vehicle Future End -->

    <!-- Section Cooperate Start -->
    <section class="section-cooperate py-5" v-if="researchDevelopmentObj">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 m-auto text-center">
            <div class="title mb-4 text-uppercase">
              <!-- <h2>
                WHOM WE <br />
                COOPERATE WITH
              </h2> -->
              <h2>{{ researchDevelopmentObj.section6_title }}</h2>
            </div>
            <!-- <p>
              With the goal of building world-class automobiles, BAIC GROUP has
              built a high-quality supply chain system covering the intelligent
              automobile industry chain ecosystem, adhering to the strategic
              cooperation principles of open cooperation, capabilities
              complementary and growing together.
            </p> -->
            <p>{{ researchDevelopmentObj.section6_description }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Cooperate End -->

    <!-- Section Content Vision Start -->
    <section
      class="section-vehicle-innovation"
      v-if="researchDevelopmentObj"
      :style="{
        backgroundImage: `url(${
          imageApi + researchDevelopmentObj?.section7_image
        })`,
      }"
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="title mb-3 text-white">
              <!-- <h2 class="text-uppercase">Innovation</h2> -->
              <h2 class="text-uppercase">
                {{ researchDevelopmentObj.section7_title }}
              </h2>
              <!-- <p>
                Provide electric, intelligent, personalized ultimate driving
                experience
              </p> -->
              <p>{{ researchDevelopmentObj.section7_description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Content Vision End -->

    <!-- Section Technology Start -->
    <section class="section-eic-technology py-5" v-if="researchDevelopmentObj">
      <div class="container">
        <div class="row">
          <div class="col-sm-5">
            <div class="title mb-5">
              <!-- <h5 class="mb-3">CORE TECHNOLOGY</h5> -->
              <h5 class="mb-3">
                {{ researchDevelopmentObj.section8_main_title }}
              </h5>
              <!-- <h2>
                EIC <br />
                Technology
              </h2> -->
              <h2>{{ researchDevelopmentObj.section8_left_title }}</h2>
            </div>
            <p>{{ researchDevelopmentObj.section8_left_description }}</p>
            <!-- <p>Possessing PACK integration and thermal management</p>
            <p>
              Continual technical development in areas such as battery life,
              safety, low-temperature performance, and rapid replacement, with
              both "range" and "safety" being industry-leading core indicators.
            </p>
            <br /><br />
            <p>Independent development of high-performance</p>
            <p>
              Key technological breakthroughs in motor power density, overall
              efficiency, and NVH (Noise, Vibration, and Harshness) have been
              achieved.
            </p> -->
          </div>
          <div class="col-sm-5 ms-auto">
            <div class="imgbox">
              <img
                :src="imageApi + researchDevelopmentObj.section8_left_image"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="imgbox">
              <img
                :src="imageApi + researchDevelopmentObj.section8_left_image1"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-sm-5">
            <div class="imgbox">
              <img
                :src="imageApi + researchDevelopmentObj.section8_right_image"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div class="col-sm-5 ms-auto">
            <!-- <p>Fully independent third-generation super</p> -->
            <p>{{ researchDevelopmentObj.section8_right_title }}</p>
            <!-- <p>
              Characterized by high safety, integration, performance, and
              intelligence, the electronic control development system meets the
              highest global safety standards.
            </p> -->
            <p>{{ researchDevelopmentObj.section8_right_description }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Technology End -->

    <!-- Section Intelligent Energy Start -->
    <section
      class="section-intelligent-energy pb-5"
      v-if="researchDevelopmentObj"
    >
      <div class="container">
        <div class="row">
          <div
            class="col-sm-10 m-auto text-center"
            style="position: relative; z-index: 1"
          >
            <div class="image-intelligent-energy">
              <img
                :src="imageApi + researchDevelopmentObj.section9_image"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="title mb-3">
              <!-- <h2>
                Intelligent <br />
                Energy
              </h2> -->
              <h2>{{ researchDevelopmentObj.section9_title }}</h2>
            </div>
            <!-- <p>
              BAIC BLUEPARK is a national high-tech enterprise under BAIC Group
              specializing in battery swapping and second-life battery
              utilization. It's also the first company in Beijing to obtain
              qualifications for second-life battery utilization.
            </p> -->
            <p>{{ researchDevelopmentObj.section9_description }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Intelligent Energy End -->

    <!-- Section Acquire Start -->
    <section class="section-acquire py-5" v-if="researchDevelopmentObj">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title">
              <h2 class="fw-bold">
                {{ researchDevelopmentObj.section10_title }}
              </h2>
            </div>
            <!-- <p>
              More than 300 corresponding intellectual property rights <br />
              263 core patents 94 patents have been granted
            </p> -->
            <p>{{ researchDevelopmentObj.section10_short_description }}</p>
          </div>
        </div>
        <div class="row mt-4 mb-5 align-items-center">
          <div class="col-sm-5">
            <img
              :src="imageApi + researchDevelopmentObj.section10_image"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-sm-6 ms-auto">
            <!-- <p>
              Leveraging BAIC BLUEPARK, we systematically <br />
              advance the development of battery swapping <br />
              services.
            </p> -->
            <p>{{ researchDevelopmentObj.section10_right_description }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="title">
              <!-- <h2>
                Intelligent <br />
                Battery <br />
                Swapping Station
              </h2> -->
              <h2>{{ researchDevelopmentObj.section11_title }}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Acquire End -->

    <!-- Section Swapping Station Start  -->
    <section class="section-swapping-station" v-if="researchDevelopmentObj">
      <img
        :src="imageApi + researchDevelopmentObj.section11_image"
        class="img-fluid"
        alt=""
      />
    </section>
    <!-- Section Swapping Station End -->

    <!-- Section Battery Technology Start  -->
    <section
      class="section-battery-technology pt-5"
      v-if="researchDevelopmentObj"
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title mb-3">
              <!-- <h2>
                Energy <br />
                Storage Battery
              </h2> -->
              <h2>{{ researchDevelopmentObj.section12_main_title }}</h2>
            </div>
            <div class="imgbox mb-5">
              <img
                :src="imageApi + researchDevelopmentObj.section12_image"
                class="img-fluid d-flex m-auto"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-sm-3">
            <!-- <h4 class="text-uppercase fw-light">
              Maximize battery <br />
              life cycle value
            </h4> -->
            <h4 class="text-uppercase fw-light">
              {{ researchDevelopmentObj.section12_title }}
            </h4>
          </div>
          <div class="col-sm-8 ms-auto">
            <p>{{ researchDevelopmentObj.section12_description }}</p>
            <!-- <p>
              Through cooperation with companies such as State Grid Electric
              Vehicle Service Co, CATL, EDF (Électricité de France), SK, and
              other Fortune Global 500 companies and state-owned enterprises, we
              focus on building and operating battery swapping stations.
            </p> -->
          </div>
        </div>
        <div class="row align-items-center mt-5">
          <div class="col-sm-4">
            <div class="title mb-3">
              <!-- <h2>
                Battery <br />
                Evaluation
              </h2> -->
              <h2>{{ researchDevelopmentObj.section13_main_title }}</h2>
            </div>
            <!-- <p>
              This approach connects the data and value chains of the entire
              power battery lifecycle, establishing a green energy service
              ecosystem and empowering the development of the new energy vehicle
              industry.
            </p> -->
            <p>{{ researchDevelopmentObj.section13_main_description }}</p>
          </div>
        </div>
        <div class="row align-items-center mt-5">
          <div class="col-sm-6">
            <img
              :src="imageApi + researchDevelopmentObj.section13_left_image"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-sm-4 ms-auto">
            <!-- <p>
              Open up the data chain <br />
              and value chain of the <br />
              whole life cycle of the <br />
              power battery
            </p> -->
            <p>{{ researchDevelopmentObj.section13_right_description }}</p>
          </div>
        </div>
        <div class="row align-items-center mt-5" style="margin-bottom: -15%">
          <div class="col-sm-10">
            <div class="title mb-3">
              <!-- <h2>
                Battery<br />
                Technology<br />
                Enhancement
              </h2> -->
              <h2>{{ researchDevelopmentObj.section14_title }}</h2>
            </div>
            <!-- <p>
              As a technology-leading company, our products are driven by data,
              with applications covering the entire spectrum of battery usage,
              including battery swapping, energy storage, and battery
              assessment. We maintain an industry-leading level of technological
              expertise.
            </p> -->
            <p>{{ researchDevelopmentObj.section14_description }}</p>
          </div>
        </div>
      </div>
      <img
        :src="imageApi + researchDevelopmentObj.section14_image"
        class="img-fluid d-flex m-auto"
        alt=""
      />
    </section>
    <!-- Section Battery Technology End  -->
  </div>
</template>

<script>
import { useResearchDevelopmentStore } from "../../store/modules/researchDevelopment";

import imageApi from "~/helpers/imageapi";
export default {
  name: "Research Development Page",
  layout: "default",
  components: {},
  data() {
    return {
      imageApi: imageApi,
      researchDevelopmentStore: useResearchDevelopmentStore(),
    };
  },
  computed: {
    researchDevelopmentObj() {
      return this.researchDevelopmentStore.getResearchDevelopment;
    },
  },
  mounted() {
    this.fetchResearchDevelopment();
  },
  methods: {
    fetchResearchDevelopment() {
      this.researchDevelopmentStore.fetchResearchDevelopment();
    },
  },
};
</script>
