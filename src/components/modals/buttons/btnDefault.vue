<template>
  <div>
    <button
      type="button"
      :class="class"
      class="text-white bg-igp-blue hover:bg-igp-blue-600 focus:outline-none focus:ring-1 focus:ring-igp-blue font-medium rounded-lg py-2.5 text-center mr-2 mb-2"
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
