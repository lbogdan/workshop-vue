<template>
  <div id="app" class="container">
    <h3 class="mb-4">My Finance Manager :: Transactions</h3>
    <TransactionHeader/>
    <Transaction/>
  </div>
</template>

<script>
import Transaction from './components/Transaction.vue';
import TransactionHeader from './components/TransactionHeader.vue';

export default {
  name: 'app',
  components: {
    Transaction,
    TransactionHeader,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
