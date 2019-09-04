<template>
  <div class="main">
    <div style="width:100%">
      <p style="display:inline-block;margin-right:5%;">Original Complexity: 12313.23 </p>
      <div style="display:inline-block" >
        <router-link to="refactor" > <el-button >Do Refactor </el-button></router-link>
      </div>
    </div>
    <el-tabs type="card" >
      <el-tab-pane label="XML" >
        {{this.fileData}}
      </el-tab-pane>
      <el-tab-pane label="Structure">
        <matrix-info-chart :matrix="originalMatrix" :label="originalMatrixLabel" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import MatrixInfoChart from "../MatrixInfoChart";

  export default {
    data() {
      return {
        fileData:null,
        originalMatrix: [[3, 4, 5], [6, 7, 8], [9, 10, 11]],
        originalMatrixLabel: ['aa', 'b', 'c']
      }
    },
    mounted(){
      this.$emit('step',1);
      this.fileData="toooooooooooo many words"
    },
    components:{MatrixInfoChart}
  }
</script>
<style scoped>
  .main {
    float: left;
    margin: 20px;
    padding: 20px;
    width:70%;
   height: 300px;
  }
.matrix-show{
  width:100%;
  height:70%;
}
</style>
