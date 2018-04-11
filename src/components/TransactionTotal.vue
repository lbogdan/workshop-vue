<template>
  <div class="row py-2 font-weight-bold" key="">
    <div class="col-2 offset-7">
      Total{{ category !== '' ? ` ${category}` : '' }}:
    </div>
    <div class="col-2">
      {{ formatAmount(total) }}
    </div>
  </div>
</template>

<script>
import { formatAmount } from '../formatters';

export default {
  name: 'transaction-total',
  props: {
    category: {
      required: true,
      type: String,
    },
    total: {
      required: true,
      type: Number,
    },
  },
  methods: {
    formatAmount,
  },
};
</script>
