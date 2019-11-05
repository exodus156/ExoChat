class Message {
    constructor(uid, text){
        this.uid = uid;
        this.text = text;
    }
    init(){
        const now = new Date();
        db.collection("users").where('uid', '==', this.uid).get() //get exact user data
            .then((snapshot) => {
              snapshot.docs.forEach(doc =>{
                
                let username = doc.data().username; //username
                
                const messagesCounter = doc.data().messages + 1;
                db.collection("users").doc(this.uid).update({
                    messages: messagesCounter
                })

                const message = { //message object
                    username: username,
                    text: this.text,
                    created_at: firebase.firestore.Timestamp.fromDate(now)
                }
                
                db.collection("chatroom").add(message);
              })
            })
        
    }
}

export default Message;