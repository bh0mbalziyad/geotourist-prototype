<template>
  <AppModal
    :to-show="modalStore.showModal && modalStore.currentModal === 'QuizModal'"
  >
    <div class="px-4 py-4 flex flex-col items-center">
      <font-awesome-icon
        class="cursor-pointer text-xl self-start"
        icon="fa-solid fa-xmark"
        @click="closeModal"
      />

      <div class="app-image-wrapper self-center rounded-full p-6 mt-7">
        <img
          src="../../assets/images/add-form-buttons/quiz.svg"
          alt="Quiz Icon"
          class="app-image w-full h-full object-contain"
        />
      </div>

      <h2 class="font-bold text-2xl mt-7">Add Quiz</h2>

      <p class="self-start ml-8 mt-7">Input Quiz question</p>
      <input
        name="quiz"
        id="quiz"
        type="text"
        placeholder="Quiz question"
        class="border border-gray-400 px-6 py-4 rounded-full mt-3"
      />

      <p class="app-input-subtext text-sm self-end mr-10 mt-2">
        add next link...
      </p>

      <p class="self-start ml-8 mt-7">
        Input answers (min 2.) and select correct one
      </p>
      <input
        name="quiz"
        id="quiz"
        type="text"
        placeholder="Quiz question"
        class="border border-gray-400 px-6 py-4 rounded-full mt-3"
      />
      <input
        name="quiz"
        id="quiz"
        type="text"
        placeholder="Quiz question"
        class="border border-gray-400 px-6 py-4 rounded-full mt-3"
      />
      <p class="app-input-subtext text-sm self-end mr-10 mt-2">add answer...</p>

      <button class="app-submit-button text-white w-80 rounded-full py-4 mt-7">
        Save and continue
      </button>
    </div>
  </AppModal>
</template>

<script>
import AppModal from "./Modal.vue";
import { modalStore } from "../../modalStore";

export default {
  name: "AppQuizModal",
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
