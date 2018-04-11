<template>
  <div>
      <TransactionHeader/>
      <div v-if="loading" class="text-center my-4">
        <PulseLoader color="#2c3e50"/>
      </div>
      <Transaction
        v-else
        v-for="transaction in transactions"
        :transaction="transaction"
        :key="transaction.id"
      />
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

import TransactionHeader from './TransactionHeader.vue';
import Transaction from './Transaction.vue';

export default {
  name: 'transaction-list',
  components: {
    TransactionHeader,
    Transaction,
    PulseLoader,
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
};
</script>
