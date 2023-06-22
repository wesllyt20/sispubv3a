<template>
  <div class="dashboard">
    <div id="contHeader">
      <my-header></my-header>
    </div>

    <div id="content">
      <div id="asPublish" class="publicacionPanel">
        <my-aside></my-aside>
      </div>

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
import myHeader from './toolbar/myheader.vue';
import myAside from './toolbar/myaside.vue';
export default {
  name: "Dashboard",
  components: {
    'my-header': myHeader,
    'my-aside': myAside
  },
}
</script>

