<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <NuxtLink class="navbar-brand logo" to="/">
        <img :src="imageApi + homeObj?.logo" class="img-fluid" alt="" />
      </NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav m-auto">
          <li class="nav-item dropdown">
            <NuxtLink
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              to="/"
              id="dropdownMenuModels"
              >Models</NuxtLink
            >
            <div
              class="dropdown-menu megamenu"
              aria-labelledby="dropdownMenuModels"
            >
              <div class="container">
                <div class="d-flex align-items-start modelTabs">
                  <ul
                    class="nav flex-column nav-tabs except-all-navigation"
                    id="myTab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link xyz-in"
                        xyz="fade ease-in left duration-10"
                        :class="{ active: activeTab === null }"
                        @click="selectTab(null)"
                        id="all-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#all"
                        href="javascript:void(0);"
                        role="tab"
                        aria-controls="all"
                        aria-selected="true"
                        >ALL</a
                      >
                    </li>
                    <li
                      class="nav-item"
                      role="presentation"
                      v-for="(category, index) in categories"
                      :key="index"
                    >
                      <a
                        class="nav-link xyz-in"
                        xyz="fade ease-in left duration-10"
                        data-bs-toggle="tab"
                        role="tab"
                        href="javascript:void(0);"
                        aria-selected="true"
                        @click="selectTab(category.id)"
                        :class="{ active: activeTab === category.id }"
                        :aria-controls="category.id"
                        :key="index"
                        :data-bs-target="category.id"
                        :id="category.id"
                        >{{ category.name }}</a
                      >
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade"
                      :class="{
                        show: activeTab == null,
                        active: activeTab == null,
                      }"
                      id="all"
                      role="tabpanel"
                      aria-labelledby="all-tab"
                    >
                      <div
                        xyz="fade ease-in right-25% duration-15"
                        class="carmodels-type xyz-in"
                        v-for="(category, index) in modelsWithCatogories"
                        :key="index"
                      >
                        <h4>{{ category?.categoryName }}</h4>
                        <div class="row">
                          <div
                            class="col col-4 col-sm-3 col-lg-2"
                            v-for="(model, i) in category?.modelsArr"
                            :key="i"
                          >
                            <NuxtLink
                              class="modelbox"
                              :to="'/model/' + model.modelId"
                            >
                              <img :src="imageApi + model?.image1" alt="" />
                              <span>{{ model?.modelName }}</span>
                            </NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      v-for="(category, index) in modelsWithCatogories"
                      :aria-labelledby="category.categoryId"
                      :class="{
                        show: activeTab === category.categoryId,
                        active: activeTab === category.categoryId,
                      }"
                      :key="index"
                      :id="category.categoryId"
                      class="tab-pane fade"
                      role="tabpanel"
                    >
                      <div class="model_inner_tabs">
                        <div class="d-flex align-items-start">
                          <nav>
                            <div
                              class="nav nav-tabs flex-column xyz-in"
                              id="nav-tab"
                              role="tablist"
                              xyz="fade ease-in left-25%"
                            >
                              <a
                                v-for="(model, i) in category.modelsArr"
                                :key="i"
                                @click="selectModelTab(model?.modelId)"
                                class="nav-link"
                                :class="{
                                  active: modelActiveTab === model?.modelId,
                                }"
                                :id="model?.modelId"
                                data-bs-toggle="tab"
                                :data-bs-target="model?.modelId"
                                href="javascript:void(0);"
                                role="tab"
                                :aria-controls="model?.modelId"
                                aria-selected="true"
                              >
                                <img
                                  :src="imageApi + model?.image1"
                                  class="img-fluid"
                                  alt=""
                                />
                                <!-- {{ model?.modelName }} -->
                              </a>
                            </div>
                          </nav>
                          <div class="tab-content" id="nav-tabContent">
                            <div
                              v-for="(model, i) in category.modelsArr"
                              :key="i"
                              class="tab-pane fade"
                              :class="{
                                active: modelActiveTab === model?.modelId,
                                show: modelActiveTab === model?.modelId,
                              }"
                              :id="model?.modelId"
                              role="tabpanel"
                              :aria-labelledby="model?.modelId"
                              :tabindex="i"
                            >
                              <div class="carmodel-box">
                                <div class="row">
                                  <div
                                    class="col-sm-4 xyz-in"
                                    xyz="fade ease-in up-25%"
                                  >
                                    <div class="gallery-content">
                                      <h3>{{ model?.modelName }}</h3>

                                      <p>{{ model?.description }}</p>
                                      <div class="vehicle-features">
                                        <div class="row">
                                          <div class="col col-4">
                                            <div class="vehicle-feature-box">
                                              <img
                                                src="@/assets/images/icon-dashboard.png"
                                                class="img-fluid"
                                                alt=""
                                              />
                                              <!-- <h4>206 <small>kw</small></h4> -->
                                              <h4>{{ model?.power }}</h4>
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
                                              <h4>{{ model?.torque }}</h4>
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
                                              <!-- <h4>206 <small>kw</small></h4> -->
                                              <h4>{{ model?.wheelbase }}</h4>
                                              <p>WHEELBASE</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="vehicle-action-buttons text-center"
                                      >
                                        <NuxtLink
                                          to="/test-drive"
                                          class="btn btn-outline-dark mx-2"
                                          >Test Drive</NuxtLink
                                        >
                                        <NuxtLink
                                          :to="'/model/' + model.modelId"
                                          class="btn btn-outline-dark mx-2"
                                          >Explore More</NuxtLink
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="col-sm-8 xyz-in"
                                    xyz="fade ease-in right-50%"
                                  >
                                    <div class="mcar-image-viewbox">
                                      <img
                                        :src="imageApi + model?.image1"
                                        class="img-fluid"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown">
            <NuxtLink
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              to="/"
              id="dropdownMenuInnovation"
              >Innovation</NuxtLink
            >
            <div
              class="dropdown-menu megamenu"
              aria-labelledby="dropdownMenuInnovation"
            >
              <div class="dropdown-links">
                <NuxtLink class="dropdown-item" to="/capital-beauty"
                  >Capital Beauty</NuxtLink
                >
                <NuxtLink class="dropdown-item" to="/concept-car"
                  >Concept Car</NuxtLink
                >
                <NuxtLink class="dropdown-item" to="/off-road"
                  >Off Road</NuxtLink
                >
                <NuxtLink class="dropdown-item" to="/research-development"
                  >Power</NuxtLink
                >
              </div>
            </div>
          </li>
          <li class="nav-item dropdown">
            <NuxtLink
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              to="/"
              id="dropdownMenuAbout"
              >About</NuxtLink
            >
            <div
              class="dropdown-menu megamenu"
              aria-labelledby="dropdownMenuAbout"
            >
              <div class="dropdown-links">
                <NuxtLink class="dropdown-item" to="/overview"
                  >Overview</NuxtLink
                >
                <NuxtLink class="dropdown-item" to="/vision">Vision</NuxtLink>
                <NuxtLink class="dropdown-item" to="/history">History</NuxtLink>
                <NuxtLink class="dropdown-item" to="/">CSR</NuxtLink>
                <NuxtLink class="dropdown-item" to="/after-sales-service"
                  >After Sales Service</NuxtLink
                >
              </div>
            </div>
          </li>
          <li class="nav-item dropdown">
            <NuxtLink
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              to="/"
              id="dropdownMenuNewsRoom"
              >Newsroom</NuxtLink
            >
            <div
              class="dropdown-menu megamenu"
              aria-labelledby="dropdownMenuNewsRoom "
            >
              <div class="dropdown-links">
                <NuxtLink class="dropdown-item" to="/news-release"
                  >News Release</NuxtLink
                >
                <NuxtLink class="dropdown-item" to="/subcribe"
                  >Subscribe</NuxtLink
                >
                <NuxtLink class="dropdown-item" to="/media-contact"
                  >Media Contact</NuxtLink
                >
                <NuxtLink class="dropdown-item" to="/baic-in-x"
                  >BAIC in X</NuxtLink
                >
              </div>
            </div>
          </li>
          <li class="nav-item dropdown">
            <NuxtLink
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              to="/"
              id="dropdownMenuConnect"
              >Connect</NuxtLink
            >
            <div
              class="dropdown-menu megamenu"
              aria-labelledby="dropdownConnect"
            >
              <div class="dropdown-links">
                <NuxtLink class="dropdown-item" to="/contact-us"
                  >Contact Us</NuxtLink
                >
                <NuxtLink class="dropdown-item" to="/">Join Us</NuxtLink>
                <NuxtLink class="dropdown-item" to="/distributor-center"
                  >Distributor Center</NuxtLink
                >
                <NuxtLink class="dropdown-item" to="/multimedia"
                  >Download Center</NuxtLink
                >
              </div>
            </div>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/worldwide">Worldwide</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { useHomeStore } from "../store/modules/home";
import { useModelsStore } from "../store/modules/models";
import { useModelCategoryStore } from "../store/modules/modelCategory";
import imageApi from "~/helpers/imageapi";

export default {
  data() {
    return {
      modelsStore: useModelsStore(),
      homeStore: useHomeStore(),
      modelCategoryStore: useModelCategoryStore(),
      imageApi,
      isOpenInnovation: false,
      isOpenAbout: false,
      isOpenNewsRoom: false,
      isOpenConnect: false,
      isOpenModels: false,
      activeTab: null,
      modelActiveTab: null,
    };
  },
  computed: {
    categories() {
      return this.modelCategoryStore.getModelCategory;
    },
    models() {
      return this.modelsStore.getModels;
    },
    homeObj() {
      // console.log("THIS><", this.modelsWithCatogories);
      return this.homeStore.getHome;
    },
    modelsWithCatogories() {
      const categoryArr = [];
      if (this.models && this.categories) {
        this.categories?.forEach(category => {
          const modelsCategoryArr = [];
          this.models?.forEach(model => {
            if (model.categoryId === category.id) {
              modelsCategoryArr.push({
                categoryName: category.name,
                modelName: model.name,
                categoryId: category.id,
                modelId: model.id,
                image1: model.image1,
                description: model.description,
                power: model.power,
                torque: model.torque,
                wheelbase: model.wheelbase,
              });
            }
          });
          categoryArr.push({
            categoryName: category.name,
            categoryId: category.id,
            modelsArr: modelsCategoryArr,
          });
        });
      }
      return categoryArr;
    },
  },
  mounted() {
    // this.selectModelTab(this.models[0]?.id.toString())
    this.fetchModelCategory();
    this.fetchModels();
  },
  methods: {
    fetchModelCategory() {
      this.modelCategoryStore.fetchModelsCategory();
    },
    fetchModels() {
      this.modelsStore.fetchModels();
    },
    openDropdownInnovation() {
      this.isOpenInnovation = true;
    },
    closeDropdownInnovation() {
      this.isOpenInnovation = false;
    },
    openDropdownAbout() {
      this.isOpenAbout = true;
    },
    closeDropdownAbout() {
      this.isOpenAbout = false;
    },
    openDropdownNewsRoom() {
      this.isOpenNewsRoom = true;
    },
    closeDropdownNewsRoom() {
      this.isOpenNewsRoom = false;
    },
    openDropdownConnect() {
      this.isOpenConnect = true;
    },
    closeDropdownConnect() {
      this.isOpenConnect = false;
    },
    openDropdownModels() {
      this.isOpenModels = false;
    },
    closeDropdownModels() {
      this.isOpenModels = false;
    },
    selectTab(tabName) {
      this.activeTab = tabName;
    },
    selectModelTab(name) {
      this.modelActiveTab = name;
    },
  },
};
</script>
