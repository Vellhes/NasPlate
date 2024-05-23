import { useState } from 'react';

import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import ProfilMenu from "../../components/profilMenu/profilMenu"

export default function MonIntervant(){
    const [idIntervenant, setIdIntervenant] = useState([]);

    const getUserInformations= async() => {
        try{
            await fetch('http://localhost:3000/users/informations', {
                method: 'GET',
                headers:{
                    'Content-type': 'application/json',
                    'Authorization':localStorage.getItem("AUTH_TOKEN")
                }
            })
            .then(response => {
                if(!response.ok){
                    throw new Error("Erreur de réponse du serveur")
                }
                return response.json()
            })
            .then(userInformations => {
                setIdIntervenant(userInformations.message)
                console.log(userInformations.message)
            })
            .catch(error => console.error("Erreur lors du fetch", error))
        }catch(err){
            console.log(err)
        }
    }
    getUserInformations();
    return(
        <div>
            <Navbar></Navbar>
            <div class="flexProfil">
                <ProfilMenu></ProfilMenu>
                <div className="profilBody">
                    {/*TODO : 
                        - Mettre le champ qui permet d'ajouter l'intervenant
                        - Si il y'en a déjà un, afficher ses informations
                    */}
                    
                    <p>Votre intervenant</p>
                    <hr></hr>
                    
                    {/*Si pas intervenant*/}
                    <p style={{color : '#ff0000'}}>Vous n'avez aucun intervenant pour le moment</p>
                    <label>Mail intervenant</label>
                    <input type="email" className="input-text" id="mail"></input>

                    {/*Si intervenant*/}
                    <p>{idIntervenant}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}