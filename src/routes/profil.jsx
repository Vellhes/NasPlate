import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"

export default function Profil(){
    console.log("aaa",localStorage.getItem("AUTH_TOKEN"))
    return(
        <div>
            <Navbar></Navbar>
            <div className="body-backOffice">
                <div className="cellDefault">
                    <div className="form-item">
                        <label for='AdresseMail'>Adresse mail</label>
                        <input id='AdresseMail' type='email' placeholder='Votre identifiant' className="input-text"></input>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}