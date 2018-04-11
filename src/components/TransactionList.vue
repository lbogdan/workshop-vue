<template>
  <div>
      <TransactionHeader/>
      <Transaction
        v-for="transaction in transactions"
        :transaction="transaction"
        :key="transaction.id"
      />
  </div>
</template>

<script>
import TransactionHeader from './TransactionHeader.vue';
import Transaction from './Transaction.vue';

export default {
  name: 'transaction-list',
  components: {
    TransactionHeader,
    Transaction,
  },
  props: {
    transactions: {
      required: true,
      type: Array,
    },
  },
};
</script>
