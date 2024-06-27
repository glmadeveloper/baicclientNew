<template>
  <div>
    <!-- Section Page Heading Start   -->
    <section class="cms-page-heading pt-5">
      <div class="text-center">
        <h2 class="text-uppercase">Data Protection</h2>
        <!-- <p>Time-honored BAIC Contributes To A Wonderful Life</p> -->
        <p>{{ dataProtectionObj?.title }}</p>
      </div>
    </section>
    <!-- Section Page Heading End   -->

    <!-- Section Content Vision Start -->
    <section class="section-content py-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div v-html="dataProtectionObj?.description"></div>
            <!-- <h4>
              This Privacy Policy provides information about how BAIC (“we,”
              “us,” or “our”), located at 99 Shuanghe Street, Shunyi District,
              Beijing, China, processes your personal data.
            </h4>
            <p>
              We appreciate you visiting our website and your interest in the
              products we offer. Protecting your personal data is very important
              to us. This Privacy Policy outlines the collection, use, and legal
              basis for processing your personal information, as well as the
              purposes for which it is used, the rights you have in relation to
              this data. This Privacy Policy applies to all website, products,
              and services offered by BAIC that display or are linked to this
              Privacy Policy.
            </p>
            <p>
              Please note that this Privacy Policy specifically applies to the
              collection and use of personal data through our solutions. It does
              not govern the personal data we process through other solutions.
            </p>
            <p>
              With that in mind, the purpose of this data protection notice is
              to provide a comprehensive description for:
            </p>
            <ol>
              <li>How to contact us</li>
              <li>Personal information we collect</li>
              <li>How and why we obtain your personal information</li>
              <li>Cookies</li>
              <li>How we share your personal data</li>
              <li>How we store your personal data</li>
              <li>Will your data be transmitted to another country?</li>
              <li>Data protection rights</li>
              <li>How to complain</li>
            </ol>
            <h4>1. How to contact us</h4>
            <p>
              As we do not have an establishment within the Union, we have
              designated a Data Protection Representative. <br /><br />
              Our China-based Data Protection Representative is entrusted to
              oversee and advise our compliance with data protection. For
              inquiries or concerns regarding the processing of your personal
              data, please contact our Data Protection Representative directly
              at branddept@baicintl.com.
            </p> -->
          </div>
        </div>
      </div>
    </section>
    <!-- Section Content Vision End -->
  </div>
</template>

<script>
import { useDataProtectionStore } from "../../store/modules/dataProtection";
import imageApi from "~/helpers/imageapi";
export default {
  name: "Data Protection",
  layout: "default",
  components: {},
  data() {
    return {
      imageApi: imageApi,
      dataProtectionStore: useDataProtectionStore(),
    };
  },
  computed: {
    dataProtectionObj() {
      return this.dataProtectionStore.getDataProtection;
    },
  },
  mounted() {
    this.fetchDataProtection();
    console.log("COOKIE POLICY", this.dataProtectionObj);
  },
  methods: {
    fetchDataProtection() {
      this.dataProtectionStore.fetchDataProtection();
    },
  },
};
</script>
