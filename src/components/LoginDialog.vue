<template>


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
    }
  }
</script>
