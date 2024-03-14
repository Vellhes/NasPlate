import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import ProfilMenu from "../../components/profilMenu/profilMenu"

export default function Profil(){
    console.log("aaa",localStorage.getItem("AUTH_TOKEN"))
    return(
        <div>
            <Navbar></Navbar>
                <div class="flexProfil">
                    <ProfilMenu></ProfilMenu>
                    <div className="profilBody">
                        <p>Vos informations</p>
                        <hr></hr>
                        <label>Nom</label>
                        <input type="text" className="input-text" id="nom"></input>
                        <label>Prénom</label>
                        <input type="text" className="input-text" id="prenom"></input>
                        <label>Mail</label>
                        <input type="text" className="input-text" id="mail"></input>
                        <br/>
                        <button className="button-default-auto">Enregistrer</button>
                        <p>Changer votre mot de passe</p>
                        <hr></hr>
                        <label>Mot de passe actuel</label>
                        <input type="password" className="input-text" id="actualpwd"></input>
                        <label>Nouveau mot de passe</label>
                        <input type="password" className="input-text" id="newpwd"></input>
                        <label>Valider le mot de passe</label>
                        <input type="password" className="input-text" id="validatepwd"></input>
                        <br/>
                        <button className="button-default-auto">Enregistrer</button>
                    </div>
                </div>
            <Footer></Footer>
        </div>
    )
}