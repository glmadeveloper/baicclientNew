import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useOffRoadStore = defineStore("afterSalesService", {
  state: () => ({
    offRoad: null,
  }),
  getters: {
    getOffRoad(state) {
      return state.offRoad;
    },
  },
  actions: {
    async fetchOffRoad() {
      try {
        const res = await API.get("off-road/1");

        this.offRoad = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
