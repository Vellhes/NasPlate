import logo from '../img/nasplate.png';
export default function Register(){
    return(
        <div id="body-form-register">
            <div id="register">
                <div id="register-form">
                    <div id="div-logo">
                        <img src={logo} alt="logo" id="logo-register" /><br/>
                    </div>
                    <div className="flex-rows">
                        <div className="col-50">
                            <label for='prenom'>Nom</label>
                            <input id='prenom' type='text' placeholder='Votre identifiant' className="input-text"></input>
                        </div>
                        <div className="col-50">
                            <label for='prenom'>Nom</label>
                            <input id='prenom' type='text' placeholder='Votre identifiant' className="input-text"></input>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}