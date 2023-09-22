import logo from '../img/nasplate.png';
import {Link} from "react-router-dom";
export default function Login(){
    return(
        <div id="body-form-register">
            <div id="login">
                <div id="login-form" >
                    <img src={logo} alt="logo" id="logo-login" /><br/>
                    <label for='identifiant'>Identifiant</label>
                    <input id='identifiant' type='text' placeholder='Votre identifiant' className="input-text"></input>
                    <br/>
                    <br/>
                    <label for='password'>Mot de passe</label>
                    <input id='password' type='password' placeholder='Votre mot de passe' className="input-text"></input>
                    <button className="button-default" id="btn-connexion">Se connecter</button>
                    <Link to="/register">
                        Inscrivez-vous
                    </Link>
                </div>
                <div id="login-side">
                    <h2>Bienvenue dans votre espace NasPlate</h2>
                    <p id="login-side-text">Depuis votre espace en ligne NasPlate<br/>
                    - Gérez vos différents NAS<br/>
                    - Option 2<br/>
                    - Option 3
                    </p>
                </div>
            </div>
        </div>
    )
}