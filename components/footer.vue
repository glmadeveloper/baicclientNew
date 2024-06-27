<template>
  <div class="container">
    <!-- Footer Logo -->
    <div class="footer-logo">
      <div class="row">
        <div class="col-sm-12">
          <div class="mb-5">
            <img :src="imageApi + homeObj?.logo" class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- Sitemap -->
    <div class="sitemap">
      <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-5 row-cols-xl-5">
        <div class="col">
          <h4>Models</h4>
          <div class="footerlinks">
            <ul>
              <li v-for="(model, index) in models" :key="index">
                <NuxtLink :to="'/model/' + model.id">{{ model.name }}</NuxtLink>
              </li>
              <!-- <li><NuxtLink to="">BJ40 Plus</NuxtLink></li>
              <li><NuxtLink to="">BJ40 Plus</NuxtLink></li>
              <li><NuxtLink to="">BJ40 Plus</NuxtLink></li>
              <li><NuxtLink to="">BJ40 Plus</NuxtLink></li>
              <li><NuxtLink to="">BJ40 Plus</NuxtLink></li> -->
            </ul>
          </div>
        </div>
        <div class="col">
          <h4>Innovation</h4>
          <div class="footerlinks">
            <ul>
              <li>
                <NuxtLink to="/capital-beauty">Capital Beauty</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/concept-car">Concept Car</NuxtLink>
              </li>
              <li><NuxtLink to="/off-road">Off Road</NuxtLink></li>
              <li><NuxtLink to="/research-development">Power</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="col">
          <h4>About</h4>
          <div class="footerlinks">
            <ul>
              <li><NuxtLink to="/overview">Overview</NuxtLink></li>
              <li><NuxtLink to="/vision">Vision</NuxtLink></li>
              <li><NuxtLink to="/history">History</NuxtLink></li>
              <li><NuxtLink to="/">CSR</NuxtLink></li>
              <li>
                <NuxtLink to="/after-sales-service"
                  >After-Sales Service</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <h4>Newsroom</h4>
          <div class="footerlinks">
            <ul>
              <li>
                <NuxtLink to="/news-release">News Release</NuxtLink>
              </li>
              <li><NuxtLink to="/subcribe">Subscribe</NuxtLink></li>
              <li>
                <NuxtLink to="/media-contact">Media Contact</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/baic-in-x">BAIC in X</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <h4>Connect</h4>
          <div class="footerlinks">
            <ul>
              <li>
                <NuxtLink to="/contact-us">Contact Us</NuxtLink>
              </li>
              <li><NuxtLink to="/">Join Us</NuxtLink></li>
              <li>
                <NuxtLink to="/distributor-center">Distributor Center</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/multimedia">Download Center</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Copyright -->
    <div class="copyright-bar">
      <div class="row align-items-center">
        <div class="col-sm-8">
          <div class="copyright">
            &copy; Gargash Enterprise LLC 2024. All rights reserved
            <NuxtLink to="/terms-and-conditions">Terms & Conditions</NuxtLink>
            <NuxtLink to="/cookie-policy">Cookie Policy</NuxtLink>
            <NuxtLink to="/data-protection">Data Protection</NuxtLink>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="footer-social-icons">
            <NuxtLink to="/"><i class="fa-brands fa-facebook-f"></i></NuxtLink>
            <NuxtLink to="/"><i class="fa-brands fa-instagram"></i></NuxtLink>
            <NuxtLink to="/"><i class="fa-brands fa-linkedin-in"></i></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useModelsStore } from "../store/modules/models";
import { useHomeStore } from "../store/modules/home";

import imageApi from "~/helpers/imageapi";
export default {
  data() {
    return {
      modelsStore: useModelsStore(),
      homeStore: useHomeStore(),
      config: useRuntimeConfig(),
      imageApi,
    };
  },
  computed: {
    models() {
      return this.modelsStore.getModels;
    },
    homeObj() {
      return this.homeStore.getHome;
    },
  },
  mounted() {
    this.fetchHome();
    this.fetchModels();

    // console.log("PROCESSS ENV", process.env.NODE_ENV);/
  },
  methods: {
    fetchModels() {
      this.modelsStore.fetchModels();
    },
    fetchHome() {
      this.homeStore.fetchHome();
    },
  },
};
</script>
