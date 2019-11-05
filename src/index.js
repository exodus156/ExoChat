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

  /* Sign user out elements */
  const signOutButton = document.querySelector('#loguserout');
  const signOutButtonSideNav = document.querySelector('#loguserout_sidenav');

  /* Navigation elements */
  const accountButtonSideNav = document.querySelector("#accountInfo_sidenav");
  const loginButton = document.querySelector('#login');
  const loginButtonSideNav = document.querySelector('#login_sidenav');
  const registerButton = document.querySelector('#register');
  const registerButtonSideNav = document.querySelector('#register_sidenav');

  /* Account modal elements */
  const accountModal = document.querySelector("#modal-account");
  const accountButton = document.querySelector("#accountInfo");

  /* Chatroom section */
  const chatroomSection = document.querySelector("#chatroom");

/* Imports */
import {AuthRegister, AuthLogin} from './modules/auth';
import AccountModal from './modules/account';

/* Materialize initials code */
document.addEventListener('DOMContentLoaded', () => {
  let navigationElements = document.querySelectorAll('.sidenav'); //Mobile sidenav selector
  M.Sidenav.init(navigationElements, {});//Mobile sidenav activator

  let modalElements = document.querySelectorAll('.modal');
  M.Modal.init(modalElements, {});
});

/* Chatroom code */

/* USER LOGGED IN/OUT */
auth.onAuthStateChanged((user) => {
  if(user){
    /* Change visible elements */
    loginButton.classList.add("hidden");
    loginButtonSideNav.classList.add("hidden");
    registerButton.classList.add("hidden");
    registerButtonSideNav.classList.add("hidden");

    accountButton.classList.remove("hidden");
    accountButtonSideNav.classList.remove("hidden");
    signOutButton.classList.remove("hidden");
    signOutButtonSideNav.classList.remove("hidden");
    chatroomSection.classList.remove("hidden");
    
    /* Sign user out */
    signOutButton.addEventListener('click', (e) => {
      e.preventDefault();
      auth.signOut()
    });

    signOutButtonSideNav.addEventListener('click', (e) => {
      e.preventDefault();
      auth.signOut()
    });

    /* Account info modal part */
    accountButton.addEventListener('click', (e) =>{
      e.preventDefault();
      let account = new AccountModal(user.uid, accountModal);
      account.init();
    })
  }
  else{
    /* Change visible elements */
    loginButton.classList.remove("hidden");
    loginButtonSideNav.classList.remove("hidden");
    registerButton.classList.remove("hidden");
    registerButtonSideNav.classList.remove("hidden");

    accountButton.classList.add("hidden");
    accountButtonSideNav.classList.add("hidden");
    signOutButton.classList.add("hidden");
    signOutButtonSideNav.classList.add("hidden");
    chatroomSection.classList.add("hidden");

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
  }
})


