import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useContactUsStore = defineStore("contactus", {
  state: () => ({
    contact: null,
  }),
  getters: {
    addContact(state) {
      return state.contact;
    },
  },
  actions: {
    async post(data) {
      try {
        const res = await API.post("contact-us", data);
        this.contact = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
