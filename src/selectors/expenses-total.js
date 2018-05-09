export default (expenses) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let total = 0;
  if (expenses.length > 0){
    total = expenses.map(expense => expense.amount).reduce(reducer); 
  } 
  return total;
};

