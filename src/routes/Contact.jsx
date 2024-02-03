import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export default function Contact(){

    const sendMail = async() => {
        var nom = document.getElementById('nom').value;
        var prenom = document.getElementById('prenom').value;
        var mail = document.getElementById('mail').value;
        var objet = document.getElementById('objet').value;
        var message = document.getElementById('message').value;

        try{
            const json={
                nomUtilisateur:nom,
                prenomUtilisateur:prenom,
                adresseMailUtilisateur:mail,
                objetMail:objet,
                messageMail:message
            }
            console.log(json)
            const response = await fetch('http://localhost:3000/mail', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(json)
            })

            if(response.ok){
                console.log("ok")
            } else {
                const errorMessage = await response.json()
                console.log(errorMessage)
            }
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div>
            <Navbar></Navbar>
                <div className="cellDefault">
                <div className="form-item">
                        <label htmlFor='nom'>Nom</label>
                        <input
                            id='nom'
                            type='text'
                            placeholder='Votre nom'
                            className="input-text">
                        </input>
                    </div>
                    <div className="form-item">
                        <label htmlFor='prenom'>Prénom</label>
                        <input
                            id='prenom'
                            type='text'
                            placeholder='Votre prénom'
                            className="input-text">
                        </input>
                    </div>
                    <div className="form-item">
                        <label htmlFor='mail'>Adresse mail</label>
                        <input
                            id='mail'
                            type='mail'
                            placeholder='Votre adresse mail'
                            className="input-text">
                        </input>
                    </div>
                    <div className="form-item">
                        <label htmlFor='objet'>Objet</label>
                        <input
                            id='objet'
                            type='text'
                            placeholder="L'objet du mail"
                            className="input-text">
                        </input>
                    </div>
                    <div className="form-item">
                        <label htmlFor='message'>Message</label>
                        <textarea
                            id='message'
                            type='text'
                            placeholder="Votre message"
                            className="input-text-large">
                        </textarea>
                    </div>
                    <button className="button-default" id="valier" onClick={sendMail}>Envoyer</button>
                </div>
                
            <Footer></Footer>
        </div>
    )

    
}