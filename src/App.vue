<script>
import AppNavbar from "./components/Navbar.vue";
import AppMain from "./components/Main.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    AppMain,
  },
};
</script>

<style>
@import url("../node_modules/uikit/dist/css/uikit-core.min.css");
@import url("../dist/output.css");
</style>

<template>
  <AppNavbar />
  <AppMain />
</template>
