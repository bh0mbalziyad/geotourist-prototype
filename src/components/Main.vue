<template>
  <div class="main mb-20">
    <AppControlbar />
    <div class="pt-10 mx-12">
      <MainContentVue v-if="pageStore.currentTab === `description`" />
    </div>
    <div class="main-checklist">
      <AppChecklist />
    </div>
  </div>
  <LinkModal />
  <QuizModal />
  <HintModal />
  <EventModal />
  <BadgeModal />
  <!-- <QuizModal />
  <HintModal />
  <EventModal />
  <BadgeModal /> -->
</template>

<script>
import AppControlbar from "./Controlbar.vue";
import AppChecklist from "./Checklist.vue";
import MainContentVue from "./MainContent.vue";
import LinkModal from "./modals/LinkModal.vue";
import QuizModal from "./modals/QuizModal.vue";
import HintModal from "./modals/HintModal.vue";
import EventModal from "./modals/EventModal.vue";
import BadgeModal from "./modals/BadgeModal.vue";

import { pageStore } from "../store";
import { modalStore } from "../modalStore";

export default {
  name: "AppMain",
  components: {
    AppControlbar,
    AppChecklist,
    MainContentVue,
    LinkModal,
    QuizModal,
    HintModal,
    EventModal,
    BadgeModal,
  },
  data() {
    return {
      pageStore,
      modalStore,
    };
  },
};
</script>

<style scoped>
.main {
  display: grid;
  grid-template-columns: 450px 1fr 300px;
  gap: 1.4rem;
}

.main-checklist {
  padding-top: 128px;
  padding-right: 40px;
}
</style>
