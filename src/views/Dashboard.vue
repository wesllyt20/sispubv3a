<template>
  <div class="dashboard">
    <div id="contHeader">
      <headerE></headerE>
    </div>

    <div id="content">
      <div id="asPublish" class="publicacionPanel">Panel</div>

      <div id="contentWidget">

        <div class="row rowTop">
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Parámetros Sísmicos</h5>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>



              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>

              </div>
            </div>
          </div>
        </div>
        <div class="row rowTop mt-2">
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Parámetros Sísmicos</h5>





              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>



              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>

              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>
<script>
import headerE from './toolbar/header.vue';
export default {
  name: "Dashboard",
  mounted() {
    console.log("->", import.meta.env.VITE_PUBLIC_PATH)

  },
  components: {
    headerE,
  },
}
</script>

