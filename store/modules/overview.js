import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useOverviewStore = defineStore("overview", {
  state: () => ({
    overviewObj: null,
  }),
  getters: {
    getOverview(state) {
      return state.overviewObj;
    },
  },
  actions: {
    async fetchOverview() {
      try {
        const res = await API.get("overview/1");

        this.overviewObj = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
