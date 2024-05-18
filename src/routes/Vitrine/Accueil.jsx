import { Link } from "react-router-dom"
import Footer from "../../components/vitrine/footer"
import Navbar from "../../components/vitrine/navbar"
import logo from "../../img/nasplate.png"

export default function Accueil(){

    return(
        <div>
            <Navbar/>
            <div className="container accueil-1st-block"></div>
                <div className="title">
                    <div id="logoTitle">
                        <img src={logo} alt="logo" className="logoTitle"/>
                    </div>
                    <div className="sloganTitle">
                        <h1>
                            All your nas in one hand
                        </h1>
                    </div>
                    
                    <div>
                        <p>Retrouver l'ensemble de vos NAS en une plateforme.</p>
                        <br/>
                        <Link className="btnWhite" to='/Le-Projet'>
                            En savoir plus
                        </Link>
                    </div>
                </div>
            
            <Footer/>
        </div>
    )
}