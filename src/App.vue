<template>
  <div id="app">
    <div class="intro">
      <div class="img-container">
        <!--<img :src=logo height="1000%"/>-->
      </div>
      <div class="title-style"><p><b>ReDO: Recommendation on Development Order based on Design Class Diagram</b></p></div>
    </div>

    <div style="height:100%">


      <s-r-t-nav-bar @logout="logout"/>
    </div>

    <login-dialog :session-control="sessionControl" @login="login"/>
  </div>
</template>

<script>
  import MatrixInfoChart from './components/MatrixInfoChart.vue'
  import SRTNavBar from './components/SRTNavBar'
  import logo from './assets/logo.png'
  import LoginDialog from './components/LoginDialog'

  export default {
    data() {
      return {
        logo: logo,
        sessionControl: "not-exist"
      }
    },
    created(){
      var _this=this
      this.$http.post(this.baseUrl+'session', null,
        {headers:{'Content-Type':'application/x-www-form-urlencoded', 'dataType': 'json'}})
        .then((res)=>{
          console.log(res)
            _this.sessionControl=res.data.username
        })
    },
    methods:{
      logout(){
        var _this=this
        this.$http.post(this.baseUrl+'sessionOut', null,
          {headers:{'Content-Type':'application/x-www-form-urlencoded', 'dataType': 'json'}})
          .then((res)=>{
            console.log(res)
            _this.sessionControl="not-exist"

          })
      },
      login(e){
        var a=e.split(' ')
        var fd=new FormData();
        fd.append("username",a[0])
        fd.append("password",a[1])
var _this=this
        this.$http.post(this.baseUrl+'login', fd,
          {headers:{'Content-Type':'application/x-www-form-urlencoded', 'dataType': 'json'}})
          .then((res)=>{
            console.log(res)
            if(res.data.success=='true'){

              _this.sessionControl=a[0]
              // _this.$message('Hi, '+_this.form.username+'!');

            }
            else{
              _this.$alert('Password is wrong!', '', {
                confirmButtonText: 'Try Again',
              });
              _this.dialogFormVisible = true
            }


          })
      }
    },
    components: {MatrixInfoChart, SRTNavBar, LoginDialog}
  }


</script>

<style >
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    height: 100%;
  }

  html, body {
    margin: 0px;
    height: 100%;
  }

  .title-style {
    float: left;
    display: table-cell;
    height: 100%;
    vertical-align: middle;
    alignment: center;
    width: 80%;
    background-color: #c4e1f2;
  }

  .title-style p {
    height: 100%;
    /*margin-top: 1.75%;*/
    vertical-align: middle;
    font-size: 24px;
    transform: translate(0,-5%);
  }

  .img-container {
    float: left;
    height: 10%;
    width: 20%;

    /*overflow-x: hidden;*/
  }

  .intro {
    height: 10%;


  }
</style>
