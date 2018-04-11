<template>
  <div class="row py-2">
      <div class="col-2">
          {{ formatDate(transaction.date) }}
      </div>
      <div class="col-4">
          {{ transaction.merchant }}
      </div>
      <div class="col-3">
          {{ transaction.category }}
      </div>
      <div class="col-2">
          {{ formatAmount(transaction.amount) }}
      </div>
  </div>
</template>

<script>
import dateformat from 'dateformat';

export default {
  name: 'transaction',
  data() {
    return {
      transaction: {
        date: Date.parse('2018-04-02'),
        merchant: 'Asociatia Clujsters',
        category: 'Education',
        amount: 99.99,
      },
    };
  },
  methods: {
    formatDate(date) {
      return dateformat(date, 'd mmm');
    },
    formatAmount(amount) {
      return `€ ${amount}`;
    },
  },
};
</script>
