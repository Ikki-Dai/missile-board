<template>
  <el-col :span="4">
    <el-dropdown >
      <el-avatar
        icon="el-icon-user-solid"
        fit="scale-down"
        src="https://avatars3.githubusercontent.com/u/16415439?s=60&v=4"
      ></el-avatar>
      <i class="el-icon-arrow-down el-icon--right"></i>

      <el-dropdown-menu>
        <el-dropdown-item>Signed As {{name}}</el-dropdown-item>
        <el-dropdown-item>Status</el-dropdown-item>
        <el-dropdown-item divided>Setting</el-dropdown-item>
        <el-dropdown-item>Profile</el-dropdown-item>
        <el-dropdown-item divided>Sign Out</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
</template>

<script>
export default {
  name: "Status",
  data() {
    return {
      name: "ikki"
    };
  }
};
</script>

<style>
</style>