/* Register new user in fireauth */
class AuthRegister {
    constructor(email, password, name){
        this.email = email,
        this.password = password,
        this.name = name
    }
    init(){
        auth.createUserWithEmailAndPassword(this.email, this.password) //creates user with email and password
        .then( cred => {
            const date = new Date(); //current date for timestamps
            const newUser = {
                uid: cred.user.uid,
                username: this.name,
                created: firebase.firestore.Timestamp.fromDate(date),
                messages: 0
            };
            db.collection('users').doc(cred.user.uid).set(newUser).then().catch((error) => {console.log(error);}); //adds user additional data to database
            if(cred !== null){
                alert("Pomyślnie zarejestrowano!")
            }
        })
        .catch(error => {
            alert(error.message);
        })
    }
};

/* Logs user in fireauth */
class AuthLogin {
    constructor(email, password){
        this.email = email,
        this.password = password
    }
    init(){
        auth.signInWithEmailAndPassword(this.email, this.password)
        .then(cred => {
            if(cred !== null){
                alert("Pomyślnie zalogowano!")
            }
        })
        .catch((error) => {
            alert(error.message);
        })
    }
};


/* Exports */
export {AuthRegister, AuthLogin};