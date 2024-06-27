import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useConceptCarStore = defineStore("conceptCar", {
  state: () => ({
    conceptCarObj: null,
  }),
  getters: {
    getConceptCar(state) {
      return state.conceptCarObj;
    },
  },
  actions: {
    async fetchConceptCar() {
      try {
        const res = await API.get("concept-car/1");

        this.conceptCarObj = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
