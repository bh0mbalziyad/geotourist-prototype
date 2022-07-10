<template>
  <div class="flex flex-col">
    <section class="flex border-b border-gray-400 gap-2 py-2 items-center">
      <img
        class="h-11 w-11 object-cover rounded-full"
        src="../../assets/images/article.jpg"
        alt="User"
      />
      <div class="flex flex-col justify-between items-start">
        <h3 class="font-bold text-lg">Lawrence Powers</h3>
        <p>My Page</p>
      </div>
      <img
        class="h-11 w-11 object-cover ml-auto"
        src="../../assets/images/qr.png"
        alt="QR Code"
      />
    </section>
    <div class="px-3 flex flex-col gap-2 my-3">
      <span class="inline-flex gap-4 items-center text-lg text-black"
        ><font-awesome-icon
          icon="fa-solid fa-circle-user"
          class="text-blue-600"
        />Edit Profile</span
      >
      <span class="inline-flex gap-4 items-center text-lg text-black"
        ><font-awesome-icon
          icon="fa-solid fa-gear"
          class="text-blue-600"
        />Settings</span
      >
      <span class="inline-flex gap-4 items-center text-lg text-black"
        ><font-awesome-icon
          icon="fa-solid fa-power-off"
          class="text-blue-600"
        />Logout</span
      >
    </div>
    <div class="px-3">
      English
      <font-awesome-icon icon="fa-solid fa-chevron-right" class="float-right" />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDropdown",
};
</script>
