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
      <div class="col-1">
        <button
          class="btn btn-primary btn-sm"
          @click="$emit('delete', transaction)"
        >
          Delete
        </button>
      </div>
  </div>
</template>

<script>
import { formatDate, formatAmount } from '../formatters';

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
    formatDate,
    formatAmount,
  },
};
</script>

<style scoped>
button {
  display: none;
  padding-top: 0;
  padding-bottom: 0;
}
.row:hover button {
  display: inline-block;
}
</style>
