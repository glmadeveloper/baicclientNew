<template>
  <div>
    <section class="section-banner">
      <div class="slider-banner">
        <SwiperSlider />
      </div>
    </section>

    <!--hero section start-->
    <section class="section-carmodels">
      <div class="container">
        <div class="title position-relative mb-5 text-uppercase">
          <h2>Explore Your Baic</h2>
        </div>

        <div class="sliderTabs position-relative">
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              class="nav-link"
              data-bs-toggle="tab"
              role="tab"
              aria-selected="true"
              v-for="(category, index) in modelCategories"
              @click="selectTab(category.name)"
              :class="{ active: activeTab === category.name }"
              :aria-controls="category.name"
              :key="index"
              :data-bs-target="category.name"
              :id="category.name"
              >{{ category.name }}</a
            >
            <!-- <a
              class="nav-link active"
              id="nav-offroad-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-offroad"
              role="tab"
              aria-controls="nav-offroad"
              aria-selected="true"
              >Off-Road</a
            >
            <a
              class="nav-link"
              id="nav-suv-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-suv"
              role="tab"
              aria-controls="nav-suv"
              aria-selected="false"
              >SUV</a
            >
            <a
              class="nav-link"
              id="nav-sedan-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-sedan"
              role="tab"
              aria-controls="nav-sedan"
              aria-selected="false"
              >SEDAN</a
            >
            <a
              class="nav-link"
              id="nav-ev-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-ev"
              role="tab"
              aria-controls="nav-ev"
              aria-selected="false"
              >EV</a
            > -->
          </div>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade"
              role="tabpanel"
              v-for="(category, index) in modelsWithCategoriesAndColors"
              :aria-labelledby="category.categoryName"
              :class="{
                show: activeTab === category.categoryName,
                active: activeTab === category.categoryName,
              }"
              :key="index"
              :id="category.categoryName"
            >
              <!-- {{ category.categoryName }} -->

              <!-- <div class="sliderModels gallery-thumbs thumbImage"> -->
              <!-- <div class="gallery-thumbs thumbImage"> -->
              <!-- <div class="swiper-button-prev"></div> -->

              <SwiperModels :modelsArray="category.modelsArr" />

              <!-- <div class="swiper-button-next"></div> -->
              <!-- </div> -->
              <!-- </div> -->
            </div>
            <!-- <div
              class="tab-pane fade show active"
              id="nav-offroad"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div class="sliderModels">
                <div class="gallery-thumbs thumbImage">
                  <div class="swiper-button-prev"></div>
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img
                        src="@/assets/images/models/BJ80/1.png"
                        alt="Slide 01"
                        class="img-fluid"
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src="@/assets/images/models/BJ60/1.png"
                        alt="Slide 01"
                        class="img-fluid"
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src="@/assets/images/models/BJ40PLUS/1.png"
                        alt="Slide 01"
                        class="img-fluid"
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src="@/assets/images/models/BJ40SE/1.png"
                        alt="Slide 01"
                        class="img-fluid"
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src="@/assets/images/models/F40/1.png"
                        alt="Slide 01"
                        class="img-fluid"
                      />
                    </div>
                  </div>
                  <div class="swiper-button-next"></div>
                </div>
                <div class="gallery-main bigImage">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="row">
                        <div class="col-sm-4">
                          <div class="gallery-content">
                            <h3>BJ80</h3>
                            <p>Galaxy Flagship, Glorious Shinning Trip</p>
                            <p>
                              consectetuer adipiscing elit, sed diam nonummy
                              nibh euismod tincidunt ut laoreet dolore magna
                              aliquam erat volutpat. Ut wis
                            </p>
                            <div class="vehicle-features">
                              <div class="row">
                                <div class="col col-4">
                                  <div class="vehicle-feature-box">
                                    <img
                                      src="@/assets/images/icon-dashboard.png"
                                      class="img-fluid"
                                      alt=""
                                    />
                                    <h4>206 <small>kw</small></h4>
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
                                    <h4>206 <small>kw</small></h4>
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
                                    <h4>206 <small>kw</small></h4>
                                    <p>WHEELBASE</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="vehicle-color-variations">
                              <ul class="color-list">
                                <li class="color-item active">
                                  <div
                                    class="color-icon"
                                    style="background-color: #ffffff"
                                  ></div>
                                </li>
                                <li class="color-item">
                                  <div
                                    class="color-icon"
                                    style="background-color: #f54b4b"
                                  ></div>
                                </li>
                                <li class="color-item">
                                  <div
                                    class="color-icon"
                                    style="background-color: #5d5d5d"
                                  ></div>
                                </li>
                                <li class="color-item">
                                  <div
                                    class="color-icon"
                                    style="background-color: #a11515"
                                  ></div>
                                </li>
                                <li class="color-item">
                                  <div
                                    class="color-icon"
                                    style="background-color: #233155"
                                  ></div>
                                </li>
                              </ul>
                            </div>
                            <div class="vehicle-action-buttons">
                              <a href="#" class="btn btn-outline-dark mx-1"
                                >Test Drive</a
                              >
                              <a href="#" class="btn btn-outline-dark mx-1"
                                >View VR</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-8">
                          <div class="gallery-image">
                            <img
                              src="@/assets/images/models/BJ80/1.png"
                              alt="Slide 01"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="row">
                        <div class="col-sm-4">
                          <div class="gallery-content">
                            <h3>BJ60</h3>
                            <p>Galaxy Flagship, Glorious Shinning Trip</p>
                            <p>
                              consectetuer adipiscing elit, sed diam nonummy
                              nibh euismod tincidunt ut laoreet dolore magna
                              aliquam erat volutpat. Ut wis
                            </p>
                            <div class="vehicle-features">
                              <div class="row">
                                <div class="col col-4">
                                  <div class="vehicle-feature-box">
                                    <img
                                      src="@/assets/images/icon-dashboard.png"
                                      class="img-fluid"
                                      alt=""
                                    />
                                    <h4>206 <small>kw</small></h4>
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
                                    <h4>206 <small>kw</small></h4>
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
                                    <h4>206 <small>kw</small></h4>
                                    <p>WHEELBASE</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="vehicle-color-variations">
                              <ul class="color-list">
                                <li class="color-item active">
                                  <div
                                    class="color-icon"
                                    style="background-color: #ffffff"
                                  ></div>
                                </li>
                                <li class="color-item">
                                  <div
                                    class="color-icon"
                                    style="background-color: #f54b4b"
                                  ></div>
                                </li>
                                <li class="color-item">
                                  <div
                                    class="color-icon"
                                    style="background-color: #5d5d5d"
                                  ></div>
                                </li>
                                <li class="color-item">
                                  <div
                                    class="color-icon"
                                    style="background-color: #a11515"
                                  ></div>
                                </li>
                                <li class="color-item">
                                  <div
                                    class="color-icon"
                                    style="background-color: #233155"
                                  ></div>
                                </li>
                              </ul>
                            </div>
                            <div class="vehicle-action-buttons">
                              <a href="#" class="btn btn-outline-dark mx-1"
                                >Test Drive</a
                              >
                              <a href="#" class="btn btn-outline-dark mx-1"
                                >View VR</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-8">
                          <div class="gallery-image">
                            <img
                              src="@/assets/images/models/BJ60/1.png"
                              alt="Slide 01"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="row">
                        <div class="col-sm-4">
                          <div class="gallery-content">
                            <h3>BJ40 PLUS</h3>
                            <p>Galaxy Flagship, Glorious Shinning Trip</p>
                            <p>
                              consectetuer adipiscing elit, sed diam nonummy
                              nibh euismod tincidunt ut laoreet dolore magna
                              aliquam erat volutpat. Ut wis
                            </p>
                            <div class="vehicle-features">
                              <div class="row">
                                <div class="col col-4">
                                  <div class="vehicle-feature-box">
                                    <img
                                      src="@/assets/images/icon-dashboard.png"
                                      class="img-fluid"
                                      alt=""
                                    />
                                    <h4>206 <small>kw</small></h4>
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
                                    <h4>206 <small>kw</small></h4>
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
                                    <h4>206 <small>kw</small></h4>
                                    <p>WHEELBASE</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="vehicle-color-variations">
                              <ul class="color-list">
                                <li class="color-item active">
                                  <div
                                    class="color-icon"
                                    style="background-color: #ffffff"
                                  ></div>
                                </li>
                                <li class="color-item">
                                  <div
                                    class="color-icon"
                                    style="background-color: #f54b4b"
                                  ></div>
                                </li>
                                <li class="color-item">
                                  <div
                                    class="color-icon"
                                    style="background-color: #5d5d5d"
                                  ></div>
                                </li>
                                <li class="color-item">
                                  <div
                                    class="color-icon"
                                    style="background-color: #a11515"
                                  ></div>
                                </li>
                                <li class="color-item">
                                  <div
                                    class="color-icon"
                                    style="background-color: #233155"
                                  ></div>
                                </li>
                              </ul>
                            </div>
                            <div class="vehicle-action-buttons">
                              <a href="#" class="btn btn-outline-dark mx-1"
                                >Test Drive</a
                              >
                              <a href="#" class="btn btn-outline-dark mx-1"
                                >View VR</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-8">
                          <div class="gallery-image">
                            <img
                              src="@/assets/images/models/BJ40PLUS/1.png"
                              alt="Slide 01"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="row">
                        <div class="col-sm-4">
                          <div class="gallery-content">
                            <h3>BJ40 SE</h3>
                            <p>Galaxy Flagship, Glorious Shinning Trip</p>
                            <p>
                              consectetuer adipiscing elit, sed diam nonummy
                              nibh euismod tincidunt ut laoreet dolore magna
                              aliquam erat volutpat. Ut wis
                            </p>
                            <div class="vehicle-features">
                              <div class="row">
                                <div class="col col-4">
                                  <div class="vehicle-feature-box">
                                    <img
                                      src="@/assets/images/icon-dashboard.png"
                                      class="img-fluid"
                                      alt=""
                                    />
                                    <h4>206 <small>kw</small></h4>
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
                                    <h4>206 <small>kw</small></h4>
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
                                    <h4>206 <small>kw</small></h4>
                                    <p>WHEELBASE</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="vehicle-color-variations">
                              <ul class="color-list">
                                <li class="color-item active">
                                  <div
                                    class="color-icon"
                                    style="background-color: #ffffff"
                                  ></div>
                                </li>
                                <li class="color-item">
                                  <div
                                    class="color-icon"
                                    style="background-color: #f54b4b"
                                  ></div>
                                </li>
                                <li class="color-item">
                                  <div
                                    class="color-icon"
                                    style="background-color: #5d5d5d"
                                  ></div>
                                </li>
                                <li class="color-item">
                                  <div
                                    class="color-icon"
                                    style="background-color: #a11515"
                                  ></div>
                                </li>
                                <li class="color-item">
                                  <div
                                    class="color-icon"
                                    style="background-color: #233155"
                                  ></div>
                                </li>
                              </ul>
                            </div>
                            <div class="vehicle-action-buttons">
                              <a href="#" class="btn btn-outline-dark mx-1"
                                >Test Drive</a
                              >
                              <a href="#" class="btn btn-outline-dark mx-1"
                                >View VR</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-8">
                          <div class="gallery-image">
                            <img
                              src="@/assets/images/models/BJ40SE/1.png"
                              alt="Slide 01"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="row">
                        <div class="col-sm-4">
                          <div class="gallery-content">
                            <h3>F40</h3>
                            <p>Galaxy Flagship, Glorious Shinning Trip</p>
                            <p>
                              consectetuer adipiscing elit, sed diam nonummy
                              nibh euismod tincidunt ut laoreet dolore magna
                              aliquam erat volutpat. Ut wis
                            </p>
                            <div class="vehicle-features">
                              <div class="row">
                                <div class="col col-4">
                                  <div class="vehicle-feature-box">
                                    <img
                                      src="@/assets/images/icon-dashboard.png"
                                      class="img-fluid"
                                      alt=""
                                    />
                                    <h4>206 <small>kw</small></h4>
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
                                    <h4>206 <small>kw</small></h4>
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
                                    <h4>206 <small>kw</small></h4>
                                    <p>WHEELBASE</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="vehicle-color-variations">
                              <ul class="color-list">
                                <li class="color-item active">
                                  <div
                                    class="color-icon"
                                    style="background-color: #ffffff"
                                  ></div>
                                </li>
                                <li class="color-item">
                                  <div
                                    class="color-icon"
                                    style="background-color: #f54b4b"
                                  ></div>
                                </li>
                                <li class="color-item">
                                  <div
                                    class="color-icon"
                                    style="background-color: #5d5d5d"
                                  ></div>
                                </li>
                                <li class="color-item">
                                  <div
                                    class="color-icon"
                                    style="background-color: #a11515"
                                  ></div>
                                </li>
                                <li class="color-item">
                                  <div
                                    class="color-icon"
                                    style="background-color: #233155"
                                  ></div>
                                </li>
                              </ul>
                            </div>
                            <div class="vehicle-action-buttons">
                              <a href="#" class="btn btn-outline-dark mx-1"
                                >Test Drive</a
                              >
                              <a href="#" class="btn btn-outline-dark mx-1"
                                >View VR</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-8">
                          <div class="gallery-image">
                            <img
                              src="@/assets/images/models/F40/1.png"
                              alt="Slide 01"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="nav-suv"
              role="tabpanel"
              aria-labelledby="nav-suv-tab"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="nav-sedan"
              role="tabpanel"
              aria-labelledby="nav-sedan-tab"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="nav-ev"
              role="tabpanel"
              aria-labelledby="nav-ev-tab"
            >
              ...
            </div> -->
          </div>
        </div>
      </div>
    </section>
    <!-- Custom Slider Start -->

    <section class="section-beauty" v-if="capitalBeautyObj">
      <img
        :src="imageApi + capitalBeautyObj?.bannerImage"
        class="img-fluid"
        alt=""
      />
      <div class="beauty-info">
        <!-- <h2>Capital Beauty</h2> -->
        <h2>{{ capitalBeautyObj?.bannerTitle }}</h2>
        <!-- <h4 class="text-uppercase font-w-6">Redefined</h4> -->
        <h4 class="text-uppercase font-w-6">
          {{ capitalBeautyObj?.bannerSubTitle }}
        </h4>
        <div class="text-center">
          <NuxtLink to="/capital-beauty" class="btn btn-outline-secondary">{{
            capitalBeautyObj?.bannerTitle
          }}</NuxtLink>
        </div>
      </div>
    </section>
    <section class="section-services pt-5 pb-3">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <NuxtLink to="research-development" class="service-box">
              <div class="service-image">
                <img
                  src="../assets/images/service1.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <h3>Research & Development</h3>
            </NuxtLink>
          </div>
          <div class="col-sm-4">
            <NuxtLink to="/off-road" class="service-box">
              <div class="service-image">
                <img
                  src="../assets/images/service2.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <h3>Off-Road Vehicle</h3>
            </NuxtLink>
          </div>
          <div class="col-sm-4">
            <NuxtLink to="/history" class="service-box">
              <div class="service-image">
                <img
                  src="../assets/images/service3.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <h3>BAIC History</h3>
            </NuxtLink>
          </div>
          <div class="col-sm-5">
            <NuxtLink to="/baic-in-x" class="service-box">
              <div class="service-image">
                <img
                  src="../assets/images/service4.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <h3>BAIC in X</h3>
            </NuxtLink>
          </div>
          <div class="col-sm-7">
            <NuxtLink to="/overview" class="service-box">
              <div class="service-image">
                <img
                  src="../assets/images/service5.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <h3>Learn Everything About BAIC Here</h3>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Locations Start -->
    <section class="section-locations pt-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title text-center mb-5">
              <h2 class="text-uppercase">EXPLORE YOUR BAIC</h2>
              <h4 class="text-uppercase">Find Your BAIC In Your Country</h4>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="map-box mb-5">
              <img src="../assets/images/map.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Locations End -->
    <!-- Section Newsfeed Start   -->
    <section class="section-services pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title text-center mb-4">
              <h2 class="text-uppercase">News Feeds</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <a href="javascript:void(0);" class="article-box featured">
              <div class="article-image">
                <img
                  src="../assets/images/news1.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="article-content">
                <h3>Research & Development</h3>
                <h5>
                  On April 20th, on the eve of the Beijing Auto Show, BAIC Group
                  held the
                </h5>
              </div>
            </a>
          </div>
          <div class="col-sm-8">
            <div class="row">
              <div class="col-sm-6">
                <a href="javascript:void(0);" class="article-box">
                  <div class="article-image">
                    <img
                      src="../assets/images/news1.png"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="article-content">
                    <h3>Off-Road Vehicle</h3>
                    <h5>
                      On April 20th, on the eve of the Beijing Auto Show, BAIC
                      Group held the
                    </h5>
                  </div>
                </a>
              </div>
              <div class="col-sm-6">
                <a href="javascript:void(0);" class="article-box">
                  <div class="article-image">
                    <img
                      src="../assets/images/service3.png"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="article-content">
                    <h3>BAIC History</h3>
                    <h5>
                      On April 20th, on the eve of the Beijing Auto Show, BAIC
                      Group held the
                    </h5>
                  </div>
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <a href="javascript:void(0);" class="article-box">
                  <div class="article-image">
                    <img
                      src="../assets/images/news2.png"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="article-content">
                    <h3>Off-Road Vehicle</h3>
                    <h5>
                      On April 20th, on the eve of the Beijing Auto Show, BAIC
                      Group held the
                    </h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 text-end">
            <a href="javascript:void(0);" class="btn btn-outline-dark">More</a>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Newsfeed End   -->
  </div>
</template>
<script>
// Any setup code or component-specific logic can go here.
// definePageMeta({
//   layout: "default", // Use the 'default' layout defined in layouts/default.vue
// });
import { useCommonStore } from "../store/modules/common";
import { useCapitalBeautyStore } from "../../store/modules/capitalBeauty";
import { useModelCategoryStore } from "../store/modules/modelCategory";
import { useModelsStore } from "../store/modules/models";
import { useModelColorsStore } from "../store/modules/modelColor";
import imageApi from "~/helpers/imageapi";
import SwiperSlider from "../components/swiperSlider.vue";
import SwiperModels from "../components/swiperModels.vue";
// import "../assets/js/script";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import SwiperCore from "swiper/core";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// SwiperCore.use([FreeMode, Navigation, Thumbs]);

export default {
  name: "IndexPage",
  layout: "default",
  components: {
    Swiper,
    SwiperSlide,
    SwiperSlider,
    SwiperModels,
  },
  data() {
    return {
      activeSlide: 0,

      thumbsSwiper: null,

      modules: [Navigation, Thumbs, FreeMode],
      activeTab: "SUV",
      imageApi: imageApi,
      common: useCommonStore(),
      capitalBeautyStore: useCapitalBeautyStore(),
      modelCategoryStore: useModelCategoryStore(),
      modelsStore: useModelsStore(),
      modelColorStore: useModelColorsStore(),
    };
  },
  computed: {
    user() {
      return this.common.user;
    },
    capitalBeautyObj() {
      return this.capitalBeautyStore.getCapitalBeauty;
    },
    modelCategories() {
      return this.modelCategoryStore.getModelCategory;
    },
    models() {
      return this.modelsStore.getModels;
    },
    modelsColors() {
      return this.modelColorStore.getModelColors;
    },
    modelsWithCategoriesAndColors() {
      let categoryArr = [];

      if (this.models && this.modelCategories) {
        this.modelCategories?.forEach(category => {
          let modelsCategoryArr = [];
          this.models?.forEach(model => {
            let colorsArr = [];
            this.modelsColors?.forEach(c => {
              if (model.id == c.modelId) {
                colorsArr.push(c);
              }
            });
            if (model.categoryId === category.id) {
              modelsCategoryArr.push({
                categoryName: category.name,
                modelName: model.name,
                categoryId: category.id,
                modelId: model.id,
                image1: model.image1,
                colorArr: colorsArr,
                description: model.description,
                power: model.power,
                torque: model.torque,
                wheelbase: model.wheelbase,
              });
            }
          });
          categoryArr.push({
            categoryName: category.name,
            modelsArr: modelsCategoryArr,
          });
        });
      }
      return categoryArr;
    },
  },
  mounted() {
    this.fetchCapitalBeauty();
    this.fetchCategories();
    this.fetchModels();
    this.fetchModelColors();
    console.log(
      "modelsWithCategoriesAndColors",
      this.modelsWithCategoriesAndColors
    );
    // console.log("this.$refs.galleryThumbs", this.$refs.galleryThumbs);
    // this.$nextTick(() => {
    //   const galleryMain = this.$refs.galleryMain.swiper;
    //   const galleryThumbs = this.$refs.galleryThumbs.swiper;

    //   galleryMain.on("slideChange", () => {
    //     galleryThumbs.slideTo(galleryMain.activeIndex);
    //   });

    //   galleryThumbs.on("click", (swiper, event) => {
    //     const clickedIndex = swiper.clickedIndex;
    //     if (clickedIndex !== undefined) {
    //       galleryMain.slideTo(clickedIndex);
    //     }
    //   });
    // });
  },
  methods: {
    onClickSlide(index) {
      console.log("AAAAAAAAAA", this.$refs.mainSwiper);
      // this.$refs.mainSwiper[index].slideToClickedSlide = index;
      this.activeSlide = index;
    },
    onSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    fetchCapitalBeauty() {
      this.capitalBeautyStore.fetchCapitalBeauty();
    },
    fetchModels() {
      this.modelsStore.fetchModels();
    },
    fetchModelColors() {
      this.modelColorStore.fetchModelColors();
    },
    fetchCategories() {
      this.modelCategoryStore.fetchModelsCategory();
    },
    selectTab(tabName) {
      this.activeTab = tabName;
    },
  },
};
</script>
