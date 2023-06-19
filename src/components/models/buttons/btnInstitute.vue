<template>
  <div class="d-grid w-100">
    <button id="btnints" type="button" class="btn btn-outline-secondary d-flex">
      <img id="imgInts" class="text-start" alt="" :src="image" />
      <span id="btnTex" class="text-start">{{ text }}</span>
      <span
        class="circulo ms-auto"
        v-bind:style="{ backgroundColor: colcir }"
      ></span>
    </button>
  </div>
</template>
  
  <script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "btnInstitute",
  props: {
    text: String,
    image: String,
    colcir: String,
  },
});
</script>
  
  <style>
#btnints {
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  padding: 4px;
  width: 184.32px;
  height: 26px;
}

#btnTex {
  color: #005ad9;
  font-size: 10px;
  text-decoration: underline;
  padding-right: 1px;
  margin-left: 3px;
  
}
#imgInts {
  justify-content: flex-end;
  max-width: 25px;
  max-height: 25px;
  width: 17.05px;
  height: 18px;
}
.circulo {
width: 16.15px;
height: 15.94px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 19.1295px;
}
</style>
  