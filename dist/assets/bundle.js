!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.r(t);var r=function(){function e(t,n,a){o(this,e),this.email=t,this.password=n,this.name=a}return i(e,[{key:"init",value:function(){var e=this;auth.createUserWithEmailAndPassword(this.email,this.password).then((function(t){var n=new Date,o={uid:t.user.uid,username:e.name,created:firebase.firestore.Timestamp.fromDate(n),messages:0};db.collection("users").doc(t.user.uid).set(o).then().catch((function(e){console.log(e)})),null!==t&&alert("Pomyślnie zarejestrowano!")})).catch((function(e){alert(e.message)}))}}]),e}(),s=function(){function e(t,n){o(this,e),this.email=t,this.password=n}return i(e,[{key:"init",value:function(){auth.signInWithEmailAndPassword(this.email,this.password).then((function(e){null!==e&&alert("Pomyślnie zalogowano!")})).catch((function(e){alert(e.message)}))}}]),e}();function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.uid=t,this.accountModalTarget=n}var t,n,o;return t=e,(n=[{key:"init",value:function(){var e=this;db.collection("users").where("uid","==",this.uid).get().then((function(t){t.docs.forEach((function(t){console.log(t.data());var n=dateFns.distanceInWordsToNow(t.data().created.toDate(),{includeSeconds:!0});e.accountModalTarget.innerHTML='\n                <div class="modal-content">\n                    <div class="row">\n                        <h4 class="col s12 center-align orange-text text-accent-4">Informacje o koncie</h4>\n                    </div>\n                    <div class="row">\n                        <div class="col s12 center-align">\n                            <h5 class="orange-text text-accent-4">Nazwa użytkownika</h5>\n                            <h6>'.concat(t.data().username,'</h6>\n                        </div>\n                    </div>\n                    <div class="row">\n                        <div class="col s12 center-align">\n                            <h5 class="orange-text text-accent-4">Ilość wiadomości</h5>\n                            <h6>').concat(t.data().messages,'</h6>\n                        </div>\n                    </div>\n                    <div class="row">\n                        <div class="col s12 center-align">\n                            <h5 class="orange-text text-accent-4">Konto utworzono</h5>\n                            <h6>').concat(n," ago</h6>\n                        </div>\n                    </div>\n                </div>\n                ")}))}))}}])&&c(t.prototype,n),o&&c(t,o),e}(),l=document.querySelector("#signup_email"),d=document.querySelector("#signup_password"),v=document.querySelector("#signup_password_again"),f=document.querySelector("#signup_username"),m=document.querySelector("#signup_form"),h=document.querySelector("#modal-signup"),g=document.querySelector("#login_email"),y=document.querySelector("#login_password"),p=document.querySelector("#modal-login"),w=document.querySelector("#login_form"),b=document.querySelector("#loguserout"),S=document.querySelector("#loguserout_sidenav"),L=document.querySelector("#accountInfo_sidenav"),q=document.querySelector("#login"),_=document.querySelector("#login_sidenav"),j=document.querySelector("#register"),k=document.querySelector("#register_sidenav"),x=document.querySelector("#modal-account"),z=document.querySelector("#accountInfo"),O=document.querySelector("#chatroom");document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".sidenav");M.Sidenav.init(e,{});var t=document.querySelectorAll(".modal");M.Modal.init(t,{})})),auth.onAuthStateChanged((function(e){if(e)q.classList.add("hidden"),_.classList.add("hidden"),j.classList.add("hidden"),k.classList.add("hidden"),z.classList.remove("hidden"),L.classList.remove("hidden"),b.classList.remove("hidden"),S.classList.remove("hidden"),O.classList.remove("hidden"),b.addEventListener("click",(function(e){e.preventDefault(),auth.signOut()})),S.addEventListener("click",(function(e){e.preventDefault(),auth.signOut()})),z.addEventListener("click",(function(t){t.preventDefault(),new u(e.uid,x).init()}));else{q.classList.remove("hidden"),_.classList.remove("hidden"),j.classList.remove("hidden"),k.classList.remove("hidden"),z.classList.add("hidden"),L.classList.add("hidden"),b.classList.add("hidden"),S.classList.add("hidden"),O.classList.add("hidden");var t=/^[^<>]{1,}$/;m.addEventListener("submit",(function(e){(e.preventDefault(),t.test(l.value.trim())&&t.test(d.value)&&t.test(v.value)&&t.test(f.value))?d.value===v.value?(new r(l.value.trim(),d.value,f.value).init(),m.reset(),M.Modal.getInstance(h).close()):alert("Hasła nie są identyczne!"):alert("Użyto niedozwolonych znaków podczas rejestracji, proszę spróbować ponownie!")})),w.addEventListener("submit",(function(e){(e.preventDefault(),t.test(g.value.trim())&&t.test(y.value))?(new s(g.value.trim(),y.value).init(),w.reset(),M.Modal.getInstance(p).close()):alert("Użyto niedozwolonych znaków podczas logowania, proszę spróbować ponownie!")}))}}))}]);