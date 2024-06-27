import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", {
  state: () => ({
    user: [1, 2, 3, 4],
  }),
  actions: {},
});
