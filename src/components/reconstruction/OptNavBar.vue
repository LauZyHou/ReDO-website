<template>
  <div>
    <el-steps :active="currentStep" finish-status="success" simple>
      <el-step title="Input"></el-step>
      <el-step title="Structure Checkout"></el-step>
    </el-steps>

    <router-view @step="originalStep" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "OptNavBar.vue",
      currentStep: 0,
    };
  },
  methods: {
    originalStep(res) {
      console.log(res);
      this.currentStep = res;
    },
  },
};
</script>

<style scoped>
</style>
