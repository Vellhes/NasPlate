
export default function Profil(){
    console.log("aaa",localStorage.getItem("AUTH_TOKEN"))
    return(
        <div className="body-backOffice">
            <div className="cellDefault">
                <div className="form-item">
                <label for='AdresseMail'>Adresse mail</label>
                        <input id='AdresseMail' type='email' placeholder='Votre identifiant' className="input-text"></input>
                </div>
            </div>
        </div>
    )
}