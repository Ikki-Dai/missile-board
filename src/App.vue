<template>
  <div id="app">
    <Header/>
    <a-divider />
    <Board/>
  </div>
</template>

<script>
import Header from './components/Guide/Header.vue'
import Board from './components/Body/Board.vue'

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
    Header,
    Board,
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
  margin-top: 20px;
}
</style>
