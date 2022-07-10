<template>
  <!-- ------------------------------Language tabs------------------------------------- -->
  <div class="flex justify-between">
    <div class="h-full flex items-start gap-8 pt-2 text-xl">
      <h3 class="app-lang-tab app-lang-tab-active">English</h3>
      <h3 class="app-lang-tab">French</h3>
      <h3 class="app-lang-tab">Deutch</h3>
      <h3 class="app-lang-tab">Spanish</h3>
    </div>
    <button
      class="app-add-button flex gap-5 items-center py-3 px-7 border text-lg text-gray-400 rounded-full"
    >
      <font-awesome-icon icon="fa-solid fa-plus" />
      <p>Add...</p>
    </button>
  </div>
  <!-- ----------------------------------xxx---------------------------------------------- -->

  <!-- ----------------------------------Cover Image-------------------------------------- -->
  <div class="relative">
    <img
      src="../assets/images/cityscape.jpg"
      alt="City view"
      class="w-full h-80 object-cover rounded-md mt-10"
    />
    <div
      class="absolute inline-flex items-center gap-4 text-white bg-transparent border-transparent bottom-0 left-0 mb-4 ml-4 text-2xl"
    >
      <font-awesome-icon class="text-3xl" icon="fa-solid fa-camera" />
      <h2 class="text-white">Set cover</h2>
    </div>
  </div>
  <!-- ----------------------------------xxx---------------------------------------------- -->

  <!-- ----------------------------------Text Body---------------------------------------------- -->

  <div class="mt-12">
    <h1 class="text-5xl font-bold text-black">
      A walking trail of Montmarte, Paris
    </h1>
    <hr class="bg-gray-400 opacity-40 border-dashed mt-7" />
    <p class="mt-8 text-xl">
      Dominated by the grandeur of the ever-visible Sacré-Cœur Basilica, the
      leafy hilltop village of Montmartre was once the play area of Paris’s most
      famous artists, bohemians and creatures of the night. These days, the
      winding cobbled streets host chic cafes, retro boutiques and fine French
      dining but, if you look closely enough, those in search of historical
      secrets can still find traces of the old La Bohème hidden between the
      tourist traps…
    </p>
    <hr class="bg-gray-400 opacity-40 border-dashed mt-7" />
  </div>
  <!-- ----------------------------------xxx---------------------------------------------- -->

  <!-- ----------------------------------Tags---------------------------------------------- -->
  <h2 class="font-bold text-black text-2xl mt-7">Tags</h2>
  <div class="flex gap-3 mt-4">
    <button class="app-tag-button">+</button>
    <button class="app-tag-button">
      Montmarte<font-awesome-icon icon="fa-solid fa-circle-xmark" />
    </button>
    <button class="app-tag-button">
      Paris<font-awesome-icon icon="fa-solid fa-circle-xmark" />
    </button>
  </div>

  <!-- ----------------------------------xxx---------------------------------------------- -->

  <!-- ---------------------------------- Categories ----------------------------------- -->
  <h2 class="font-bold text-black text-2xl mt-14">Categories</h2>
</template>

<style scoped>
.app-add-button {
  background-color: #f8fbfc;
  border-color: #c2e0ea;
}

.app-lang-tab.app-lang-tab-active {
  --tab-color: #21a9df;
  color: var(--tab-color);
  position: relative;
}

.app-lang-tab {
  --tab-color: #86888a;
  color: var(--tab-color);
  position: relative;
  font: inherit;
  cursor: pointer;
  --padding-x: 1rem;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}

.app-lang-tab.app-lang-tab-active::after {
  content: "";
  background-color: var(--tab-color);
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 2.3rem;
  height: 3px;
  border-radius: 99999px;
  cursor: pointer;
}

.app-tag-button {
  background-color: #f8fbfc;
  border: 1px solid #d6eaf1;

  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 16px;
  border-radius: 999px;
}
</style>

<script>
export default {
  name: "AppMainContent",
};
</script>
