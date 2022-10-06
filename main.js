// form validation
const myForm = document.querySelector('#my-form');
const amount= document.querySelector('#amount');
const description = document.querySelector('#des');
const category = document.querySelector('#cat');

myForm.addEventListener('submit', onSubmit);



function onSubmit(e) {
  e.preventDefault();

  let expense =
  {
      amount: amount.value,
      description: description.value,
       category:category.value
 };

localStorage.setItem(expense.category, JSON.stringify(expense));
ShowExpense(expense);
  }


  function ShowExpense(exp) {

   if(localStorage.getItem(exp.category)!==null)
   {
     deleteexpensefromscreen(exp.category);
  }
   const parentnode=document.getElementById('users');
   const childnode= `<li id=${exp.category}> ${exp.amount} - ${exp.description} - ${exp.category}
    <button onclick=DeleteExpense('${exp.category}')> Delete expense </button>
    <button onclick=EditExpense('${exp.amount}','${exp.description}')> Edit Expense </button>
    </li>`

   parentnode.innerHTML=parentnode.innerHTML + childnode;
    amount.value = '';
   description.value = '';

  }

  // delete expense
function DeleteExpense(category)
{
  localStorage.removeItem(category);
deleteexpensefromscreen(category);

}

// editexpense
function EditExpense(amount,description,category)
{
   document.getElementById('amount').value=amount;
   document.getElementById('des').value=description ;
  //  document.getElementById('cat').value=category;
  }



  // remove expense from screen
function deleteexpensefromscreen(cat){
  const parentNode = document.getElementById('users');
  const childNode = document.getElementById(cat);
if(childNode)
{
 parentNode.removeChild(childNode);
}
}

