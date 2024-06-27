import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useMediaContactStore = defineStore("mediacontact", {
  state: () => ({
    mediaContact: null,
  }),
  getters: {
    addSubscribe(state) {
      return state.mediaContact;
    },
  },
  actions: {
    async post(data) {
      try {
        const res = await API.post("media-contact", data);
        this.mediaContact = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
