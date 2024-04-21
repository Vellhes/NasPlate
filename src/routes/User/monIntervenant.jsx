import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import ProfilMenu from "../../components/profilMenu/profilMenu"

export default function MonIntervant(){
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

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}