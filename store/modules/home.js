import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useHomeStore = defineStore("home", {
  state: () => ({
    homeObj: null,
  }),
  getters: {
    getHome(state) {
      return state.homeObj;
    },
  },
  actions: {
    async fetchHome() {
      try {
        const res = await API.get("homepage/1");

        this.homeObj = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
