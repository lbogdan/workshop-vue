<template>
  <div id="app">
    <h1>Hello, Vue.js!</h1>
    <img src="./assets/logo.png">
    <Transaction/>
  </div>
</template>

<script>
import Transaction from './components/Transaction.vue';

export default {
  name: 'app',
  components: {
    Transaction,
  },
};
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
