import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8090/api',
});

export default {
  transactions: {
    async get() {
      const { data } = await api.get('transactions');
      return data;
    },
  },
};
