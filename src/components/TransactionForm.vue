<template>
  <div class="mt-4">
    <div class="row">
      <div class="col-2">
        <input
          v-model="transaction.date"
          type="text"
          class="form-control"
          placeholder="Date"
        />
      </div>
      <div class="col-4">
        <input
          v-model="transaction.merchant"
          type="text"
          class="form-control"
          placeholder="Merchant"
        />
      </div>
      <div class="col-3">
        <select v-model="transaction.category" class="form-control">
          <option value="">Select Category</option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>
      <div class="col-2">
        <input
          v-model="transaction.amount"
          type="text"
          class="form-control"
          placeholder="Amount"
        />
      </div>
      <div class="col-1">
        <button type="submit" class="btn btn-primary" @click="onClick">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import categories from '../data/categories';

const emptyTransaction = {
  date: '',
  merchant: '',
  category: '',
  amount: '',
};

export default {
  name: 'transaction-form',
  data() {
    return {
      categories,
      transaction: { ...emptyTransaction },
    };
  },
  methods: {
    onClick() {
      this.$emit('submit', this.transaction);
      this.transaction = { ...emptyTransaction };
    },
  },
};
</script>
