<template>
  <AppModal
    :to-show="modalStore.showModal && modalStore.currentModal === 'EventModal'"
  >
    <div class="px-4 py-4 flex flex-col items-center gap-7">
      <font-awesome-icon
        class="cursor-pointer text-xl self-start"
        icon="fa-solid fa-xmark"
        @click="closeModal"
      />

      <div class="app-image-wrapper self-center rounded-full p-6">
        <img
          src="../../assets/images/add-form-buttons/camera.svg"
          alt="Event Icon"
          class="app-image w-full h-full object-contain"
        />
      </div>

      <h2 class="font-bold text-2xl">Add Event</h2>

      <div class="flex gap-4">
        <h2
          class="app-eventnumber app-eventnumber-active px-4 py-2 rounded-full bg-white text-black border-gray-400 border"
        >
          1
        </h2>
        <h2
          class="px-4 py-2 rounded-full bg-white text-black border-gray-400 border"
        >
          2
        </h2>
        <h2
          class="px-4 py-2 rounded-full bg-white text-black border-gray-400 border"
        >
          3
        </h2>
        <h2
          class="px-4 py-2 rounded-full bg-white text-black border-gray-400 border"
        >
          4
        </h2>
        <h2
          class="px-4 py-2 rounded-full bg-white text-black border-gray-400 border"
        >
          5
        </h2>
        <h2
          class="px-4 py-2 rounded-full bg-white text-black border-gray-400 border"
        >
          6
        </h2>
      </div>

      <p class="self-start ml-8 mt-7">Input event title</p>
      <input
        name="event"
        id="event"
        type="text"
        placeholder="Title"
        value="Title"
        class="border border-gray-400 px-6 py-4 rounded-full"
      />

      <button class="app-submit-button text-white w-80 rounded-full py-4">
        Next
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

.app-eventnumber.app-eventnumber-active {
  background-color: #2daee1;
  color: white;
  border-color: transparent;
}
</style>
