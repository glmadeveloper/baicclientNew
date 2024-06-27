<template>
  <div>
    <!-- Section Page Heading Start   -->
    <section class="page-heading">
      <img
        src="@/assets/images/multimedia-page-heading.png"
        class="img-fluid"
        alt=""
      />
      <div class="page-heading-info">
        <div>
          <h1 class="text-uppercase">Multimedia</h1>
        </div>
      </div>
    </section>
    <!-- Section Page Heading End   -->

    <!-- Section Content Vision Start -->
    <section class="section-content py-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="multimedia-tabs">
              <ul
                class="nav nav-tabs justify-content-center"
                id="myTab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pictures-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#pictures"
                    type="button"
                    role="tab"
                    aria-controls="pictures"
                    aria-selected="true"
                  >
                    <i class="fa-regular fa-image"></i> Pictures
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="videos-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#videos"
                    type="button"
                    role="tab"
                    aria-controls="videos"
                    aria-selected="false"
                  >
                    <i class="fa-regular fa-play-circle"></i> Videos
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="pictures"
                  role="tabpanel"
                  aria-labelledby="pictures-tab"
                >
                  <div class="row">
                    <div
                      class="col-sm-4 col-lg-3"
                      v-for="(media, index) in imageMedia"
                      :key="index"
                    >
                      <div class="gallery-box">
                        <img
                          :src="imageApi + media.media"
                          class="img-fluid"
                          alt=""
                        />
                        <!-- <h3>BJ40</h3> -->
                        <h3>{{ media.model.name }}</h3>
                      </div>
                    </div>
                    <!-- <div class="col-sm-4 col-lg-3">
                      <div class="gallery-box">
                        <img
                          src="@/assets/images/news-item2.png"
                          class="img-fluid"
                          alt=""
                        />
                        <h3>BJ40</h3>
                      </div>
                    </div>
                    <div class="col-sm-4 col-lg-3">
                      <div class="gallery-box">
                        <img
                          src="@/assets/images/news-item2.png"
                          class="img-fluid"
                          alt=""
                        />
                        <h3>BJ40</h3>
                      </div>
                    </div>
                    <div class="col-sm-4 col-lg-3">
                      <div class="gallery-box">
                        <img
                          src="@/assets/images/news-item2.png"
                          class="img-fluid"
                          alt=""
                        />
                        <h3>BJ40</h3>
                      </div>
                    </div>
                    <div class="col-sm-4 col-lg-3">
                      <div class="gallery-box">
                        <img
                          src="@/assets/images/news-item2.png"
                          class="img-fluid"
                          alt=""
                        />
                        <h3>BJ40</h3>
                      </div>
                    </div>
                    <div class="col-sm-4 col-lg-3">
                      <div class="gallery-box">
                        <img
                          src="@/assets/images/news-item2.png"
                          class="img-fluid"
                          alt=""
                        />
                        <h3>BJ40</h3>
                      </div>
                    </div>
                    <div class="col-sm-4 col-lg-3">
                      <div class="gallery-box">
                        <img
                          src="@/assets/images/news-item2.png"
                          class="img-fluid"
                          alt=""
                        />
                        <h3>BJ40</h3>
                      </div>
                    </div>
                    <div class="col-sm-4 col-lg-3">
                      <div class="gallery-box">
                        <img
                          src="@/assets/images/news-item2.png"
                          class="img-fluid"
                          alt=""
                        />
                        <h3>BJ40</h3>
                      </div>
                    </div> -->
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="videos"
                  role="tabpanel"
                  aria-labelledby="videos-tab"
                >
                  <div class="row">
                    <div
                      class="col-sm-4 col-lg-3"
                      v-for="(media, index) in videoMedia"
                      :key="index"
                    >
                      <div class="gallery-box">
                        <video width="360" height="240" controls>
                          <source
                            :src="imageApi + media.media"
                            type="video/mp4"
                          />
                        </video>
                        <!-- <h3>BJ40</h3> -->
                        <h3>{{ media.model.name }}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Content Vision End -->
  </div>
</template>

<script>
import { useMultimediaStore } from "../../store/modules/multimedia";
import imageApi from "~/helpers/imageapi";
export default {
  name: "Multimedia Page",
  layout: "default",
  components: {},
  data() {
    return {
      imageApi: imageApi,
      multimediaStore: useMultimediaStore(),
    };
  },
  computed: {
    multimedia() {
      return this.multimediaStore.getMultimedia;
    },
    videoMedia() {
      if (this.multimedia)
        return this.multimedia.filter(v => v.typeOfMedia == "video");
      else return [];
    },
    imageMedia() {
      if (this.multimedia)
        return this.multimedia.filter(i => i.typeOfMedia == "image");
      else return [];
    },
  },
  mounted() {
    this.fetchMultimedia();
    console.log("MULTIMEDIA", this.multimedia);
  },
  methods: {
    fetchMultimedia() {
      this.multimediaStore.fetchMultimedia();
    },
  },
};
</script>
