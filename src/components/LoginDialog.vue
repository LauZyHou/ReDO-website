<template>


  <el-dialog title="Login" :visible.sync="dialogFormVisible" :show-close=false :destroy-on-close=false :close-on-click-modal="false">
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
        <el-button type="primary" @click="registerCheck">Register</el-button>
      </span>

    </el-dialog>


    <span slot="footer" class="dialog-footer">
        <el-button @click="innerVisible = true">Register</el-button>
        <el-button type="primary" @click="loginCheck">Login</el-button>
      </span>
  </el-dialog>
</template>
<script>

  export default {
    data() {
      return {
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
    props:{sessionControl: {type:String}},
    // beforeMount () {
    //
    // },

    watch:{
      sessionControl(a,b){
        var _this=this
        console.log(a)
        if(a==="not-exist") {
          _this.dialogFormVisible = true
          console.log(a)
        }else{
          _this.dialogFormVisible = false
          _this.$message('Welcome back, '+a+'!');
          _this.form.username=a
        }

      }
    },

    methods:{
      loginCheck(){
        var _this=this
        _this.$emit("login",_this.form.username+" "+_this.form.password)
      },
      registerCheck(){
        var _this=this
        var fd=new FormData();
        if(!_this.validateInfo(_this.register.username,_this.register.password,_this.register.email,_this.register.company)){
          _this.$alert('Not valid registration!', '', {
            confirmButtonText: 'Try Again',
          });
        }
        fd.append("username",_this.register.username)
        fd.append("password",_this.register.password)
        fd.append("email",_this.register.email)
        fd.append("company",_this.register.company)
        this.$http.post(this.baseUrl+'register', fd,
          {headers:{'Content-Type':'application/x-www-form-urlencoded', 'dataType': 'json'}})
          .then((res)=>{
            this.innerVisible = false
            _this.$message('Register success, login please!');
          })

      },
      validateInfo(usr,pwd,email,company){
        return true; // Need revision!
      }

    }
  }
</script>
