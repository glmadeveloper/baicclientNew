import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useMultimediaStore = defineStore("multimedia", {
  state: () => ({
    multimedia: [],
  }),
  getters: {
    getMultimedia(state) {
      return state.multimedia;
    },
  },
  actions: {
    async fetchMultimedia() {
      try {
        const res = await API.get("multi-media");

        this.multimedia = res.data.data;
        // console.log("DATAA", res.data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
