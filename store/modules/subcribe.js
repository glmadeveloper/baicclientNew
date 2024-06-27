import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useSubscribeStore = defineStore("subscribe", {
  state: () => ({
    subscribe: null,
  }),
  getters: {
    addSubscribe(state) {
      return state.subscribe;
    },
  },
  actions: {
    async post(data) {
      try {
        const res = await API.post("subscribe", data);
        this.subscribe = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
