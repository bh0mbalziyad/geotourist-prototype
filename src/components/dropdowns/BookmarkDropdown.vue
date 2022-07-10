<template>
  <!-- Category -->
  <section>
    <h1 class="font-bold my-4 text-2xl mr-auto">Recently Taken</h1>
    <article class="flex">
      <div class="w-28 h-28">
        <img
          class="w-full h-full object-cover rounded-md"
          src="../../assets/images/article.jpg"
          alt="Article Image"
        />
      </div>
      <div class="flex flex-col items-start justify-between ml-3 grow">
        <h2 class="font-bold text-lg">Pandora - The World of...</h2>
        <p class="font-light">5 min ago</p>
        <div class="flex items-center w-full">
          <button
            class="py-2 px-4 border border-green-700 bg-green-400 bg-opacity-25 box-border rounded-full text-green-700"
          >
            Write a review
          </button>
          <div class="inline-flex ml-auto gap-8 text-2xl text-gray-400">
            <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" />
            <font-awesome-icon icon="fa-regular fa-bookmark" />
          </div>
        </div>
      </div>
    </article>
  </section>
  <hr class="my-4" />
  <section>
    <h1 class="font-bold my-4 text-2xl mr-auto">Unfinished tours</h1>
    <article class="flex">
      <div class="w-28 h-28">
        <img
          class="w-full h-full object-cover rounded-md"
          src="../../assets/images/article.jpg"
          alt="Article Image"
        />
      </div>
      <div class="flex flex-col items-start justify-between ml-3 grow">
        <h2 class="font-bold text-lg">A walking trail of Mont...</h2>
        <p class="font-light">12 days ago</p>
        <div class="flex items-center w-full">
          <p class="text-yellow-600 mr-3">70%</p>
          <button
            class="py-2 px-4 border-yellow-600 bg-yellow-200 bg-opacity-25 box-border border rounded-full text-yellow-600"
          >
            Resume
          </button>
          <div class="inline-flex ml-auto gap-8 text-2xl text-gray-400">
            <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" />
            <font-awesome-icon icon="fa-regular fa-bookmark" />
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "BookmarkDropdown",
};
</script>
