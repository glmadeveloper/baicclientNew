import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useCookiePolicyStore = defineStore("cookiePolicy", {
  state: () => ({
    cookiePolicyObj: null,
  }),
  getters: {
    getCookiePolicy(state) {
      return state.cookiePolicyObj;
    },
  },
  actions: {
    async fetchCookiePolicy() {
      try {
        const res = await API.get("cookie-policy/1");

        this.cookiePolicyObj = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
