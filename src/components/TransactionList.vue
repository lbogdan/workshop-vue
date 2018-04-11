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
      <template v-else>
        <Transaction
          v-for="transaction in filteredTransactions"
          :transaction="transaction"
          :key="transaction.id"
        />
        <div class="row py-2 font-weight-bold" key="">
            <div class="col-2 offset-7">
              Total{{ filterCategory !== '' ? ` ${filterCategory}` : '' }}:
            </div>
            <div class="col-2">
              € {{ totalAmount }}
            </div>
        </div>
      </template>
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
    totalAmount() {
      return this.filteredTransactions.reduce(
        (sum, transaction) => sum + transaction.amount,
        0,
      );
    },
  },
};
</script>
