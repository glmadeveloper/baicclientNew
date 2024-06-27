import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useAfterSalesServiceStore = defineStore("afterSalesService", {
  state: () => ({
    afterSalesService: null,
  }),
  getters: {
    getAfterSalesService(state) {
      return state.afterSalesService;
    },
  },
  actions: {
    async fetchAfterSalesService() {
      try {
        const res = await API.get("after-sales-service/1");

        this.afterSalesService = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
