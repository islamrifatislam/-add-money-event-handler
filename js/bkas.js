document.getElementById('login').addEventListener('click', function(event) {
  event.preventDefault();

  const addmoney = document.getElementById('number').value;
  const pin = document.getElementById('pin').value;

  // console.log("Number:", number); // 
  // console.log("PIN:", pin);       // 

  if (pin === "123") { 
    console.log('Login Successful');
    const balance = document.getElementById('amount').innerText;
// console.log(balance);
const newbalance=balance+addmoney;
// console.log(  newbalance)
const addtaka =parseFloat(addmoney);
const balancenumber=parseFloat(balance);
const newMoney = parseFloat(balance) + parseFloat(addmoney);

console.log(newMoney);
   document.getElementById('amount').innerText = newMoney.toFixed(2);

  } else {
    alert('Invalid PIN');
  }
});





// document.getElementById('login').addEventListener('click', function(event) {
//   event.preventDefault();

//   const addmoney = document.getElementById('number').value;
//   const pin = document.getElementById('pin').value;

//   if (pin === "123") { 
//     const amountElement = document.getElementById('amount');
//     const currentBalanceText = amountElement.innerText;

//     // শুধু সংখ্যাটা বের করে (যদি ৳ বা অন্য কিছু থাকে)
//     const currentBalance = parseFloat(currentBalanceText);

//     const moneyToAdd = parseFloat(addmoney);

//     // চূড়ান্ত যোগফল
//     const updatedBalance = currentBalance + moneyToAdd;

//     // ব্যালান্স UI তে আপডেট করা
//     amountElement.innerText = updatedBalance.toFixed(2); // যেমনঃ 550.00

//     console.log("Balance updated:", updatedBalance);
//   } else {
//     alert('Invalid PIN');
//   }
// });
