<template>
  <div class="flex flex-col mx-7 app-control-bar">
    <h1 class="text-2xl font-bold my-7 pl-7 app-desc">Description</h1>
    <div class="app-points-container">
      <h1 class="text-2xl ml-7 my-7 font-bold">Points</h1>
      <div class="flex flex-col gap-10 app-points-wrapper my-6">
        <h3 class="app-point point-active text-xl text-gray-500 pl-7 pb-5">
          Abbesses Metro Station
        </h3>
        <h3 class="app-point text-xl text-gray-500 pl-7 pb-5">
          Abbesses Metro Station
        </h3>
        <h3 class="app-point text-xl text-gray-500 pl-7 pb-5">
          Pigalle and the Moulin R..
        </h3>
      </div>
      <h1 class="text-2xl ml-7 my-7 font-bold">Media</h1>
      <h1 class="text-2xl ml-7 my-7 font-bold">Settings</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppControlbar",
};
</script>

<style scoped>
.app-desc {
  position: relative;
}

.app-desc:active::after {
  content: "";
  position: absolute;
  width: 100%;
  background-color: #21a9df;
  bottom: -28px;
  left: 0;
  right: 0;
  height: 3px;
  margin-top: 7px;
}

.app-control-bar {
  background-color: #f7f8f9;
}

.app-points-wrapper {
  counter-reset: points;
}

.app-point.point-active {
  border-bottom: 3px solid #21a9df;
  background: white;
  padding-top: 22px;
}

.app-point::before {
  counter-increment: points;
  content: counter(points);
  padding: 11px 18px;
  background: white;
  border: 1px solid #d3dce0;
  border-radius: 999px;
  margin-right: 8px;
}
</style>
