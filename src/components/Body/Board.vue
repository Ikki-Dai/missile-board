<template>
  <a-row type="flex" align="top" justify="start">
    <a-col :span="24">
      <a-tabs>
        <a-tab-pane v-for="(item, index) of tabs" :index="index" :key="item" :tab="item">
        </a-tab-pane>

        <a-button
          type="dashed"
          shape="circle"
          icon="user-add"
          slot="tabBarExtraContent"
          style="float: right"
        />
      </a-tabs>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: "Board",
  data() {
    return {
      tabs: ["Sprint", "Bugs", "Tasks"]
    };
  }
};
</script>