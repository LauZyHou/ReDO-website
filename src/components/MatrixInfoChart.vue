<template>
  <div id="matrixRelationChart" class="maine"></div>

</template>

<script>
import charts from 'echarts'

export default {
  data () {
    return {
      updateview:null
      // rootName: 'ca',
      // matrix: [[3, 4, 5], [6, 7, 8], [9, 10, 11]],
      // label: ['a', 'b', 'c']
    }
  },
  props:{
    rname: {type:String,required: true,
// default:(p)=> {if(p==Null) return 'ca'; else return p;}
},
    matrix: {
      type: Array,
      required: true,
      default: ()=>[[3, 4, 5], [6, 7, 8], [9, 10, 11]]
    },
    label:{
      type:Array,
      required: true,
      default: ()=> ['a', 'b', 'c'],
      validator: function (t) {
        return true
      //  return t.size()==this.matrix.size()
      },
    },
    labelid:{
      type:Array,
      default: ()=> ['a', 'b', 'c'],
      validator: function (t) {
        return true
        //  return t.size()==this.matrix.size()
      },
    }
  },
  mounted () {
    // test code start
    // this.matrix = []
    // for (let i = 0; i < 100; i++) {
    //   let tmp = []
    //   for (let j = 0; j < 100; j++) {
    //     tmp[j] = Math.random().toPrecision(2)
    //   }
    //   this.matrix[i] = tmp
    // }
    // this.label = []
    // for (let i = 0; i < 100; i++) {
    //   this.label[i] = 'node' + i
    // }
    // test code end

    this.showRelation()
  },
  watch:{
    rname(){
        this.showRelation();

    }
  },
  methods: {
    transformLabel: function () {
      let a = []
      for (let l in this.label) {
        a.push({
          name: this.label[l],
          complexity: this.matrix[l][l],
          nameid: this.labelid[l],
          draggable: true,
          symbolSize: 20,
          label: {
            visible: true,
            formatter: function (param) {
              return param.name + '\n' + 'Comp: ' + param.data.complexity
            }
          }
        })
      }
      return a
    },

    transformMatrix: function () {
      let _this = this
      let a = []
      for (let i = 0; i < this.matrix.length; i++) {
        for (let j = i + 1; j < this.matrix.length; j++) {
          if (_this.matrix[i][j] > 0.96) {
            a.push({
              target: _this.label[i],
              source: _this.label[j],
              label: {
                visible: true,
                formatter: function (param) {
                  return _this.matrix[i][j]
                }
              }

            })
          }
        }
      }
      return a
    },
    showRelation: function () {
      var myChart=document.getElementById('matrixRelationChart');
      myChart.style.width=window.innerWidth*0.69+'px';
      myChart.style.height=window.innerHeight*0.6+'px';
      var _this=this;
      let chart1 = charts.init(myChart)

      let option = {
        backgroundColor: '#ffffff',
        title: {
          text: _this.rname,
          left: '3%',
          top: '3%',
          textStyle: {
            color: '#000',
            fontSize: '20',
            fontWeight:100
          }
        },
        tooltip: { // Tag shown when touch on lines/edges
          formatter: function (param) {
            if (param.dataType === 'edge') {
              return param.data.label.formatter()
            }
            return param.data.name
          }
        },

        series: [{
          type: 'graph', // Graph type
          top: '10%', // distance between graph and top of div
          roam: true, // 'scale','move',false,true
          focusNodeAdjacency: true,
          force: {
            repulsion: 400, // force between nodes
            edgeLength: [10, 15] // length of edge (range)
          },
          layout: 'force', // 'none' 'circular''force'
          // Tagged-shape
           // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
          symbol: 'circle',

          lineStyle: { // edge-line format setting
            normal: {
              color: '#000',
              width: 1,
              type: 'solid',
              opacity: 0.5,
              curveness: 0
            }
          },
          label: { // label format setting
            normal: {
              show: true,
              // 'top''left''right''bottom''inside''insideLeft''insideRight''insideTop''insideBottom''insideTopLeft''insideBottomLeft''insideTopRight''insideBottomRight'
              position: 'top',
              textStyle: {
                fontSize: 10
              }
            }
          },
          edgeLabel: { // edge-label format setting
            normal: {
              show: true,
              textStyle: {
                fontSize: 14
              }
            }
          },
          data: this.transformLabel(this.label),
          links: this.transformMatrix(this.matrix),
          animationThreshold: 4
          // animationEasingUpdate: "quinticInOut",
          // animationDurationUpdate: 1000
        }]
      }
      chart1.setOption(option,true)
      chart1.on('click', eConsole)
      function eConsole (param) {
        if (param.dataType === 'node') {
          _this.$emit('detail',param.data)
        }
      }
    }
  }
}

</script>
<style scoped>
  .maine{
    margin-left:0;
margin-right:0;
    width: auto;
    /*margin-right:0;*/
    height: 350%;
    border: 1px solid #eee;
  }

  </style>
