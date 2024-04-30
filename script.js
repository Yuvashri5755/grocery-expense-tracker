let expenses =[]
let totalAmount = 0;
const categorySelect = document.getElementById('category_select')
const amountInput = document.getElementById('amount_input')
const AvailableInput = document.getElementById('avail')
const dateInput = document.getElementById('date_input')
const addBtn = document.getElementById('add_btn')
const expenseTableBody = document.getElementById('expense-table-body')

addBtn.addEventListener('click',function(){
    const category=categorySelect.value;
    const avail=AvailableInput.value;
    const amount =Number(amountInput.value);
    const date = dateInput.value;

    if(category ===''){
        alert('please select a category');
        return;
    }
    if(isNaN(amount) || amount<=0){
        alert('please enter a valid amount');
        return;
    }
    if(avail ===''){
        alert('please enter this feild');
        return;
    }
    if(date ===''){
        alert('please select a date');
        return;
    }
    expenses.push({category,amount,avail,date})
     const newRow = expenseTableBody.insertRow();
     const categoryCell = newRow.insertCell();
     const AmountCell = newRow.insertCell();
     const AvailableCell = newRow.insertCell();
     const dateCell = newRow.insertCell();
     const deleteCell = newRow.insertCell();
     const deleteBtn = document.createElement('button');
     deleteBtn.textContent ='Delete';
     deleteBtn.classList.add('delete-btn');
     deleteBtn.addEventListener('click', function(){
     expenses.splice(expenses.indexOf(expense),1);
     expenseTableBody.removeChild(newRow)
     })
     const expense = expenses[expenses.length-1];
     categoryCell.textContent=expense.category;
     AmountCell.textContent=expense.amount;
     AvailableCell.textContent=expense.avail;
     dateCell.textContent=expense.date;
     deleteCell.appendChild(deleteBtn);

});
for(const expense of expenses){
     const newRow = expenseTableBody.insertRow();
     const categoryCell = newRow.insertCell();
     const AmountCell = newRow.insertCell();
     const AvailableCell = newRow.insertCell();
     const dateCell = newRow.insertCell();
     const deleteCell = newRow.insertCell();
     const deleteBtn = document.createElement('button');
     deleteBtn.textContent ='Delete';
     deleteBtn.classList.add('delete-btn');
     deleteBtn.addEventListener('click', function(){
    expenses.splice(expenses.indexOf(expense),1);
    expenseTableBody.removeChild(new Row)
     })
     const expense = expenses[expenses.length-1];
     categoryCell.textContent=expense.category;
     AmountCell.textContent=expense.amount;
     AvailableCell.textContent=expense.avail;
     dateCell.textContent=expense.date;
     deleteCell.appendChild(deleteBtn);
}