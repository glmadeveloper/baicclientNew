import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useDataProtectionStore = defineStore("dataProtection", {
  state: () => ({
    dataProtectionObj: null,
  }),
  getters: {
    getDataProtection(state) {
      return state.dataProtectionObj;
    },
  },
  actions: {
    async fetchDataProtection() {
      try {
        const res = await API.get("data-protection/1");

        this.dataProtectionObj = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
