<template>
  <Teleport to="#modal-target">
    <Transition name="modal-backdrop" appear>
      <div
        v-if="toShow"
        @click="this.modalStore.updateModal(false)"
        class="app-modal-backdrop"
      ></div>
    </Transition>
    <Transition name="modal" appear>
      <div
        v-if="toShow"
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
  props: {
    toShow: Boolean,
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
  transition: all 0.3s ease-in-out;
}

.modal-enter-from,
.modal-leave-to {
  transform: translateY(-20%);
  opacity: 0;
}

.modal-backdrop-enter-active,
.modal-backdrop-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.modal-backdrop-enter-from,
.modal-backdrop-leave-to {
  opacity: 0;
}
</style>
