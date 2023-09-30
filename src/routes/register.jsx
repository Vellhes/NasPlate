import logo from '../img/nasplate.png';
export default function Register(){
    return(
        <div id="body-form-register">
            <div id="register">
                <div id="register-form">
                    <div className="two-columns">
                        <div className="form-item">
                            <label for='prenom'>Nom</label>
                            <input id='prenom' type='text' placeholder='Votre nom' className="input-text"></input>
                        </div>
                        <div className="form-item">
                            <label for='prenom'>Prénom</label>
                            <input id='prenom' type='text' placeholder='Votre prénom' className="input-text"></input>
                        </div>
                    </div>
                    <div className="form-item">
                        <label for='mail'>Adresse mail</label>
                        <input id='mail' type='email' placeholder='Votre adresse mail' className="input-text"></input>
                    </div>
                    <div className="form-item">
                        <label for='password'>Mot de passe</label>
                        <input id='password' type='password' placeholder='Votre adresse mail' className="input-text"></input>
                    </div>
                    <div className="form-item">
                        <label for='validatePassword'>Valider le mot de passe</label>
                        <input id='validatePassword' type='password' placeholder='Votre adresse mail' className="input-text"></input>
                    </div>
                    <div className="form-item">
                        <button className="button-default" id="btn-inscription">Valider l'inscription</button>
                    </div>
                </div>
                <div id="register-side">
                    <div id="div-logo">
                        <img src={logo} alt="logo" id="logo-register" /><br/>
                    </div>
                    <h2>
                        NasPlate - Inscription
                    </h2>
                </div>
            </div>
        </div>
    )
}