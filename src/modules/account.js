class AccountModal {
    constructor(uid, accountModalTarget){
        this.uid = uid;
        this.accountModalTarget = accountModalTarget
    }
    init(){
        db.collection("users").where('uid', '==', this.uid).get().then((snapshot) => {
            snapshot.docs.forEach(doc =>{
                /* Data format */
                const when = dateFns.distanceInWordsToNow(
                    doc.data().created.toDate(),
                    { includeSeconds: true }
                )

                this.accountModalTarget.innerHTML = 
                `
                <div class="modal-content">
                    <div class="row">
                        <h4 class="col s12 center-align orange-text text-accent-4">Informacje o koncie</h4>
                    </div>
                    <div class="row">
                        <div class="col s12 center-align">
                            <h5 class="orange-text text-accent-4">Nazwa użytkownika</h5>
                            <h6>${doc.data().username}</h6>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 center-align">
                            <h5 class="orange-text text-accent-4">Ilość wiadomości</h5>
                            <h6>${doc.data().messages}</h6>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 center-align">
                            <h5 class="orange-text text-accent-4">Konto utworzono</h5>
                            <h6>${when} ago</h6>
                        </div>
                    </div>
                </div>
                `
            })
        })
    }
}

export default AccountModal;