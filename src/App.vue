<template>
  <div id="app" class="container">
    <h3 class="mb-4">My Finance Manager :: Transactions</h3>
    <TransactionList
      :loading="loading"
      :transactions="transactions"
      @delete="onDelete"
    />
    <TransactionForm @submit="onSubmit"/>
  </div>
</template>

<script>
import TransactionList from './components/TransactionList.vue';
import TransactionForm from './components/TransactionForm.vue';
import api from './api';

export default {
  name: 'app',
  components: {
    TransactionList,
    TransactionForm,
  },
  data() {
    return {
      loading: true,
      transactions: [],
    };
  },
  created() {
    this.loadTransactions();
  },
  methods: {
    async loadTransactions() {
      this.loading = true;
      this.transactions = await api.transactions.get();
      this.loading = false;
    },
    async onSubmit(transaction) {
      await api.transactions.create(transaction);
      this.loadTransactions();
    },
    async onDelete(transaction) {
      await api.transactions.remove(transaction.id);
      this.loadTransactions();
    },
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
