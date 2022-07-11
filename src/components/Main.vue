<template>
  <div class="main mb-20">
    <AppControlbar />
    <div class="pt-10 mx-12"><MainContentVue /></div>
    <div class="main-checklist">
      <AppChecklist />
    </div>
  </div>
</template>

<script>
import AppControlbar from "./Controlbar.vue";
import AppChecklist from "./Checklist.vue";
import MainContentVue from "./MainContent.vue";

export default {
  name: "AppMain",
  components: {
    AppControlbar,
    AppChecklist,
    MainContentVue,
  },
};
</script>

<style scoped>
.main {
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  gap: 1.4rem;
}

.main-checklist {
  padding-top: 128px;
  padding-right: 40px;
}
</style>
