import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export default {
  transactions: {
    async get() {
      const { data } = await api.get('transactions');
      return data;
    },
    remove(id) {
      return api.delete(`transactions/${id}`);
    },
    create(transaction) {
      const { amount, ...rest } = transaction;
      return api.post('transactions', {
        amount: parseFloat(amount),
        ...rest,
      });
    },
  },
};
