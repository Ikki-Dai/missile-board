<template>
  <el-col :span="8">
    <el-badge :value="reply" class="item">
      <el-button>回复</el-button>
    </el-badge>
    <el-badge :value="comment" class="item">
      <el-button>评论</el-button>
    </el-badge>
  </el-col>
</template>

<script>
export default {
    name:"Badge",
    data() {
        return {
            reply: 14,
            comment:39
        }
    }
}
</script>

<style>
.item {
  margin-right: 40px;
}
</style>