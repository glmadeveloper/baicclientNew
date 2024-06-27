import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useModelCategoryStore = defineStore("modelCategory", {
  state: () => ({
    modelCatgories: [],
  }),
  getters: {
    getModelCategory(state) {
      return state.modelCatgories;
    },
  },
  actions: {
    async fetchModelsCategory() {
      try {
        const res = await API.get("model-category");
        this.modelCatgories = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
