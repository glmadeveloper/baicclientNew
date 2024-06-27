import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useHistoryStore = defineStore("history", {
  state: () => ({
    histories: [],
  }),
  getters: {
    getHistories(state) {
      return state.histories;
    },
  },
  actions: {
    async fetchHistories() {
      try {
        const res = await API.get("history");

        this.histories = res.data.data;
        // console.log("DATAA", res.data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
