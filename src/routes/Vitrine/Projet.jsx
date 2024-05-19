import { Link } from "react-router-dom"
import Footer from "../../components/vitrine/footer"
import Navbar from "../../components/vitrine/navbar"
import teamIMG from "../../img/Sept-9-Benefits-of-Group-Work_web.jpg"
import NasManagementIMG from "../../img/NasManagement.png"
import HelpingIMG from "../../img/Volunteer-640w.jpg"


export default function Projet(){
    return(
        <div>
            <Navbar/>
            <div className="projet-header">
                <h1>
                    Le projet
                </h1>
            </div>
            <div className="div-separator-blue">
                <hr className="projet-separator"/>
            </div>
            
            <div className="container-auto projet-histoire">
                <div className="title-h2">
                    <h2>L'histoire du projet</h2>
                </div>
                <div className="flex-column-60">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in purus semper ligula facilisis interdum. Donec interdum leo at lacinia finibus. Donec sit amet sapien nec lacus suscipit imperdiet quis quis augue. Ut sed lectus ac dui condimentum efficitur non ut augue. Fusce egestas nulla iaculis porta dapibus. Aenean ac odio elit. Nam sed maximus arcu. Morbi efficitur ex erat, id mattis ipsum dictum nec. Donec in scelerisque mauris, nec dignissim justo. Vivamus sodales nisl consectetur ante elementum tempor. Nam ultrices consequat magna quis pretium. Maecenas nibh turpis, porttitor in urna non, ullamcorper tincidunt tortor. Aenean non mauris at augue mollis venenatis sed quis metus. Curabitur iaculis leo ornare pharetra tristique. Fusce mauris nisl, suscipit id posuere ut, fringilla rhoncus odio.
                    </p>
                    <p>
                    In faucibus augue ut facilisis scelerisque. Sed euismod odio accumsan augue semper feugiat. Proin vitae turpis ligula. Duis nisl massa, cursus eget placerat at, dignissim vel arcu. Nullam cursus ex vel ipsum sodales pulvinar. Nam fermentum nunc velit, quis aliquet arcu finibus eget. Vestibulum sit amet vulputate enim. Vivamus euismod tristique tortor. Maecenas congue eros et eros aliquet mattis. Curabitur ultrices metus elit, vel varius quam laoreet a. Donec lobortis tincidunt nunc, vitae hendrerit libero dictum eget. Proin auctor leo ut est consequat, a vestibulum lectus vehicula. Nunc id maximus nulla.
                    </p>
                    <br/>
                    <div className="item-horizontal-center">
                        <Link to="/Equipe" className="btnWhite">
                            Découvrir notre équipe
                        </Link> 
                    </div>
                    
                </div>
                <div className="flex-column-35 vertical-align flex-justify-center">
                    <img src={teamIMG} alt="équipe" className="image-auto-fit"/>
                </div>
            </div>

            <div className="container-auto projet-concept">
                <div className="title-h2">
                    <h2>Le principe du projet</h2>
                </div>
                <div className="flex-column-35 vertical-align flex-justify-center">
                    <img src={NasManagementIMG} alt="équipe" className="image-auto-fit"/>
                </div>
                <div className="flex-column-60">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in purus semper ligula facilisis interdum. Donec interdum leo at lacinia finibus. Donec sit amet sapien nec lacus suscipit imperdiet quis quis augue. Ut sed lectus ac dui condimentum efficitur non ut augue. Fusce egestas nulla iaculis porta dapibus. Aenean ac odio elit. Nam sed maximus arcu. Morbi efficitur ex erat, id mattis ipsum dictum nec. Donec in scelerisque mauris, nec dignissim justo. Vivamus sodales nisl consectetur ante elementum tempor. Nam ultrices consequat magna quis pretium. Maecenas nibh turpis, porttitor in urna non, ullamcorper tincidunt tortor. Aenean non mauris at augue mollis venenatis sed quis metus. Curabitur iaculis leo ornare pharetra tristique. Fusce mauris nisl, suscipit id posuere ut, fringilla rhoncus odio.
                    </p>
                    <p>
                    In faucibus augue ut facilisis scelerisque. Sed euismod odio accumsan augue semper feugiat. Proin vitae turpis ligula. Duis nisl massa, cursus eget placerat at, dignissim vel arcu. Nullam cursus ex vel ipsum sodales pulvinar. Nam fermentum nunc velit, quis aliquet arcu finibus eget. Vestibulum sit amet vulputate enim. Vivamus euismod tristique tortor. Maecenas congue eros et eros aliquet mattis. Curabitur ultrices metus elit, vel varius quam laoreet a. Donec lobortis tincidunt nunc, vitae hendrerit libero dictum eget. Proin auctor leo ut est consequat, a vestibulum lectus vehicula. Nunc id maximus nulla.
                    </p>
                    <br/>
                    <div className="item-horizontal-center">
                        <Link className="btnBlue">
                            Voir nos tarifs
                        </Link> 
                    </div>
                </div>
                
            </div>

            <div className="container-auto projet-envie">
            <div className="title-h2">
                    <h2>Une envie d'aider</h2>
                </div>
                <div className="flex-column-60">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in purus semper ligula facilisis interdum. Donec interdum leo at lacinia finibus. Donec sit amet sapien nec lacus suscipit imperdiet quis quis augue. Ut sed lectus ac dui condimentum efficitur non ut augue. Fusce egestas nulla iaculis porta dapibus. Aenean ac odio elit. Nam sed maximus arcu. Morbi efficitur ex erat, id mattis ipsum dictum nec. Donec in scelerisque mauris, nec dignissim justo. Vivamus sodales nisl consectetur ante elementum tempor. Nam ultrices consequat magna quis pretium. Maecenas nibh turpis, porttitor in urna non, ullamcorper tincidunt tortor. Aenean non mauris at augue mollis venenatis sed quis metus. Curabitur iaculis leo ornare pharetra tristique. Fusce mauris nisl, suscipit id posuere ut, fringilla rhoncus odio.
                    </p>
                    <p>
                    In faucibus augue ut facilisis scelerisque. Sed euismod odio accumsan augue semper feugiat. Proin vitae turpis ligula. Duis nisl massa, cursus eget placerat at, dignissim vel arcu. Nullam cursus ex vel ipsum sodales pulvinar. Nam fermentum nunc velit, quis aliquet arcu finibus eget. Vestibulum sit amet vulputate enim. Vivamus euismod tristique tortor. Maecenas congue eros et eros aliquet mattis. Curabitur ultrices metus elit, vel varius quam laoreet a. Donec lobortis tincidunt nunc, vitae hendrerit libero dictum eget. Proin auctor leo ut est consequat, a vestibulum lectus vehicula. Nunc id maximus nulla.
                    </p>
                    <br/>
                    <div className="item-horizontal-center">
                        <Link className="btnWhite">
                            Nous contacter
                        </Link> 
                    </div>
                    
                </div>
                <div className="flex-column-35 vertical-align flex-justify-center">
                    <img src={HelpingIMG} alt="équipe" className="image-auto-fit"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}