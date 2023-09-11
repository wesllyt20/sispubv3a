<template>
  <div id="totalblur">
    <!-- Botón para abrir la ventana emergente -->

    <!-- Ventana emergente -->
    <div
      v-if="modalOpen"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <div class="fixed inset-0 backdrop-blur-[10px] bg-igp-blue-500/50"></div>
      <!--@click="closeModal"-->

      <div class="bg-white p-4 rounded-2xl shadow-lg relative">
        <button
          @click="closeModal"
          class="rounded-full border-1 shadow-2xl shadow-black bg-white w-12 h-12 absolute top-[-15px] right-[-15px] text-gray-500 hover:text-gray-700 flex items-center justify-center hover:bg-red-600 focus:outline-none"
        >
          <div class="border-2 border-igp-blue rounded-full p-1">
            <svg
              class="h-5 w-5"
              fill="none"
              stroke="#0032ff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </button>
        <!-- Botón para cerrar la ventana emergente -->

        <!-- Contenido de la ventana emergente -->
        <div>
          <!-- Agrega aquí tu contenido -->
          <!-- Por ejemplo, un formulario o información adicional -->
          <slot></slot>
        </div>
      </div>
    </div>

    <!-- Fondo con efecto de desenfoque cuando está abierta la ventana emergente -->
  </div>
</template>
<script>
export default {
  props: {
    modalOpen: Boolean,
  },
  methods: {
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.$emit("close-modal");
    },
  },
  mounted() {
    // Agregar un evento de teclado para escuchar la tecla "Esc"
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.closeModal();
      }
    });
  },
};
</script>
<style>
#totalblur {
  z-index: 1000;
}
</style>

<style scoped></style>
