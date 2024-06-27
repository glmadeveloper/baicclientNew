import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useNewsReleaseStore = defineStore("newsRelease", {
  state: () => ({
    newsReleases: [],
  }),
  getters: {
    getNewsRelease(state) {
      return state.newsReleases;
    },
  },
  actions: {
    async fetchNewsRelease() {
      try {
        const res = await API.get("news-release");
        this.newsReleases = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
