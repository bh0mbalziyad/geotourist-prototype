<template>
  <div
    class="uk-width-large shadow-lg rounded-lg app-modal border-gray-300 border border-opacity-25"
    uk-drop="mode:click;pos:bottom-right;"
  >
    <div class="app-button-grid py-4">
      <article class="flex flex-col items-center justify-around">
        <div
          class="app-img-wrapper w-16 h-16 border border-gray-400 rounded-full p-4"
        >
          <img
            src="../assets/images/add-form-buttons/microphone.svg"
            alt="Microphone"
            class="w-full h-full object-contain"
          />
        </div>
        <p class="text-gray-500">Record</p>
      </article>
      <article class="flex flex-col items-center justify-around">
        <div
          class="app-img-wrapper w-16 h-16 border border-gray-400 rounded-full p-4"
        >
          <img
            src="../assets/images/add-form-buttons/location.svg"
            alt="Microphone"
            class="w-full h-full object-contain"
          />
        </div>
        <p class="text-gray-500">Location</p>
      </article>
      <article class="flex flex-col items-center justify-around">
        <div
          class="app-img-wrapper w-16 h-16 border border-gray-400 rounded-full p-4"
        >
          <img
            src="../assets/images/add-form-buttons/camera.svg"
            alt="Microphone"
            class="w-full h-full object-contain"
          />
        </div>
        <p class="text-gray-500">Photo</p>
      </article>
      <article class="flex flex-col items-center justify-around">
        <div
          class="app-img-wrapper w-16 h-16 border border-gray-400 rounded-full p-4"
        >
          <img
            src="../assets/images/add-form-buttons/language.svg"
            alt="Microphone"
            class="w-full h-full object-contain"
          />
        </div>
        <p class="text-gray-500">Language</p>
      </article>
      <article class="flex flex-col items-center justify-around">
        <div
          class="app-img-wrapper w-16 h-16 border border-gray-400 rounded-full p-4"
        >
          <img
            src="../assets/images/add-form-buttons/link.svg"
            alt="Microphone"
            class="w-full h-full object-contain"
          />
        </div>
        <p class="text-gray-500">Link</p>
      </article>
      <article class="flex flex-col items-center justify-around">
        <div
          class="app-img-wrapper w-16 h-16 border border-gray-400 rounded-full p-4"
        >
          <img
            src="../assets/images/add-form-buttons/quiz.svg"
            alt="Microphone"
            class="w-full h-full object-contain"
          />
        </div>
        <p class="text-gray-500">Quiz</p>
      </article>
      <article class="flex flex-col items-center justify-around">
        <div
          class="app-img-wrapper w-16 h-16 border border-gray-400 rounded-full p-4"
        >
          <img
            src="../assets/images/add-form-buttons/hint.svg"
            alt="Microphone"
            class="w-full h-full object-contain"
          />
        </div>
        <p class="text-gray-500">Hint</p>
      </article>
      <article class="flex flex-col items-center justify-around">
        <div
          class="app-img-wrapper w-16 h-16 border border-gray-400 rounded-full p-4"
        >
          <img
            src="../assets/images/add-form-buttons/calendar.svg"
            alt="Microphone"
            class="w-full h-full object-contain"
          />
        </div>
        <p class="text-gray-500">Event</p>
      </article>
      <article class="flex flex-col items-center justify-around">
        <div
          class="app-img-wrapper w-16 h-16 border border-gray-400 rounded-full p-4"
        >
          <img
            src="../assets/images/add-form-buttons/upload.svg"
            alt="Microphone"
            class="w-full h-full object-contain"
          />
        </div>
        <p class="text-gray-500">Upload map</p>
      </article>
      <article class="flex flex-col items-center justify-around">
        <div
          class="app-img-wrapper w-16 h-16 border border-gray-400 rounded-full p-4"
        >
          <img
            src="../assets/images/add-form-buttons/badge.svg"
            alt="Microphone"
            class="w-full h-full object-contain"
          />
        </div>
        <p class="text-gray-500">Badge</p>
      </article>
    </div>
  </div>
</template>

<style scoped>
.app-modal {
  background: white;
  width: 400px !important;
}

.app-button-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  row-gap: 1rem;
}

.app-button-grid img {
  filter: invert(81%) sepia(11%) saturate(5990%) hue-rotate(166deg)
    brightness(95%) contrast(89%);
}

.app-img-wrapper {
  background-color: #f8fbfc;
}
</style>

<script>
export default {
  name: "AddForm",
};
</script>
