import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useTermsCondtionsStore = defineStore("termsCondtions", {
  state: () => ({
    termsCondtionsObj: null,
  }),
  getters: {
    getTermsCondtions(state) {
      return state.termsCondtionsObj;
    },
  },
  actions: {
    async fetchTermsCondtions() {
      try {
        const res = await API.get("terms-and-condition/1");

        this.termsCondtionsObj = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
