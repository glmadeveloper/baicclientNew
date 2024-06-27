<template>
  <div>
    <!-- Section Page Heading Start   -->
    <section class="page-heading">
      <img
        src="@/assets/images/media-page-heading.png"
        class="img-fluid"
        alt=""
      />
      <div class="page-heading-info">
        <div>
          <h1 class="text-uppercase">Media Contact</h1>
        </div>
      </div>
    </section>
    <!-- Section Page Heading End   -->

    <!-- Section Content Vision Start -->
    <section class="section-content py-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 m-auto">
            <div class="mb-5 text-center">
              <p>
                Thank you for your support to BAIC, <br />
                Please leave your contact information and questions, we will
                arrange professionals to contact you
              </p>
            </div>
            <Form
              as="form"
              class="form"
              @submit="onSubmit"
              :initial-values="initialData"
              :validation-schema="schema"
              v-slot="{ errors }"
            >
              <div class="form-box">
                <div class="field-group">
                  <div class="row">
                    <div class="col-sm-3">
                      <label>First Name</label>
                    </div>
                    <div class="col-sm-9">
                      <Field
                        type="text"
                        name="firstName"
                        class="input-box"
                        placeholder="Please enter your first name"
                      />
                    </div>
                  </div>
                </div>
                <div class="text-danger" v-if="errors">
                  {{ errors.firstName }}
                </div>
                <div class="invalid-feedback">{{ errors.firstName }}</div>
                <div class="field-group">
                  <div class="row">
                    <div class="col-sm-3">
                      <label>Last Name</label>
                    </div>
                    <div class="col-sm-9">
                      <Field
                        type="text"
                        class="input-box"
                        name="lastName"
                        placeholder="Please enter your last name"
                      />
                    </div>
                  </div>
                </div>
                <div class="text-danger" v-if="errors">
                  {{ errors.lastName }}
                </div>
                <div class="field-group">
                  <div class="row">
                    <div class="col-sm-3">
                      <label>Media Name</label>
                    </div>
                    <div class="col-sm-9">
                      <Field
                        type="text"
                        name="mediaName"
                        class="input-box"
                        placeholder="Please enter your media name"
                      />
                    </div>
                  </div>
                </div>
                <div class="text-danger" v-if="errors">
                  {{ errors.mediaName }}
                </div>
                <div class="field-group">
                  <div class="row">
                    <div class="col-sm-3">
                      <label>Email</label>
                    </div>
                    <div class="col-sm-9">
                      <Field
                        type="text"
                        name="email"
                        class="input-box"
                        placeholder="Please enter your email address"
                      />
                    </div>
                  </div>
                </div>
                <div class="text-danger" v-if="errors">
                  {{ errors.email }}
                </div>
                <div class="field-group field-group-textarea">
                  <div class="row">
                    <div class="col-sm-12">
                      <label>Media Introduction</label>
                      <Field
                        type="text"
                        as="textarea"
                        rows="5"
                        name="mediaIntroduction"
                        class="input-box"
                        placeholder="Please enter your description"
                      ></Field>
                    </div>
                  </div>
                </div>
                <div class="text-danger" v-if="errors">
                  {{ errors.mediaIntroduction }}
                </div>
                <div class="text-end">
                  <button type="submit" class="btn btn-outline-secondary">
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Content Vision End -->
  </div>
</template>

<script>
import { Field, Form } from "vee-validate";
import * as yup from "yup";
import { useMediaContactStore } from "../../store/modules/mediaContact";

export default {
  components: {
    Field,
    Form,
  },
  data() {
    const emailRegex = new RegExp(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,3})$/
    );
    const schema = yup.object().shape({
      firstName: yup
        .string()
        .trim()
        .required("First Name is Required")
        .min(3, "First Name must be at least 3 characters")
        .max(20, "First Name must be at most 20 characters"),
      lastName: yup
        .string()
        .trim()
        .required("Last Name is Required")
        .min(3, "Last Name must be at least 3 characters")
        .max(20, "Last Name must be at most 20 characters"),
      mediaName: yup
        .string()
        .trim()
        .required("Media Name is Required")
        .min(3, "Media Name must be at least 3 characters")
        .max(20, "Media Name must be at most 20 characters"),
      email: yup
        .string()
        .trim()
        .email()
        .required("Email is Required")
        .matches(emailRegex, "Email not allowed"),
      mediaIntroduction: yup
        .string()
        .trim()
        .required("Media Introduction is Required"),
    });

    const initialData = {
      firstName: "",
      lastName: "",
      mediaName: "",
      email: "",
      mediaIntroduction: "",
    };
    return {
      schema,
      initialData,
      mediaContactStore: useMediaContactStore(),
    };
  },
  methods: {
    onSubmit(values, actions) {
      console.log("media", values);
      this.mediaContactStore.post(values);
      actions.resetForm();
    },
  },
};
</script>
