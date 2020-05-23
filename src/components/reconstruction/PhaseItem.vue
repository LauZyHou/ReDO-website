<template>
  <div class="main">
    <div style="width:100%">
      <div style="display:inline-block; margin-bottom:15px" >
         <el-button @click="backToParent"> Back to parent</el-button>
        <el-button @click="backToTop"> Back to top</el-button>

      </div>
    </div>
    <el-tabs type="card" >
      <el-tab-pane label="Structure" >
        <matrix-info-chart :matrix="showMatrix" :label="changeToLabel(showMatrixLabel)" :rname="changeToLabelOne(showNode)" :labelid="showMatrixLabel" @detail="seeNodeDetail"/>
      </el-tab-pane>
      <el-tab-pane label="Statistic">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="origin"
            label="Original Cost"
            width="180">
          </el-table-column>
          <el-table-column
            prop="refactored"
            label="Optimized Cost"
            width="180">
          </el-table-column>
          <el-table-column
            prop="decrease"
            label="Decreasing Rate">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import MatrixInfoChart from "../MatrixInfoChart";

  export default {
    data: function () {
      return {
        nodeList: {},
        nodeLabel: ['ccc1', 'a', 'b','c'],
        showMatrix:[[3, 4, 5], [6, 7, 8], [9, 10, 11]],
        showMatrixLabel:['ccc1', '1', '2'], // Just id
        showNode: "cccc1",
        nodeHistory:[],
        tableData: [{
          origin: 100,
          refactored: 90,
          decrease: -0.1
        }],

      }
    },
    beforeMount(){

      this.$emit('step',2);
      var _this=this
      document.addEventListener('keydown', function(e) {
        if (e.keyCode === 116) {
          _this.$router.push({
            path: "/reconstruct/import",
          })
        }
      })
      if (this.$route.params.data!=undefined){
        this.nodeLabel=this.$route.params.label
        this.nodeList=this.$route.params.data
        this.showMatrix=this.$route.params.data[0].matrix
        this.tableData[0].origin=this.$route.params.originalComplexity
        var fd = new FormData();
        fd.append("matrix",this.$route.params.data[0].matrix)
        this.$http.post(this.baseUrl+'calculate-complexity', fd,
          {headers:{'Content-Type':'application/x-www-form-urlencoded', 'dataType': 'json'}})
          .then((res)=>{
            console.log(res)
            _this.tableData[0].refactored= res.data.complexity
            _this.tableData[0].decrease= ( _this.tableData[0].refactored - _this.tableData[0].origin)/_this.tableData[0].origin * 100+"%"

          })
        // this.nodeHistory.push(this.nodeList[0].name)
        this.showMatrixLabel=this.$route.params.data[0].tag
        this.showNode=this.$route.params.data[0].name
      }
    },

    components:{MatrixInfoChart},
    methods: {
      // change "1" to "name"
      changeToLabel(t){

        var _this=this;
       var ret=[]
       var r=/^\+?[0-9][0-9]*$/;
       var e;
       for(e of t){
         if(r.test(e)){
           ret.push(_this.nodeLabel[parseInt(e)])
         }
         else{ret.push(e)}
       }
       return ret
     },
      changeToLabelOne(e){
        var _this=this;
        var r=/^\+?[0-9][0-9]*$/;
        if(r.test(e)){
          return _this.nodeLabel[parseInt(e)];
        }
        else{ return e}
      },
      seeNodeDetail(node){
        var _this=this

        if(node.nameid===_this.showNode){
          return
        }

        var e;
        for(e of _this.nodeList){
          if((e.name)===node.nameid){
            _this.nodeHistory.push(_this.showNode)
            _this.showMatrix=e.matrix
            _this.showMatrixLabel=e.tag

            _this.showNode=e.name
          }
        }
        console.log(node.name)

      },
      backToTop(){
        var _this=this
        _this.nodeHistory=[]
        // _this.nodeHistory.push(_this.nodeList[0].name)
        _this.showMatrix=_this.nodeList[0].matrix
        _this.showMatrixLabel=_this.nodeList[0].tag
        _this.showNode=_this.nodeList[0].name
      },
      backToParent(){

        var _this=this
        if(_this.nodeHistory.length===0) return;
        var nodeId=_this.nodeHistory.pop();
        var e
        for(e of _this.nodeList){
          if((e.name)===nodeId){
            _this.showMatrix=e.matrix
            _this.showMatrixLabel=e.tag
            _this.showNode=e.name
          }
        }

      }
    }
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
