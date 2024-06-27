import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useFeatureServicesStore = defineStore("featureServices", {
  state: () => ({
    fetureServices: [],
  }),
  getters: {
    getFeatureServices(state) {
      return state.fetureServices;
    },
  },
  actions: {
    async fetchFeatureServices() {
      try {
        const res = await API.get("feature-service");

        this.fetureServices = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
