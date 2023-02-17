//1/ event handler to submit button
console.log('login in js file')
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('submit button clicked');
// 2- email add inside email input
const emailField = document.getElementById('user-email');
const email = emailField.value;
//3 get pass
//set id on html
//get element
// get value from element
const passwardField = document.getElementById('user-pwd');
const pwd = passwardField.value;
//4.varify email
if(email === 'sontan@gmail.com' && password === 'secret'){
    window.location.href = 'bank.html'
}
else{
    alert('tui sontan na')
}
})