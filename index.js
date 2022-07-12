const pass1 = document.getElementById("password");
const pass2 = document.getElementById("confirm_password");
const pwError = document.querySelector('#password-error');
const pwCError = document.querySelector('#passwordC-error');

pass2.addEventListener("input", function (event) {
  if (pass2.value != pass1.value) {
    pwCError.textContent = 'Passwords do not match';
  } else {
    pwCError.textContent = '';
  }
}); 