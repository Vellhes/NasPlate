import './profilMenu.css';
import { Link } from "react-router-dom";

export default function ProfilMenu(){
    return(
        <div className="profilMenu">
        
        <div>
            <Link to="/Profil">Profil</Link>
        </div>
        <div>
            <Link to="/MonIntervenant">Intervenant</Link>
        </div>
    </div>
    )
    
}