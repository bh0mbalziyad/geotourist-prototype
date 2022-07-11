<template>
  <nav class="app-nav flex justify-center items-center w-full p-6 relative">
    <!-- <div class="logo">
      <img src="" alt="">
    </div> -->
    <!-- Desktop Links -->
    <div>
      <ul class="flex gap-7 justify-center items-center app-nav-links">
        <li class="hover:cursor-pointer text-gray-500">
          <a href="#">Desktop</a>
        </li>
        <li class="hover:cursor-pointer text-blue-400">
          <a href="#">Create</a>
        </li>
        <li
          style="background-color: #bdbfc2"
          class="hover:cursor-pointer p-3 text-white rounded-3xl"
        >
          <a href="#">Download</a>
        </li>
      </ul>
    </div>
    <!-- User Action Buttons -->
    <div class="absolute right-8 top-0 bottom-0 flex items-center gap-8 px-4">
      <font-awesome-icon
        class="hover:cursor-pointer"
        size="xl"
        icon="fa-regular fa-bookmark"
      />

      <!-- Bookmark Dropdown -->
      <div
        class="rounded-lg drop-shadow-md app-dropdown bg-white"
        uk-dropdown="mode: click;"
      >
        <BookmarkDropdown />
      </div>

      <font-awesome-icon
        class="hover:cursor-pointer"
        size="xl"
        icon="fa-regular fa-bell"
      />

      <!-- Notification Dropdown -->
      <div
        class="rounded-lg drop-shadow-md app-dropdown bg-white"
        uk-dropdown="mode: click;"
      >
        <NotificationDropdown />
      </div>
      <font-awesome-icon
        class="hover:cursor-pointer"
        size="xl"
        icon="fa-regular fa-user"
      />

      <!-- User Dropdown -->
      <div
        class="rounded-lg drop-shadow-md bg-white app-dropdown user-dropdown"
        uk-dropdown="mode: click;"
      >
        <UserDropdown />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.app-nav {
  background-color: #ffffff;
  box-shadow: inset 0 -0.5px 0 0 rgba(200, 199, 204, 0.5),
    0 2px 6px 0 rgba(211, 220, 224, 0.2);
}

.app-nav-links a {
  text-decoration: none;
}

.app-nav-links a:hover {
  text-decoration: none;
}

.app-dropdown {
  width: 450px;
}

.app-dropdown.user-dropdown {
  width: 370px;
}
</style>

<script>
import BookmarkDropdown from "./dropdowns/BookmarkDropdown.vue";
import NotificationDropdown from "./dropdowns/NotificationDropdown.vue";
import UserDropdown from "./dropdowns/UserDropdown.vue";

export default {
  name: "AppNavbar",
  components: { BookmarkDropdown, NotificationDropdown, UserDropdown },
};
</script>
