<template>
  <div class="dashboard">
    <header class="header">Header</header>
    <div class="content">
      <div class="sidebar">Panel</div>
      <div class="row">
        <div class="col-3">Widget 1</div>
        <div class="col-6">Widget 2</div>
        <div class="col-3">Widget 3</div>
      </div>
    
    </div>
  </div>
</template>

<style>
.dashboard {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  background-color: #333;
  color: #fff;
  padding: 10px;
}

.content {
  flex: 1;
  display: flex;
}

.sidebar {
  background-color: #eee;
  width: 200px;
  padding: 10px;
}

.center {
  flex: 2.5;
  display: flex;
  flex-wrap: wrap;
}

.widget {
  flex: 1;
  background-color: #f0f0f0;
  margin: 5px;
  padding: 10px;
}

.bottom {
  display: flex;
  flex-wrap: wrap;
}
</style>
