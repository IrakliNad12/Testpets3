const passwordField = document.querySelector('.passwordField');
const showPassword = document.querySelector('.showpassword');
let passwordvisability = true;

showPassword.addEventListener('click', ()=>{
    if (passwordvisability) {
        showPassword.classList.replace('fa-eye', 'fa-eye-slash');
        passwordField.type = 'text';
    } else {
        showPassword.classList.replace('fa-eye-slash', 'fa-eye');
        passwordField.type = 'password';
    }
    passwordvisability = !passwordvisability;
});
