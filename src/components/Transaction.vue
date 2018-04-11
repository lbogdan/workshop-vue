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
      <div class="col-2" :class="[isIncome ? 'text-success' : 'text-danger']">
          {{ formatAmount(transaction.amount) }}
      </div>
  </div>
</template>

<script>
import dateformat from 'dateformat';

export default {
  name: 'transaction',
  props: {
    transaction: {
      required: true,
      type: Object,
    },
  },
  computed: {
    isIncome() {
      return this.transaction.amount > 0;
    },
  },
  methods: {
    formatDate(date) {
      return dateformat(date, 'd mmm');
    },
    formatAmount(amount) {
      return `€ ${amount.toFixed(2)}`;
    },
  },
};
</script>
