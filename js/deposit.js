document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposite button clicked')
    //amoutn from deposite input field
    const depositField = document.getElementById('deposit-field');
const newdepositAmountString =  depositField.value;
const newdepositAmount = parseFloat(newdepositAmountString);

//get current deposit total mount
const depositTotalElement = document.getElementById('deposit-total');
const previousdepositTotalString = depositTotalElement.innerText;
const previousdepositTotal = parseFloat(previousdepositTotalString);

//4.. add no to total deposit
const currentDepositTotal = previousDepositTotal + newDepositAmount; 
depositTotalElement.innerText = currentDepositTotal;

//5.get balancr current total
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
// calculate total
const currentBalanceTotal = previousBalanceTotal + newDepositAmount; 
balanceTotalElement.innerText = currentBalanceTotal;
// 7.clear deposit field
depositField.value = '';
})