<template>
  <el-row :gutter="10" style="margin-bottom: 20px;">
    <el-col :span="4">
      <el-image :src="src" style="width: 30px; height: 30px">
        <div slot="error" class="image-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
      </el-image>
      <el-link href="./" type="primary">MISSILE</el-link>
    </el-col>
    <Search />
    <Badge />
    <Status />
  </el-row>
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