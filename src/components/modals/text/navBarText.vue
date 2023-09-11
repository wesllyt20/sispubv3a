<template>
  <div>
    <a
      :href="href"
      class="text-igp-dark dark:igp-blue-500 no-underline hover:underline hover:text-igp-blue flex"
    >
      <slot></slot
    ></a>
  </div>
</template>
<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
  },
};
</script>
