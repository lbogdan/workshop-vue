<template>
  <div>
      <div class="row mb-4">
        <div class="col-3 offset-6">
          <select v-model="filterCategory" class="form-control">
            <option value="">All Categories</option>
            <option
              v-for="category in categories"
              :key="category"
              :value="category"
            >{{ category }}</option>
          </select>
        </div>
      </div>
      <TransactionHeader/>
      <div v-if="loading" class="text-center my-4">
        <PulseLoader color="#2c3e50"/>
      </div>
      <Transaction
        v-else
        v-for="transaction in filteredTransactions"
        :transaction="transaction"
        :key="transaction.id"
      />
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

import TransactionHeader from './TransactionHeader.vue';
import Transaction from './Transaction.vue';
import categories from '../data/categories';

export default {
  name: 'transaction-list',
  components: {
    TransactionHeader,
    Transaction,
    PulseLoader,
  },
  data() {
    return {
      categories,
      filterCategory: '',
    };
  },
  props: {
    transactions: {
      required: true,
      type: Array,
    },
    loading: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  computed: {
    filteredTransactions() {
      if (this.filterCategory === '') {
        return this.transactions;
      }
      return this.transactions.filter(
        (transaction) => transaction.category === this.filterCategory,
      );
    },
  },
};
</script>
