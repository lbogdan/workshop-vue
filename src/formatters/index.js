import dateformat from 'dateformat';

export function formatDate(date) {
  return dateformat(date, 'd mmm');
}

export function formatAmount(amount) {
  return `€ ${amount.toFixed(2)}`;
}
