// EVENT LISTENERS
document.getElementById('expense-details').addEventListener('submit', handleExpense);

// EVENT HANDLERS
function handleExpense(e) {
  e.preventDefault();
  if (e.target !== null) {
    const name = e.target[0].value;
    const date = e.target[1].value;
    const amount = e.target[2].value;
    addExpense(name, date, amount);
    this.reset();
  } else {
    alert("You forgot to enter an expense!");
  }
}

// HELPER FUNCTIONS
function addExpense(name, date, amount) {
  const emptyList = document.getElementById('empty-list');
  const tbody = document.getElementById('expense-list');
  const tr = document.createElement('expense-item');
  const amountInDollar = currencyValue(amount);

  tbody.innerHTML = `
    <tr>
      <td>${name}</td>
      <td>${date}</td>
      <td>${amountInDollar}</td>
      <td><button name='delete'>Delete</button></td>
    </tr>
  `;

  console.log(emptyList.parentNode.nodeName);
  emptyList.remove();
  tbody.appendChild(tr);

}

function currencyValue(expenseAmount) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });
  return (formatter.format(expenseAmount));
}

