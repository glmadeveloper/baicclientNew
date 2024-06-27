import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useResearchDevelopmentStore = defineStore("researchDevelopment", {
  state: () => ({
    researchDevelopmentObj: null,
  }),
  getters: {
    getResearchDevelopment(state) {
      return state.researchDevelopmentObj;
    },
  },
  actions: {
    async fetchResearchDevelopment() {
      try {
        const res = await API.get("research-and-development/1");

        this.researchDevelopmentObj = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
