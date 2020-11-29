Real time chatroom created using html, css, javascript, regex, babel and webpack (I created and used my own webpack boilerplate).

ExoChat uses firestore database, fireauth for authorization, materialize to style components and create modals and dateFNS for properly styled date and time of messages.

Chatroom prevents creating the same username as other user, invalid email adresses, attempts of using invalid symbols to create password or username. It also prevents not logged users from sending messages and viewing them, also it prevents logged in users from attempting to log in again, while they are logged in.

After creating new account, user is automatically logged in.
