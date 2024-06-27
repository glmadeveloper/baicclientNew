import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useCapitalBeautyStore = defineStore("capitalBeauty", {
  state: () => ({
    capitalBeautyObj: null,
  }),
  getters: {
    getCapitalBeauty(state) {
      return state.capitalBeautyObj;
    },
  },
  actions: {
    async fetchCapitalBeauty() {
      try {
        const res = await API.get("capital-beauty/1");

        this.capitalBeautyObj = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
