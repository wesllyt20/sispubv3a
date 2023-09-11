<template>
  <div>
    <button
      type="button"
      id="btnwh"
      class="text-xs px-4 text-igp-blue hover:bg-igp-blue hover:text-igp-white-50 bg-igp-white-50 focus:text-white focus:bg-igp-blue focus:ring-1 border-1 border-igp-blue font-medium rounded-lg py-2 text-center mr-2 mb-2"
      :class="class"
      :disabled="disabled"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
    },
    class: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
