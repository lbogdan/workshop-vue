<template>
  <div id="app" class="container">
    <h3 class="mb-4">My Finance Manager :: Transactions</h3>
    <TransactionList :transactions="transactions"/>
  </div>
</template>

<script>
import TransactionList from './components/TransactionList.vue';

export default {
  name: 'app',
  components: {
    TransactionList,
  },
  data() {
    return {
      transactions: [
        {
          id: 1,
          date: Date.parse('2018-04-02'),
          merchant: 'Asociatia Clujsters',
          category: 'Education',
          amount: 99.99,
        },
        {
          id: 2,
          date: Date.parse('2018-04-04'),
          merchant: 'Casa Boema',
          category: 'Food & Dining',
          amount: 25.0,
        },
      ],
    };
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
