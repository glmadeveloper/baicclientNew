import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useVisionStore = defineStore("vision", {
  state: () => ({
    vision: [],
  }),
  getters: {
    getVision(state) {
      return state.vision;
    },
  },
  actions: {
    async fetchVision() {
      try {
        const res = await API.get("vision");

        this.vision = res.data.data;
        // console.log("DATAA", res.data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
