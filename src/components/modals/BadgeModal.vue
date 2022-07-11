<template>
  <AppModal>
    <div class="px-4 py-4 flex flex-col items-center gap-7">
      <font-awesome-icon
        class="cursor-pointer text-xl self-start"
        icon="fa-solid fa-xmark"
        @click="closeModal"
      />

      <div class="app-image-wrapper self-center rounded-full p-6">
        <img
          src="../../assets/images/add-form-buttons/badge.svg"
          alt="Badge Icon"
          class="app-image w-full h-full object-contain"
        />
      </div>
      <h2 class="font-bold text-2xl">Add Event</h2>
      <p class="text-center text-gray-400">
        upload file from your computer <br />jpg; png; svg; tiff; <br />Size
        90x90 px
      </p>
    </div>
  </AppModal>
</template>

<script>
import AppModal from "./Modal.vue";
import { modalStore } from "../../modalStore";

export default {
  name: "AppBadgeModal",
  components: {
    AppModal,
  },
  data() {
    return {
      modalStore,
    };
  },
  methods: {
    closeModal() {
      this.modalStore.updateModal(false);
    },
  },
};
</script>

<style scoped>
.app-image-wrapper {
  height: 100px;
  width: 100px;
  background-color: #2daee1;
}

.app-image {
  filter: invert(98%) sepia(2%) saturate(0%) hue-rotate(210deg) brightness(103%)
    contrast(103%);
}

.app-input-subtext {
  color: #2daee1;
}

.app-submit-button {
  background-color: #2daee1;
}
</style>
