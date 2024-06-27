<template>
  <div>
    <!-- Section Page Heading Start   -->
    <section class="page-heading">
      <img
        src="@/assets/images/history-page-heading.png"
        class="img-fluid"
        alt=""
      />
      <div class="page-heading-info">
        <div>
          <h1 class="text-uppercase">History</h1>
          <h4 class="text-uppercase">History is still being written...</h4>
        </div>
      </div>
    </section>
    <!-- Section Page Heading End   -->
    <!-- Section Content Vision Start -->
    <section class="section-content content-vision py-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 m-auto">
            <div class="timeline">
              <div
                class="timeline-box"
                v-for="(history, index) in histories"
                :class="index % 2 == 0 ? '' : 'right'"
                :key="index"
              >
                <div class="row align-items-center" v-if="index % 2 == 0">
                  <div class="col col-6">
                    <div class="timeline-content">
                      <p>
                        {{ history.description }}
                      </p>
                      <h4>{{ history.year }}</h4>
                    </div>
                  </div>
                  <div class="col col-6">
                    <div class="timeline-image">
                      <img
                        :src="imageApi + history.image"
                        class="img-fluid"
                        :alt="history.description"
                      />
                    </div>
                  </div>
                </div>

                <div class="row align-items-center" v-if="index % 2 == 1">
                  <div class="col col-6">
                    <div class="timeline-image">
                      <img
                        :src="imageApi + history.image"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col col-6">
                    <div class="timeline-content">
                      <p>
                        {{ history.description }}
                      </p>
                      <h4>{{ history.year }}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="timeline-box right">
              <div class="row align-items-center">
                <div class="col col-6">
                  <div class="timeline-image">
                    <img
                      src="@/assets/images/timeline.png"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col col-6">
                  <div class="timeline-content">
                    <p>
                      Foton deepened cooperation with Daimler, and the
                      localization of Mercedes-Benz heavy trucks was officially
                      landed.
                    </p>
                    <h4>2022</h4>
                  </div>
                </div>
              </div>
            </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Content Vision End -->
  </div>
</template>

<script>
import { useHistoryStore } from "../../store/modules/history";
import imageApi from "~/helpers/imageapi";
export default {
  name: "History Page",
  layout: "default",
  components: {},
  data() {
    return {
      imageApi: imageApi,
      historyStore: useHistoryStore(),
    };
  },
  computed: {
    histories() {
      return this.historyStore.getHistories;
    },
  },
  mounted() {
    this.fetchHistories();
  },
  methods: {
    fetchHistories() {
      this.historyStore.fetchHistories();
    },
  },
};
</script>
