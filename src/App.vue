<script>
import AppNavbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
  },
};
</script>

<style>
@import url("../node_modules/uikit/dist/css/uikit-core.min.css");
@import url("../dist/output.css");
</style>

<template>
  <AppNavbar />
</template>
