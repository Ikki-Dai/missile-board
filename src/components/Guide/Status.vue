<template>
  <a-col :span="2">
    <a-dropdown> 
      <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1">Signed As {{name}}</a-menu-item>
        <a-menu-item key="2">Status</a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3">Setting</a-menu-item>
        <a-menu-item key="4">Profile</a-menu-item>
        <a-menu-divider />
        <a-menu-item key="5">Sign Out</a-menu-item>
      </a-menu>
      <!-- <a-icon type="down" /> -->
    </a-dropdown>
  </a-col>
</template>

<script>
export default {
  name: "Status",
  methods: {
    handleMenuClick() {
      alert("click");
    }
  },
  data() {
    return {
      name: "ikki"
    };
  }
};
</script>

<style>
</style>