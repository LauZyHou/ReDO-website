<template>
  <div class="main">
    <div style="width:100%">
      <div style="display:inline-block" >
         <el-button > Back to parent </el-button>
        <el-button > Back to top </el-button>

      </div>
    </div>
    <el-tabs type="card" >
      <el-tab-pane label="Structure" >
        <matrix-info-chart :matrix="refactorMatrix" :label="refactorMatrixLabel" />
      </el-tab-pane>
      <el-tab-pane label="Complexity">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="origin"
            label="Origin"
            width="180">
          </el-table-column>
          <el-table-column
            prop="refactored"
            label="New"
            width="180">
          </el-table-column>
          <el-table-column
            prop="decrease"
            label="Change">
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
        refactorMatrix: [[3, 4, 5], [6, 7, 8], [9, 10, 11]],
        refactorMatrixLabel: ['aa', 'b', 'c'],
        tableData: [{
          origin: 100,
          refactored: 90,
          decrease: -0.1
        }]
      }
    },
    mounted(){
      this.$emit('step',2);

    },
    components:{MatrixInfoChart},
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }

          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
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
