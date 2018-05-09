import moment from 'moment';
import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';


test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
  // const singleExpense = [];
  // singleExpense.push(expenses[0]);
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toBe(195);
});

test('should correctly add up a multiple expenses', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(114195);
});

// const total = getExpensesTotal(expenses);
// console.log(total);