<template>
  <div id="app" >
    <div class="intro">
      <div class="img-container">
        <img :src=logo height="1000%"  />
      </div>
      <div class="title-style"> <p>Automated Refactoring Tool</p></div>
    </div>
    <div style="height:80%">
      <s-r-t-nav-bar nav-width="20%"/>
    </div>

  </div>
</template>

<script>
  import  MatrixInfoChart from './components/MatrixInfoChart.vue'
  import SRTNavBar from './components/SRTNavBar'
  import logo from './assets/logo.png'
  export default {
    data() {
      return {
        mm: null,
        logo: logo
      }
    },
    components: {MatrixInfoChart,SRTNavBar}
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
  .title-style{
    float: left;
    display: table-cell;
    height: 100%;
    vertical-align: middle;
    /*alignment: center;*/
    width: 80%;
    background-color: antiquewhite;
  }
  .title-style p {
    height:100%;
    margin-top: 3%;
  }
  .img-container{
    float:left;
    height: 10%;
    width: 20%;
    /*overflow-x: hidden;*/
  }
  .intro{
    height: 10%;


  }
</style>
