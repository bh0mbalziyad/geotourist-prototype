import { reactive } from "vue";

export const pageStore = reactive({
  currentTab: "description",
  updateTab: (newTab) => {
    this.currentTab = newTab;
  },
});
