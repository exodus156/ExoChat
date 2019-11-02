/* Selectors */

  /* Sign up elements */
  const registerEmail = document.querySelector('#signup_email');
  const registerPassword = document.querySelector('#signup_password');
  const registerPassword2 = document.querySelector('#signup_password_again');
  const registerUsername = document.querySelector('#signup_username');
  const registerFrom = document.querySelector('#signupform');
  const registerModal = document.querySelector('#modal-signup');

  /* log user in elements */

/* Imports */
import {AuthRegister, AuthLogin} from './modules/auth';

/* Materialize initials code */
document.addEventListener('DOMContentLoaded', () => {
  let navigationElements = document.querySelectorAll('.sidenav'); //Mobile sidenav selector
  M.Sidenav.init(navigationElements, {});//Mobile sidenav activator

  let modalElements = document.querySelectorAll('.modal');
  M.Modal.init(modalElements, {});
});

/* Chatroom code */

/* Register user part */
registerFrom.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const Register = new AuthRegister(registerEmail.value.trim(), registerPassword.value, registerUsername.value)
  Register.init();

  registerFrom.reset();
  M.Modal.getInstance(registerModal).close();
});

/* Log user in part */
