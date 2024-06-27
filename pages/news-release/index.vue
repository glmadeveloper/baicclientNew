<template>
  <div>
    <!-- Section Page Heading Start   -->
    <section class="page-heading">
      <img
        src="@/assets/images/news-page-heading.png"
        class="img-fluid"
        alt=""
      />
      <div class="page-heading-info">
        <div>
          <h1 class="text-uppercase">News Release</h1>
        </div>
      </div>
    </section>
    <!-- Section Page Heading End   -->

    <!-- Section Content Vision Start -->
    <section class="section-content py-5">
      <div class="container">
        <div class="row" v-if="newsReleases">
          <div
            class="col-sm-4"
            v-for="(news, index) in newsReleases"
            :key="index"
          >
            <div class="news-box">
              <div class="news-box-image">
                <img :src="imageApi + news.image" class="img-fluid" alt="" />
              </div>
              <div class="news-box-content">
                <h4>
                  <a href="#">{{ news.title }}</a>
                </h4>
                <p>
                  {{ news.subTitle }}
                </p>
                <a href="#" class="btn btn-outline-dark">Read More</a>
              </div>
            </div>
          </div>
          <!-- <div class="col-sm-4">
            <div class="news-box">
              <div class="news-box-image">
                <img
                  src="@/assets/images/news-image.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="news-box-content">
                <h4>
                  <a href="#">The Balance of Wisdom in Appearance Design</a>
                </h4>
                <p>
                  The wisdom of balance, a continuous thread in Chinese culture,
                  is also visible in the design of the BJ60.
                </p>
                <a href="#" class="btn btn-outline-dark">Read More</a>
              </div>
            </div>
          </div> -->
        </div>

        <div class="row">
          <div class="col-sm-12">
            <div class="title mb-3">
              <h2>Other News</h2>
            </div>
            <swiper
              :slides-per-view="1"
              :space-between="1"
              :scrollbar="true"
              :pagination="{ clickable: true }"
              :autoplay="{
                delay: 2500,
              }"
            >
              <swiper-slide
                v-for="(otherNews, index) in otherNewsRelease"
                :key="index"
              >
                <div
                  class="other-news-box"
                  v-for="(item, i) in otherNews"
                  :key="i"
                >
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="other-news-box-image">
                        <img
                          :src="imageApi + item.image"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-sm-8">
                      <div class="other-news-box-content">
                        <h4>
                          {{ item.title }}
                        </h4>
                        <p>{{ item.subTitle }}</p>
                        <div class="news-meta">
                          <div class="date">
                            {{
                              new Date(item.createdAt).getDate() +
                              "/" +
                              (new Date(item.createdAt).getMonth() + 1) +
                              "/" +
                              new Date(item.createdAt).getFullYear()
                            }}
                          </div>
                          <a href="#" class="btn btn-outline-dark">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
            <!-- <div class="swiper sliderNews">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
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
                              >BAIC JoyTech: First in China! Magic Core Power
                              has obtained the “Excellent Silent Engine” (3A)
                              certification</a
                            >
                          </h4>
                          <p>
                            BAIC JoyTech: First in China! Magic Core Power has
                            obtained the “Excellent Silent Engine” (3A)
                            certification.Marking that the NVH performance of
                            BAIC’s self-developed hybrid engine has topped in
                            China.
                          </p>
                          <div class="news-meta">
                            <div class="date">2024-01-04</div>
                            <a href="#" class="btn btn-outline-dark"
                              >Read More</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
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
                              >BAIC JoyTech: First in China! Magic Core Power
                              has obtained the “Excellent Silent Engine” (3A)
                              certification</a
                            >
                          </h4>
                          <p>
                            BAIC JoyTech: First in China! Magic Core Power has
                            obtained the “Excellent Silent Engine” (3A)
                            certification.Marking that the NVH performance of
                            BAIC’s self-developed hybrid engine has topped in
                            China.
                          </p>
                          <div class="news-meta">
                            <div class="date">2024-01-04</div>
                            <a href="#" class="btn btn-outline-dark"
                              >Read More</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
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
                              >BAIC JoyTech: First in China! Magic Core Power
                              has obtained the “Excellent Silent Engine” (3A)
                              certification</a
                            >
                          </h4>
                          <p>
                            BAIC JoyTech: First in China! Magic Core Power has
                            obtained the “Excellent Silent Engine” (3A)
                            certification.Marking that the NVH performance of
                            BAIC’s self-developed hybrid engine has topped in
                            China.
                          </p>
                          <div class="news-meta">
                            <div class="date">2024-01-04</div>
                            <a href="#" class="btn btn-outline-dark"
                              >Read More</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-scrollbar"></div>
            </div> -->
          </div>
        </div>
      </div>
    </section>
    <!-- Section Content Vision End -->
  </div>
</template>

<script>
import { useNewsReleaseStore } from "../../store/modules/newRelease";
import imageApi from "~/helpers/imageapi";
// import SwiperSliderOthersNewsVue from "../../components/swiperSliderOthersNews.vue";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import moment from "moment";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
export default {
  name: "News Release Page",
  layout: "default",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
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
      let groups = [];
      if (this.newsReleases) {
        const data = this.newsReleases.filter(n => n.otherNews == true);
        const chunkSize = 3;

        for (let i = 0; i < data.length; i += chunkSize) {
          groups.push(data.slice(i, i + chunkSize));
        }
      }
      console.log("GROUPS", groups);
      return groups;
    },
  },
  mounted() {
    this.fetchNewsRelease();
    console.log("FFFFFF", this.otherNewsRelease);
  },
  methods: {
    fetchNewsRelease() {
      this.newsReleaseStore.fetchNewsRelease();
    },
  },
};
</script>
