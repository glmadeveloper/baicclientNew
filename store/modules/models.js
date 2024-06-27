import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useModelsStore = defineStore("models", {
  state: () => ({
    models: [],
    modelDetail: {},
  }),
  getters: {
    getModels(state) {
      return state.models;
    },
    getModelDetail(state) {
      return state.modelDetail;
    },
  },
  actions: {
    async fetchModels() {
      try {
        const res = await API.get("model");
        this.models = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchModelDetail(id) {
      try {
        const res = await API.get(`model/${id}`);
        this.modelDetail = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
