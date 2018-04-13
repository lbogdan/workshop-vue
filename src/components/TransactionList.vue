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
      <template v-for="transaction in filteredTransactions">
        <Transaction
          v-if="transaction.id !== editingId"
          :transaction="transaction"
          :key="transaction.id"
          v-on="$listeners"
          @edit="onEdit"
        />
        <TransactionForm
          v-else
          :key="transaction.id"
          :transaction="transaction"
          v-on="$listeners"
          @cancel="editingId = null"
          @submit="onSubmit"
        />
      </template>
      <TransactionTotal
        v-if="transactions.length > 0"
        :category="filterCategory"
        :total="totalAmount"
      />
      <div v-if="loading" class="text-center my-4">
        <PulseLoader color="#2c3e50"/>
      </div>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

import TransactionHeader from './TransactionHeader.vue';
import Transaction from './Transaction.vue';
import TransactionTotal from './TransactionTotal.vue';
import TransactionForm from './TransactionForm.vue';
import categories from '../data/categories';

export default {
  name: 'transaction-list',
  components: {
    TransactionHeader,
    Transaction,
    TransactionTotal,
    TransactionForm,
    PulseLoader,
  },
  data() {
    return {
      categories,
      filterCategory: '',
      editingId: null,
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
  methods: {
    onEdit(transaction) {
      this.editingId = transaction.id;
    },
    onSubmit(transaction) {
      this.$emit('submit', transaction);
      this.editingId = null;
    },
  },
};
</script>
