const form = document.querySelector('.formContainer');
const pswd = document.querySelector('#password');
const confirmPswd = document.querySelector('#passwordConfirm');
const errorMessage = document.querySelector('#error-msg');
const submitBtn = document.querySelector('#createAccount');

submitBtn.addEventListener('click', () => {
    pswd.classList.remove('interacted');
    confirmPswd.classList.remove('interacted')
    if(pswd.value !== confirmPswd.value){
        errorMessage.textContent = "*Password do not match";
    }else {
        errorMessage.textContent ="";
        form.submit();
    }
})


document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        input.classList.add('interacted');
    })    
});

document.querySelectorAll('input').forEach(input =>{
    input.addEventListener('blur', ()=> {
        input.classList.add('interacted');
    })
})