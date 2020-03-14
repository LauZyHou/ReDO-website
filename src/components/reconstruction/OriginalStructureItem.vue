<template>
  <div class="main" style="height:80%;width:92.5%">
    <div style="width:100%">
      <p style="display:inline-block;margin-right:5%;">Original Complexity: {{complexity}}</p>
      <div style="display:inline-block" >
        <el-button @click="doClick">Do Refactor </el-button>
      </div>
    </div>
    <el-tabs type="card">
      <el-tab-pane label="XML" id="filedata">
        <div style="height:400px;font-size:8pt;text-align:left;overflow-y: scroll;overflow-x:hidden;white-space: pre-wrap;word-wrap: break-word;">{{this.fileData}}</div>
      </el-tab-pane>
      <el-tab-pane label="Structure" >
        <matrix-info-chart :matrix="originalMatrix" :label="originalMatrixLabel" :rname="fileName"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import MatrixInfoChart from "../MatrixInfoChart";
  import Qs from 'qs'
  export default {

    data() {
      return {
        fileData: "zzzz",
        fileName: 'pppp',
        originalMatrix: [[1.0, 4.0, 0.0, 0.0, 0.0, 0.0], [4.0, 1.0, 1.0, 4.0, 4.0, 0.0], [0.0, 1.0, 1.0, 0.0, 0.0, 4.0],
          [0.0, 4.0, 0.0, 1.0, 0.0, 0.0], [0.0, 4.0, 0.0, 0.0, 1.0, 1.0], [0.0, 0.0, 4.0, 0.0, 1.0, 0.0]],
        originalMatrixLabel: ['Class B.2', 'Class B', 'Class A', 'Class B.3', 'Class B.1', 'ImplodA'],
        complexity: 0.0
      }
    },
    beforeMount(){
      document.addEventListener('keydown', function(e) {
        if (e.keyCode === 116) {
          _this.$router.push({
            path: "/reconstruct/import",
          })
        }
      })
      this.$emit('step',1);
      let _this=this;
      console.log(this.$route.params.fname+" is fname")
      if (this.$route.params.fname!=undefined){
      this.fileName=this.$route.params.fname
        console.log(this.$route.params.fname+" is fname")
      this.originalMatrix=this.$route.params.matrix
      this.originalMatrixLabel=this.$route.params.tag

      var reader = new FileReader();//新建一个FileReader
      let filedata=this.$route.params.fileData


        reader.readAsText(filedata, "UTF-8");//读取文件
        reader.onload = function (evt) { //读取完文件之后会回来这里
          var fileString = evt.target.result; // 读取文件内容
          // fileString=fileString.replace(/\n/g,"<br/>");
          _this.fileData = fileString
        }
      }

      var fd = new FormData();
      fd.append("matrix",this.originalMatrix)
      this.$http.post(this.baseUrl+'calculate-complexity', fd,
        {headers:{'Content-Type':'application/x-www-form-urlencoded', 'dataType': 'json'}})
        .then((res)=>{
          console.log(res)
          _this.complexity= res.data.complexity

        })
      // Not yet implement: render the tab pane height
      // var h=document.getElementById("workspace").style.height
      // console.log(h)
      // var fd=document.getElementById("filedata").style
      // fd.setProperty("height",h*0.8)
    },
    methods:{
      doClick(e){
        var _this=this
        var fd=new FormData();
        fd.append("matrix",this.originalMatrix);
        fd.append("label",this.originalMatrixLabel);
        this.$http.post(this.baseUrl+'refactor', fd,
          {headers:{'Content-Type':'application/x-www-form-urlencoded', 'dataType': 'json'}})
          .then((res)=>{

            console.log(res.data.name)
            var ret=res.data
            _this.$router.push({
              name: "refactor",
              params: {
                data: ret,
                label: _this.originalMatrixLabel,
                originalComplexity: _this.complexity
              }
            })
          })

      }
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
