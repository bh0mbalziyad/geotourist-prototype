<template>
  <Teleport to="#modal-target">
    <div
      @click="this.modalStore.updateModal(false)"
      class="app-modal-backdrop"
    ></div>
    <Transition name="modal">
      <div
        v-if="this.modalStore.showModal"
        class="border border-gray-400 rounded-lg bg-white shadow app-modal"
      >
        <slot>This is a modal!</slot>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import { modalStore } from "../../modalStore";

export default {
  name: "AppModal",
  data: () => {
    return {
      modalStore,
    };
  },
};
</script>

<style scoped>
.app-modal {
  position: absolute;
  min-height: 400px;
  height: min-content;
  width: 400px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.app-modal-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-enter-active,
.modal-leave-active {
  transition: transform, opacity 0.5s ease-in-out;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(-10%);
}
</style>
