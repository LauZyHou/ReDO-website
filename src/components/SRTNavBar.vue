<template>
  <div style="height:125%" >

    <el-menu default-active="1" class="nav-bar" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
    v-bind:background-color=bgcolor unique-opened="true" router="true">
      <el-menu-item style="padding-left:0px" index="1">
        <!--now index is the path from router-->
        <img :src=homePageLogo class="el-icon-menu"></img>
        <span slot="title" class="nav-bar-choice">Home Page</span>
      </el-menu-item>
      <el-menu-item style="padding-left:0px" index="2" disabled>
        <img :src=homePageLogo class="el-icon-menu" ></img>
        <span slot="title" class="nav-bar-choice">Introduction</span>
      </el-menu-item>
      <el-menu-item style="padding-left:0px" index="3">
        <img :src=homePageLogo class="el-icon-menu" ></img>
        <span slot="title" class="nav-bar-choice">Refactoring</span>
      </el-menu-item>
      <el-menu-item style="padding-left:0px" index="4">
        <img :src=homePageLogo class="el-icon-menu" ></img>
        <span slot="title" class="nav-bar-choice" disabled>Help</span>
      </el-menu-item>
    </el-menu>

    <router-link/>
  </div>
</template>

<style scoped>
  *{
    list-style-type:none;
    padding-left:0px;
  }
  .nav-bar:not(.el-menu--collapse) {
    /*width: 200px;*/
   /*height: 100%;*/
    margin-top:0px;
  }

  .nav-bar.el-menu--collapse {
    width: 0px;
    background-color: aquamarine;
    /*height: 100%;*/
  }
  .nav-bar{
    /*border-right: 1px solid grey;*/
    margin-right: 0px;
    margin-left: 0px;
    padding-left:0px;
    width:20%;
    height:100%;
  }
.el-menu-item{
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 0px;
  height:20px;

}

  .nav-bar-choice {
    margin-right: 0px;
    margin-left: 0px;
    height:20px;
    width: 100px;
    font-size: 17px;
margin-top: 1.5px;
display:inline-block;
    vertical-align: top;

    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    text-align: center;

  }
  .el-menu-item img{
    height:20px;
    width:20px;
    margin-right:0px;
  }
</style>

<script>
  import hplogo from '../assets/logo.png'
  export default {
    data() {
      return {
        isCollapse: false,
        bgcolor: "#d7d7d7",
        homePageLogo: hplogo
      };
    },
    props:{
      navWidth: {
        type:Number
  }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
