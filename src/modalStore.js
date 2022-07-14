import { reactive } from "vue";

export const modalStore = reactive({
  showModal: false,
  updateModal(toShow, currentModal) {
    if (!toShow) document.body.style.overflow = "scroll";
    else document.body.style.overflow = "hidden";
    this.showModal = toShow;
    this.currentModal = currentModal;
  },
  currentModal: null,
});
