<template>
  <div class="container">
    <nav class="flex justify-between items-center">
      <tittleLogo></tittleLogo>
      <navBarLink></navBarLink>
    </nav>
  </div>
</template>

<script>
import tittleLogo from "../header/tittleLogo.vue";
import navBarLink from "../header/navBarLink.vue";

export default {
  name: "headerDash",
  components: {
    tittleLogo,
    navBarLink,
  },
};
</script>

<style></style>
