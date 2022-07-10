<template>
  <section>
    <h1 class="font-bold text-2xl">Today</h1>
    <article
      class="border-t border-b flex py-3 gap-2 relative after:absolute after:right-6 after:top-4 after:w-2 after:h-2 after:bg-blue-500 after:rounded-full"
    >
      <img
        class="h-14 w-14 rounded-full"
        src="../../assets/images/article.jpg"
        alt="Disney World"
      />
      <div>
        <h3 class="w-64">
          <span class="font-semibold">Walt Disney World</span> sent you 2
          tickets to Pandora - The world of...
        </h3>
        <p class="text-sm text-gray-400">2 hours ago</p>
      </div>
    </article>
  </section>
  <section class="mt-8">
    <h1 class="font-bold text-2xl">2 days ago</h1>
    <article
      class="border-b flex py-3 gap-2 relative after:absolute after:right-6"
    >
      <img
        class="h-14 w-14 rounded-full"
        src="../../assets/images/article.jpg"
        alt="Disney World"
      />
      <div>
        <h3 class="mr-3">
          <span class="font-semibold">Bryan Kogler</span> followed you and 2
          other people
        </h3>
        <p class="text-sm text-gray-400">2 hours ago</p>
      </div>
    </article>
    <article class="border-b flex py-3 gap-2 relative">
      <img
        class="h-14 w-14 rounded-full"
        src="../../assets/images/article.jpg"
        alt="Disney World"
      />
      <div>
        <h3 class="mr-3">
          Your tour
          <span class="font-semibold">A walking trail of Montmarte, Paris</span>
          has been published
        </h3>
        <p class="text-sm text-gray-400">2 hours ago</p>
      </div>
    </article>
  </section>
  <!-- <section>
    <h1>2 days ago</h1>
    <hr />
    <article>
      <img src="../../assets/images/article.jpg" alt="Disney World" />
      <div>
        <h3>Walt Disney sent you 2 tickets to Pandora - The world of...</h3>
        <p>2 hours ago</p>
      </div>
    </article>
    <hr />
    <article>
      <img src="../../assets/images/article.jpg" alt="Disney World" />
      <div>
        <h3>Walt Disney sent you 2 tickets to Pandora - The world of...</h3>
        <p>2 hours ago</p>
      </div>
    </article>
    <hr />
  </section> -->
</template>
<script>
export default {
  name: "NotificationDropdown",
};
</script>
