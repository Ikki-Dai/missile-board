<template>
  <a-col :span="4" style="float: right">
    <a-button type="primary" shape="circle" icon="plus"></a-button>
    <a-divider type="vertical" />
    <a-button type="primary"  icon="calendar"></a-button>
    
    <a-divider type="vertical" />
    <a-badge dot>
      <a-button type="dashed" shape="circle" icon="notification" />
    </a-badge>
    <a-divider type="vertical" />
    <a-badge dot>
      <a-button type="dashed" shape="circle" icon="message"></a-button>
    </a-badge>
  </a-col>
</template>

<script>
export default {
  name: "Badge",
  data() {
    return {
      reply: 14,
      comment: 39
    };
  }
};
</script>

<style>
.item {
  margin-right: 40px;
}
</style>