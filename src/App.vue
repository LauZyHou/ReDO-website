<template>
  <div id="app" >
    <div class="intro">
      <div class="img-container">
        <img :src=logo height="1000%"  />
      </div>
      <div class="title-style"> <p><b>Automated Refactoring Tool</b></p></div>
    </div>
    <div style="height:80%">
      <s-r-t-nav-bar/>
    </div>




    <el-dialog title="Login" :visible.sync="dialogFormVisible" :show-close=false :destroy-on-close=true >
      <el-form :model="form">
        <el-form-item label="User" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off" show-password></el-input>
        </el-form-item>
      </el-form>

      <el-dialog
        width="30%"
        title="Register"
        :visible.sync="innerVisible"
        append-to-body :show-close=false>
        <el-form :model="register">
          <el-form-item label="User" :label-width="formLabelWidth">
            <el-input v-model="register.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Password" :label-width="formLabelWidth" show-password>
            <el-input v-model="register.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Email" :label-width="formLabelWidth">
            <el-input v-model="register.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="School/Company" :label-width="formLabelWidth">
            <el-input v-model="register.company" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button @click="innerVisible = false">Cancel</el-button>
        <el-button type="primary" @click="innerVisible = false;dialogFormVisible=false">Register</el-button>
      </span>

      </el-dialog>


      <span slot="footer" class="dialog-footer">
        <el-button @click="innerVisible = true">Register</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">Login</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import  MatrixInfoChart from './components/MatrixInfoChart.vue'
  import SRTNavBar from './components/SRTNavBar'
  import logo from './assets/logo.png'
  export default {
    data() {
      return {
        logo: logo,
        dialogFormVisible: true,
        innerVisible: false,
        form: {
          username: '',
          password: ''
        },
        register: {
          username: '',
          password: '',
          email: '',
          company: ''
        },
        formLabelWidth: '120px'
      }
    },
    components: {MatrixInfoChart, SRTNavBar}
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
    alignment: center;
    width: 80%;
    background-color: #c4e1f2;
  }
  .title-style p {
    height:100%;
    margin-top: 1.75%;
    vertical-align: middle;
    font-size: 24px;
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
