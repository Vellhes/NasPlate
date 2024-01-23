import { useState } from 'react';
import logo from '../img/nasplate.png';
import { Link } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';


export default function Register() {
    const [lastName, setLastName] = useState('DUSSAUSSOIS');
    const handleLastName = (e) => {
        setLastName(e.target.value);
    };

    const [firstName, setFirstName] = useState('Tom');
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const [email, setEmail] = useState('tom.dussaussois@outlook.fr');
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const [password, setPassword] = useState('test56789');
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const [confirmPassword, setConfirmPassword] = useState('test5678945');
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };
    const [error, setError] = useState();
    // const [loading, setLoading] = useState();

    const handleRegister = async () => {
        try {
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ lastName, firstName, email, password, confirmPassword })
            })

            if (response.ok) {
                // Register successfull

            } else {
                // Error register
                const errorMessage = await response.json();
                setError(errorMessage.message);
            }
        } catch (error) {
            console.log("Erreur lors de l'inscription:", error);
            setError("Erreur d'inscription");
        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <div id="body-form-register">
                <div id="register">
                    <div id="register-form">
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <div className="two-columns">
                            <div className="form-item">
                                <label htmlFor='prenom'>Nom</label>
                                <input
                                    id='nom'
                                    type='text'
                                    placeholder='Votre nom'
                                    className="input-text"
                                    valueLastName={lastName}
                                    onChange={handleLastName}>
                                </input>
                            </div>
                            <div className="form-item">
                                <label htmlFor='prenom'>Prénom</label>
                                <input
                                    id='prenom'
                                    type='text'
                                    placeholder='Votre prénom'
                                    className="input-text"
                                    valueFirstName={firstName}
                                    onChange={handleFirstName}/>
    
                            </div>
                        </div>
                        <div className="form-item">
                            <label htmlFor='mail'>Adresse mail</label>
                            <input
                                id='mail'
                                type='email'
                                placeholder='Votre adresse mail'
                                className="input-text"
                                valueEmail={email}
                                onChange={handleEmail}>
                            </input>
                        </div>
                        <div className="form-item">
                            <label htmlFor='password'>Mot de passe</label>
                            <input
                                id='password'
                                type='password'
                                placeholder='Votre mot de passe'
                                className="input-text"
                                valuePassword={password}
                                onChange={handlePassword}>
                            </input>
                        </div>
                        <div className="form-item">
                            <label htmlFor='validatePassword'>Valider le mot de passe</label>
                            <input
                                id='validatePassword'
                                type='password'
                                placeholder='Votre mot de passe'
                                className="input-text"
                                valueConfirmPassword={confirmPassword}
                                onChange={handleConfirmPassword}>
                            </input>
                        </div>
                        <div className="form-item">
                            <button
                                className="button-default"
                                id="btn-inscription"
                                onClick={handleRegister}>Valider l'inscription
                            </button>
                        </div>
                        <div className='form-item'>
                            <Link to="/login">
                                Connectez-vous
                            </Link>
                        </div>
                    </div>
                    <div id="register-side">
                        <div id="div-logo">
                            <img src={logo} alt="logo" id="logo-register" /><br />
                        </div>
                        <h2>
                            NasPlate - Inscription
                        </h2>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}