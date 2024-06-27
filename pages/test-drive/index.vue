<template>
  <div>
    <!-- Section Page Heading Start   -->
    <section class="page-heading">
      <img
        src="@/assets/images/testdrive-page-heading.png"
        class="img-fluid"
        alt=""
      />
      <div class="page-heading-info">
        <div>
          <h1 class="text-uppercase">Test Drive</h1>
        </div>
      </div>
    </section>
    <!-- Section Page Heading End   -->

    <!-- Section Locations Start -->
    <section class="section-testdrive py-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="text-center my-5">
              <h4>
                Please leave your contact information, we will get in touch with
                you
              </h4>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <Form
              as="form"
              class="form"
              @submit="onSubmit"
              :initial-values="initialData"
              :validation-schema="schema"
              v-slot="{ errors }"
            >
              <div class="testdrive-form">
                <div class="testdrive-form-section">
                  <div class="testdrive-form-heading">
                    Please fill in the following information
                    <span class="heading-step">Step1</span>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <Field
                          name="country"
                          as="select"
                          class="form-select"
                          :class="{ 'is-invalid': errors.country }"
                        >
                          <option value="">
                            Please select your country region
                          </option>
                          <option value="india">India</option>
                          <option value="UAE">UAE</option>
                        </Field>
                        <div class="text-danger px-4">{{ errors.country }}</div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <div class="form-group">
                          <Field
                            name="gender"
                            as="select"
                            class="form-select"
                            :class="{ 'is-invalid': errors.gender }"
                          >
                            <option value="">Please select your Gender</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Other">Other</option>
                          </Field>
                          <div class="text-danger px-4">
                            {{ errors.gender }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <Field
                          name="name"
                          type="text"
                          class="form-control"
                          :class="{ 'is-invalid': errors.name }"
                          placeholder="Please enter your name"
                        />
                        <div class="text-danger px-4">
                          {{ errors.name }}
                        </div>
                        <!-- <input
                          type="text"
                          class="form-control"
                          placeholder="Please enter your name"
                        /> -->
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <div class="input-group field-phonenumber">
                          <div class="input-group-prepend">
                            <Field
                              name="countryCode"
                              as="select"
                              class="form-select"
                              :class="{ 'is-invalid': errors.countryCode }"
                            >
                              <option value="+91" default>+91</option>
                              <option value="+1">+1</option>
                            </Field>
                            <!-- <select class="form-select">
                              <option>+91</option>
                            </select> -->
                          </div>
                          <Field
                            name="phoneNumber"
                            type="text"
                            class="form-control"
                            placeholder="Please enter your Phone Number"
                            :class="{ 'is-invalid': errors.phoneNumber }"
                          />
                        </div>
                        <div class="text-danger px-4">
                          {{ errors.phoneNumber }}
                        </div>
                        <div class="text-danger px-4">
                          {{ errors.countryCode }}
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <Field
                          name="email"
                          type="text"
                          class="form-control"
                          :class="{ 'is-invalid': errors.email }"
                          placeholder="Please enter your Email"
                        />
                        <div class="text-danger px-4">{{ errors.email }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testdrive-form-section">
                  <div class="testdrive-form-heading">
                    Choose a Car
                    <span class="heading-step">Step2</span>
                  </div>

                  <div class="radio-buttons">
                    <div class="row">
                      <div
                        class="col-sm-3"
                        v-for="(model, index) in models"
                        :key="index"
                      >
                        <div class="car-selections">
                          <label class="radio-img">
                            <Field
                              type="radio"
                              name="modelId"
                              :value="model.id"
                            />
                            <div class="image">
                              <img
                                :src="imageApi + model.image1"
                                class="img-fluid"
                                alt=""
                              />
                              <h4>{{ model.name }}</h4>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div class="text-danger px-4">{{ errors.modelId }}</div>
                      <!-- <div class="col-sm-3">
                      <div class="car-selections">
                        <label class="radio-img">
                          <input type="radio" name="layout" value="2" />
                          <div class="image">
                            <img
                              src="@/assets/images/models/BJ40PLUS/1.png"
                              class="img-fluid"
                              alt=""
                            />
                            <h4>BJ40 PLUS</h4>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="car-selections">
                        <label class="radio-img">
                          <input type="radio" name="layout" value="3" />
                          <div class="image">
                            <img
                              src="@/assets/images/models/BJ40SE/1.png"
                              class="img-fluid"
                              alt=""
                            />
                            <h4>BJ40 SE</h4>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="car-selections">
                        <label class="radio-img">
                          <input type="radio" name="layout" value="4" />
                          <div class="image">
                            <img
                              src="@/assets/images/models/BJ40PLUS/1.png"
                              class="img-fluid"
                              alt=""
                            />
                            <h4>BJ40 OFFROADER</h4>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="car-selections">
                        <label class="radio-img">
                          <input type="radio" name="layout" value="4" />
                          <div class="image">
                            <img
                              src="@/assets/images/models/F40/1.png"
                              class="img-fluid"
                              alt=""
                            />
                            <h4>F40</h4>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="car-selections">
                        <label class="radio-img">
                          <input type="radio" name="layout" value="4" />
                          <div class="image">
                            <img
                              src="@/assets/images/models/BJ80/1.png"
                              class="img-fluid"
                              alt=""
                            />
                            <h4>BJ80</h4>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="car-selections">
                        <label class="radio-img">
                          <input type="radio" name="layout" value="4" />
                          <div class="image">
                            <img
                              src="@/assets/images/models/X35/1.png"
                              class="img-fluid"
                              alt=""
                            />
                            <h4>X35</h4>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="car-selections">
                        <label class="radio-img">
                          <input type="radio" name="layout" value="4" />
                          <div class="image">
                            <img
                              src="@/assets/images/models/ALLNEWX7/1.png"
                              class="img-fluid"
                              alt=""
                            />
                            <h4>ALL NEW X7</h4>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="car-selections">
                        <label class="radio-img">
                          <input type="radio" name="layout" value="4" />
                          <div class="image">
                            <img
                              src="@/assets/images/models/EU5/1.png"
                              class="img-fluid"
                              alt=""
                            />
                            <h4>EU5</h4>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="car-selections">
                        <label class="radio-img">
                          <input type="radio" name="layout" value="4" />
                          <div class="image">
                            <img
                              src="@/assets/images/models/U5PLUS/1.png"
                              class="img-fluid"
                              alt=""
                            />
                            <h4>U5 PLUS</h4>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="car-selections">
                        <label class="radio-img">
                          <input type="radio" name="layout" value="4" />
                          <div class="image">
                            <img
                              src="@/assets/images/models/X55II/1.png"
                              class="img-fluid"
                              alt=""
                            />
                            <h4>X55 II</h4>
                          </div>
                        </label>
                      </div>
                    </div> -->
                    </div>
                  </div>
                </div>
                <div class="testdrive-form-section">
                  <div class="testdrive-form-heading">
                    Down
                    <span class="heading-step">Step3</span>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group text-end">
                        <button type="submit" class="btn btn-outline-dark">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Locations End -->
  </div>
</template>

<script>
// country
// gender
// name
// phoneNumber
// email
// modelId
import { Field, Form } from "vee-validate";
import * as yup from "yup";
import { useTestDriveStore } from "../../store/modules/testDrive";
import { useModelsStore } from "../../store/modules/models";
import imageApi from "~/helpers/imageapi";
export default {
  components: {
    Field,
    Form,
  },
  data() {
    const emailRegex = new RegExp(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,3})$/
    );
    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const schema = yup.object().shape({
      country: yup.string().required("Country Name is Required"),
      gender: yup.string().required("Gender is Required"),
      name: yup
        .string()
        .trim()
        .required("Name is Required")
        .min(3, "Name must be at least 3 characters")
        .max(20, "Name must be at most 20 characters"),
      countryCode: yup.string().required("Country Code is Required"),
      email: yup
        .string()
        .trim()
        .email("Enter a valid email")
        .required("Email is Required")
        .matches(emailRegex, "Email not allowed"),
      phoneNumber: yup
        .string()
        .trim()
        .required("Phone Number is Required")
        .matches(phoneRegExp, "Phone number is not valid"),
      modelId: yup.string().required("Model Selction is Required"),
    });

    const initialData = {
      country: "",
      gender: "",
      name: "",
      email: "",
      phoneNumber: "",
      modelId: "",
    };
    return {
      imageApi,
      schema,
      initialData,
      testDriveStore: useTestDriveStore(),
      modelsStore: useModelsStore(),
    };
  },
  computed: {
    models() {
      return this.modelsStore.getModels;
    },
  },
  mounted() {
    this.fetchModels();
  },
  methods: {
    onSubmit(values, actions) {
      console.log("media", values);
      this.testDriveStore.post(values);
      actions.resetForm();
    },
    fetchModels() {
      this.modelsStore.fetchModels();
    },
  },
};
</script>
