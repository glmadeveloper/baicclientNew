<template>
  <div>
    <section class="page-heading">
      <img
        :src="imageApi + overviewObj?.banner_image"
        class="img-fluid"
        alt=""
      />
      <div class="page-heading-info">
        <div>
          <h1 class="text-uppercase">{{ overviewObj?.banner_title }}</h1>
          <!-- <h4>
            onummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliqu
          </h4> -->
          <div v-html="overviewObj?.banner_description"></div>
        </div>
      </div>
    </section>
    <section class="section-content content-overview py-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 m-auto">
            <img
              :src="imageApi + overviewObj?.section1_image"
              class="img-fluid m-auto d-flex mb-5"
              alt=""
            />
            <div
              class="text-center"
              v-html="overviewObj?.section1_description"
            ></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useOverviewStore } from "../../store/modules/overview";
import imageApi from "~/helpers/imageapi";
export default {
  name: "Overview",
  layout: "default",
  components: {},
  data() {
    return {
      imageApi: imageApi,
      overviewStore: useOverviewStore(),
    };
  },
  computed: {
    overviewObj() {
      return this.overviewStore.getOverview;
    },
  },
  mounted() {
    this.fetchOverview();
  },
  methods: {
    fetchOverview() {
      this.overviewStore.fetchOverview();
    },
  },
};
</script>
