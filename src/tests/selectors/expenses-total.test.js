import moment from 'moment';
import selectExpensesTotal from '../../selectors/expenses-total.js';

const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: '',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
}];

test('should return 0 if no expenses', () => {
  const expenses = [];
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
  const singleExpense = [];
  singleExpense.push(expenses[0]);
  const result = selectExpensesTotal(singleExpense);
  expect(result).toBe(195);
});

test('should correctly add up a multiple expenses', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(114195);
});

// const total = getExpensesTotal(expenses);
// console.log(total);