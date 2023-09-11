<template>
  <nav>
    <div class="flex align-items-center">
      <label class="text-igp-blue"> Inicio</label>
      <div class="mx-3 border-s border-igp-dark-100 h-3" />
      <navBarText href="https://www.youtube.com/"
        >Tipos de convocatorias</navBarText
      >
      <div class="mx-3 border-s border-igp-dark-100 h-3" />
      <!-- Divider -->
      <navBarText href="https://www.youtube.com/">Soporte</navBarText>
      <btnDefault @click="openModal" class="ml-14 text-sm px-5"
        >Registro</btnDefault
      >
    </div>
  </nav>
  <div class="absolute">
    <blurmodel :modalOpen="modalOpen" @close-modal="closeModal">
      <loginPanel></loginPanel>
    </blurmodel>
  </div>
</template>

<script>
import navBarText from "../../components/modals/text/navBarText.vue";
import btnDefault from "../../components/modals/buttons/btnDefault.vue";
import loginPanel from "../panels/login.vue";
import blurmodel from "../../components/modals/blurmodel.vue";

export default {
  name: "headerDash",
  components: {
    navBarText,
    btnDefault,
    loginPanel,
    blurmodel,
  },
  data() {
    return {
      modalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
    },
    closeModal() {
      this.modalOpen = false;
    },
  },
};
</script>
<style>
#totalblur {
  z-index: 1000;
}
</style>
