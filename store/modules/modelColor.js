import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useModelColorsStore = defineStore("modelColors", {
  state: () => ({
    modelColors: [],
  }),
  getters: {
    getModelColors(state) {
      return state.modelColors;
    },
  },
  actions: {
    async fetchModelColors() {
      try {
        const res = await API.get("model-with-colors");

        this.modelColors = res.data.data;
        // console.log("DATAA", res.data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
