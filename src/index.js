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

  /* Message form */
  const messageForm = document.querySelector("#messageform");
  const chatMessage = document.querySelector("#chatmessage");

  /* Messages collection */
  const messages = document.querySelector("#messages");

/* Imports */
import {AuthRegister, AuthLogin} from './modules/auth';
import AccountModal from './modules/account';
import Message from './modules/message';

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
      unsub();
      auth.signOut();
    });

    signOutButtonSideNav.addEventListener('click', (e) => {
      e.preventDefault();
      unsub();
      auth.signOut()
    });

    /* Account info modal part */
    accountButton.addEventListener('click', (e) =>{
      e.preventDefault();
      let account = new AccountModal(user.uid, accountModal);
      account.init();
    })

    /* Main chat code - sending messages */
    messageForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if(pattern.test(chatMessage.value)){
        const message = new Message(user.uid, chatMessage.value);
        message.init();
        messageForm.reset();
      }
    })

    /* Main chat code - updating chat window */
    const unsub = db.collection('chatroom').orderBy('created_at').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach(change => {
        const doc = change.doc.data();
        if(change.type === 'added'){
          const time = dateFns.distanceInWordsToNow(
            doc.created_at.toDate(),
            { includeSeconds: true,
              addSuffix: true }
          )
          messages.innerHTML +=
          `
          <li class="collection-item">
            <span class="username">${doc.username}</span>
            <p class="text">${doc.text}</p>
            <span class="time">${time}</span>
          </li>
          `
        }
      })
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
      }else if(pattern.test(loginEmail.value.trim()) === false && pattern.test(loginPassword.value) === false){
        alert("Użyto niedozwolonych znaków podczas logowania, proszę spróbować ponownie!")
      }
    });
  }
})


