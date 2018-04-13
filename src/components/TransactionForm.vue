<template>
  <div @keyup.esc="onEsc" @keyup.enter="onClick">
    <div class="row">
      <div class="col-2">
        <input
          v-model="formTransaction.date"
          type="text"
          class="form-control"
          placeholder="Date"
        />
      </div>
      <div class="col-4">
        <input
          v-model="formTransaction.merchant"
          type="text"
          class="form-control"
          placeholder="Merchant"
          ref="merchant"
        />
      </div>
      <div class="col-3">
        <select v-model="formTransaction.category" class="form-control">
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
          v-model="formTransaction.amount"
          type="text"
          class="form-control"
          placeholder="Amount"
        />
      </div>
      <div class="col-1">
        <button
          type="submit"
          class="btn btn-primary"
          @click="onClick">
          {{ isEdit ? 'Save' : 'Add' }}
        </button>
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
      formTransaction:
        this.transaction !== null
          ? { ...this.transaction }
          : { ...emptyTransaction },
    };
  },
  props: {
    transaction: {
      required: false,
      default: null,
    },
  },
  computed: {
    isEdit() {
      return this.transaction !== null;
    },
  },
  methods: {
    onClick() {
      this.$emit('submit', this.formTransaction);
      this.formTransaction = { ...emptyTransaction };
    },
    onEsc() {
      if (this.isEdit) {
        this.$emit('cancel');
      }
    },
  },
  mounted() {
    if (this.isEdit) {
      this.$refs.merchant.focus();
    }
  },
};
</script>
