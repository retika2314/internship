const expenses = [
  { amount: 1500, category: 'Food' },
  { amount: 2000, category: 'Travel' },
  { amount: 500, category: 'Food' }
];
function addExpense(expenses){
  expenses.push({amount: 9500, category: 'Travel'});
  console.log(expenses);
}
function sumOfAmount(expenses)
{
  let total=expenses.reduce(function(sum,cur){
    return sum+cur.amount;
  },0);
  console.log(total);
}
addExpense(expenses);
sumOfAmount(expenses);