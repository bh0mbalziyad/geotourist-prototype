<template>
  <div class="shadow-md px-10 py-6 rounded-md">
    <h1 class="text-xl my-2 font-bold">Check List</h1>
    <!-- check list items container -->
    <ul class="flex flex-col gap-3">
      <li class="text-lg">
        Name
        <span class="float-right"
          ><font-awesome-icon
            class="text-green-600"
            icon="fa-solid fa-circle-check"
        /></span>
      </li>
      <li class="text-lg">
        Description
        <span class="float-right"
          ><font-awesome-icon
            class="text-green-600"
            icon="fa-solid fa-circle-check"
        /></span>
      </li>
      <li class="text-lg">
        Cover Photo
        <span class="float-right"
          ><font-awesome-icon
            class="text-green-600"
            icon="fa-solid fa-circle-check"
        /></span>
      </li>
      <li class="text-lg">
        At least 1 point
        <span class="float-right"
          ><font-awesome-icon
            class="text-green-600"
            icon="fa-solid fa-circle-check"
        /></span>
      </li>
      <li class="text-lg text-gray-400">Narration</li>
      <li class="text-lg text-gray-400">Category</li>
    </ul>

    <button
      class="text-xl text-blue-400 border border-blue-400 bg-blue-50 w-full py-2 px-4 rounded-full mt-4"
    >
      Preview
    </button>
    <button
      class="text-xl text-white border border-blue-400 bg-blue-400 w-full py-2 px-4 rounded-full mt-4"
    >
      Publish
    </button>
  </div>
</template>

<script>
export default {
  name: "AppChecklist",
};
</script>
