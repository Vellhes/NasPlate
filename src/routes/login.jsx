import { useState } from 'react';
import logo from '../img/nasplate.png';
import { Link } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export default function Login() {
    const [email, setEmail] = useState('');
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const [password, setPassword] = useState('test56789');
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const [error, setError] = useState();
    // const [loading, setLoading] = useState();

    const handleLogin = async () => {
        try {
            const json = { 
                mail:email,
                password: password
            }
            const response = await fetch('http://localhost:3000/users/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(json)
            })

            if (response.ok) {
                // Connection successfull
                // Récupération du token JWT de node pour pouvoir faire 
                const token = await response.text(); // Convertir le contenu en texte
                localStorage.setItem("AUTH_TOKEN", token);
            } else {
                // Error connection
                const errorMessage = await response.json();
                setError(errorMessage.message)
            }
        } catch (error) {
            console.log('Erreur lors de la connexion : ', error);
            setError('Erreur lors de la connexion');
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div id="body-form-register">
                <div id="login">
                    <div id="login-form" >
                        <img src={logo} alt="logo" id="logo-login" /><br />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <div className='form-item'>
                            <label htmlFor='identifiant'>Identifiant</label>
                            <input
                                id='identifiant'
                                type='text'
                                placeholder='Votre identifiant'
                                className="input-text"
                                valueEmail={email} //Erreur du DOM dans la console
                                onChange={handleEmail}>
                            </input>
                        </div>
                        <div className='form-item'>
                            <label htmlFor='password'>Mot de passe</label>
                            <input
                                id='password'
                                type='password'
                                placeholder='Votre mot de passe'
                                className="input-text"
                                valuePassword={password} //Erreur du DOM dans la console
                                onChange={handlePassword}>
                            </input>
                        </div>
                        <div className='form-item'>
                            <button
                                className="button-default"
                                id="btn-connexion"
                                onClick={handleLogin}>Se connecter</button>
                        </div>
                        <div className='form-item'>
                            <Link to="/register">
                                Inscrivez-vous
                            </Link>
                        </div>
                    </div>
                    <div id="login-side">
                        <h2>Bienvenue dans votre espace NasPlate</h2>
                        <p id="login-side-text">Depuis votre espace en ligne NasPlate<br />
                            - Gérez vos différents NAS<br />
                            - Option 2<br />
                            - Option 3
                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}