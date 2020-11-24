<template>
  <div style="height:100%" >
    <el-menu default-active="/home" class="el-nav-bar" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
             v-bind:background-color=bgcolor :unique-opened=true :router=true style="height:90%">

      <el-menu-item index="/home">
        <!--now index is the path from router-->
        <img :src=homePageLogo class="el-icon-menu"></img>
        <span slot="title" class="el-title">Homepage</span>
      </el-menu-item>
      <!--<el-menu-item  index="2" disabled>-->
        <!--<img :src=introLogo class="el-icon-menu" ></img>-->
        <!--<span slot="title" class="el-title">介绍</span>-->
      <!--</el-menu-item>-->
      <el-menu-item index="/reconstruct/import">
        <img :src=refactoringLogo class="el-icon-menu" ></img>
        <span slot="title" class="el-title">Development Order Optimization</span>
      </el-menu-item>
      <!--<el-menu-item  index="4" disabled>-->
        <!--<img :src=helpLogo class="el-icon-menu" ></img>-->
        <!--<span slot="title" class="el-title"  disabled>Help</span>-->
      <!--</el-menu-item>-->
      <el-menu-item  >
        <img :src=helpLogo class="el-icon-menu" />
        <span slot="title" class="el-title" @click="logout">Logout</span>
      </el-menu-item>
    </el-menu>

    <router-view style="height:90%;overflow:hidden" id="workspace"/>
  </div>
</template>

<style scoped>
.el-nav-bar:not(.el-menu--collapse) {
  width: 20%;
  min-height: 400px;
}
.el-nav-bar {
  float: left;
  height: 125%;
}
.el-icon-menu {
  height: 20px;
  width: 20px;
}

.el-title {
  display: inline-block;
  width: 50%;
}
</style>

<script>
import hplogo from "../assets/home.png";
import intrologo from "../assets/introduction.png";
import refactoringlogo from "../assets/refactoring.png";
import helplogo from "../assets/help.png";
export default {
  data() {
    return {
      isCollapse: false,
      bgcolor: "#c4e1f2",
      homePageLogo: hplogo,
      introLogo: intrologo,
      refactoringLogo: refactoringlogo,
      helpLogo: helplogo,
    };
  },
  props: {
    navWidth: {
      type: Number,
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    logout() {
      this.$emit("logout", "click");
    },
  },
};
</script>
