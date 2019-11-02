/* Selectors */

  /* Sign up elements */
  const registerEmail = document.querySelector('#signup_email');
  const registerPassword = document.querySelector('#signup_password');
  const registerPassword2 = document.querySelector('#signup_password_again');
  const registerUsername = document.querySelector('#signup_username');
  const registerFrom = document.querySelector('#signup_form');
  const registerModal = document.querySelector('#modal-signup');

  /* Log user in elements */
  const loginEmail = document.querySelector('#login_email');
  const loginPassword = document.querySelector('#login_password');
  const loginModal = document.querySelector('#modal-login');
  const loginForm = document.querySelector('#login_form')

  /* Sign user out element */
  const signOutButton = document.querySelector('#loguserout');
  const signOutButtonSideNav = document.querySelector('#loguserout_sidenav');

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

/* RegEx pattern */
const pattern = /^[^<>]{1,}$/;

/* Register user part */
registerFrom.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if(pattern.test(registerEmail.value.trim())&&pattern.test(registerPassword.value)&&pattern.test(registerPassword2.value)&&pattern.test(registerUsername.value)){
    if(registerPassword.value === registerPassword2.value){
      const Register = new AuthRegister(registerEmail.value.trim(), registerPassword.value, registerUsername.value)
      Register.init();

      registerFrom.reset();
      M.Modal.getInstance(registerModal).close();
    }else{
      alert("Hasła nie są identyczne!")
    };
  }else{
    alert("Użyto niedozwolonych znaków podczas rejestracji, proszę spróbować ponownie!")
  };
});

/* Log user in part */
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if(pattern.test(loginEmail.value.trim())&&pattern.test(loginPassword.value)){
    const Login = new AuthLogin(loginEmail.value.trim(), loginPassword.value);
    Login.init();

    loginForm.reset();
    M.Modal.getInstance(loginModal).close();
  }else{
    alert("Użyto niedozwolonych znaków podczas logowania, proszę spróbować ponownie!")
  }
});

/* Sign user out */
signOutButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e);
  auth.signOut()
    .then(() => {
      console.log("wylogowano");
    })
    .catch((error) => {
      console.log(error);
    })
});

signOutButtonSideNav.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e);
  auth.signOut()
    .then(() => {
      console.log("wylogowano");
    })
    .catch((error) => {
      console.log(error);
    })
});