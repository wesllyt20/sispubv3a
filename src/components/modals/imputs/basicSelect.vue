<template>
  <div>
    <select
      id="selectText"
      class="bg-igp-white border border-gray-300 text-sm rounded-lg active:ring-igp-blue block w-full p-2.5 focus:ring-igp-blue focus:ring-1 hover:ring-1 hover:ring-igp-blue focus:border-igp-blue focus:outline-none"
    >
      <slot></slot>
    </select>
  </div>
</template>

<style>
#selectText {
  color: #0032ff;
}
</style>
