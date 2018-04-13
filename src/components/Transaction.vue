<template>
  <div class="row py-2">
      <div class="col-2">
          {{ transaction.date }}
      </div>
      <div class="col-4">
          {{ transaction.merchant }}
      </div>
      <div class="col-3">
          {{ transaction.category }}
      </div>
      <div class="col-2">
          € {{ transaction.amount }}
      </div>
  </div>
</template>

<script>
export default {
  name: 'transaction',
  data() {
    return {
      transaction: {
        date: '4 Apr',
        merchant: 'Asociatia Clujsters',
        category: 'Education',
        amount: 99.99,
      },
    };
  },
};
</script>
