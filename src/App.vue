<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <MatrixInfoChart></MatrixInfoChart>
  </div>
</template>

<script>
  import  MatrixInfoChart from './components/MatrixInfoChart.vue'
  export default {
    data() {
      return {
        mm: null
      }
    },
    components: {MatrixInfoChart}
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  height:100%;
}
html,body{
  margin:0px;
  height:100%;
}
</style>
