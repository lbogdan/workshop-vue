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
  },
};