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
          src="../../assets/images/add-form-buttons/link.svg"
          alt="Link Icon"
          class="app-image w-full h-full object-contain"
        />
      </div>

      <h2 class="font-bold text-2xl">Add Link</h2>

      <input
        name="link"
        id="link"
        type="text"
        placeholder="Link"
        value="Link"
        class="border border-gray-400 px-6 py-4 rounded-full"
      />

      <p class="app-input-subtext text-sm self-end mr-10 -mt-6">
        add next link...
      </p>

      <button class="app-submit-button text-white w-80 rounded-full py-4">
        Save and continue
      </button>
    </div>
  </AppModal>
</template>

<script>
import AppModal from "./Modal.vue";
import { modalStore } from "../../modalStore";

export default {
  name: "AppLinkModal",
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
