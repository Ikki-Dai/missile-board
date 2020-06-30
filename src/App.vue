<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <input v-model="inputValue"/>
      <el-button @click="sbt">el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" :list=list />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data () {
    return {
      inputValue: '',
      list : []
    }
  },
  methods: {
    sbt() {
      this.list.push(this.inputValue);
      this.inputValue = '';
      this.axios.get("/app/mock/23080/resources/search",{
        params:{
          id:5
        }
      }).then(data=> {
        console.log(data);
      });
      this.axios.post("app/mock/121145/post", {
        name:"tom"
      })
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
