import { defineStore } from "pinia";
import API from "../../helpers/api";
export const useTestDriveStore = defineStore("testDrive", {
  state: () => ({
    testDriveObj: null,
  }),
  getters: {
    addTestDrive(state) {
      return state.testDriveObj;
    },
  },
  actions: {
    async post(data) {
      try {
        const res = await API.post("test-drive", data);
        this.testDriveObj = res.data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
