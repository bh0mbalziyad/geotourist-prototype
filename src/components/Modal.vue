<template>
  <Teleport to="#modal-target">
    <TransitionGroup>
      <div class="border border-gray-400 rounded-lg bg-white shadow app-modal">
        <slot>This is a modal!</slot>
      </div>
    </TransitionGroup>
  </Teleport>
</template>

<script>
export default {
  name: "AppModal",
};
</script>

<style scoped>
.app-modal {
  position: absolute;
  height: 500px;
  width: 400px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
