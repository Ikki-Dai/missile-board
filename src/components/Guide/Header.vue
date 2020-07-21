<template>
  <a-row type="flex" justify="center">
    <a-col :span="6">
        <img src="../../assets/logo.png" style="width: 30px; height: 30px"/>
        <a href="./">MISSILE</a>
    </a-col>
    <Search />
    <Badge />
    <Status />
  </a-row>
</template>

<script>
import Status from "./Status.vue";
import Badge from "./Badge.vue";
import Search from "./Search.vue";

export default {
  name: "Header",
  data() {
      return {
          src: require('@/assets/logo.png')
      }
  },
  components: {
    Status,
    Search,
    Badge
  }
};
</script>