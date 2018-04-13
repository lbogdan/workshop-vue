const transactions = [
  {
    id: 1,
    date: Date.parse('2018-04-02'),
    merchant: 'Asociatia Clujsters',
    category: 'Education',
    amount: 99.99,
  },
  {
    id: 2,
    date: Date.parse('2018-04-04'),
    merchant: 'Casa Boema',
    category: 'Food & Dining',
    amount: 25.0,
  },
];

export default {
  transactions: {
    get() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(transactions), 1500);
      });
    },
  },
};
