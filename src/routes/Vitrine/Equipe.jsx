import { Link } from "react-router-dom"
import Footer from "../../components/vitrine/footer"
import Navbar from "../../components/vitrine/navbar"
import TeamIMG from "../../img/Sept-9-Benefits-of-Group-Work_web.jpg"
import BastienIMG from "../../img/bastien.png"
import MaloIMG from "../../img/malo.png"
import DylanIMG from "../../img/dylan.png"
import DussIMG from "../../img/duss.png"
import ClementIMG from "../../img/clement.png"

export default function Equipe(){
    return(
        <div>
            <Navbar/>
                <div className="container-auto">
                    <div className="projet-header">
                        <h1>
                            Découvrez notre équipe
                        </h1>
                    </div>
                </div>
                <div className="div-separator-blue">
                    <hr className="projet-separator"/>
                </div>

                <div className="container-auto bloc-equipe">
                    <div className="title-h2">
                        <h2>Qui sommes-nous ?</h2>
                    </div>
                    <div className="flex-column-35 vertical-align flex-justify-center">
                        <img src={TeamIMG} alt="équipe" className="image-auto-fit"/>
                    </div>
                    <div className="flex-column-60">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in purus semper ligula facilisis interdum. Donec interdum leo at lacinia finibus. Donec sit amet sapien nec lacus suscipit imperdiet quis quis augue. Ut sed lectus ac dui condimentum efficitur non ut augue. Fusce egestas nulla iaculis porta dapibus. Aenean ac odio elit. Nam sed maximus arcu. Morbi efficitur ex erat, id mattis ipsum dictum nec. Donec in scelerisque mauris, nec dignissim justo. Vivamus sodales nisl consectetur ante elementum tempor. Nam ultrices consequat magna quis pretium. Maecenas nibh turpis, porttitor in urna non, ullamcorper tincidunt tortor. Aenean non mauris at augue mollis venenatis sed quis metus. Curabitur iaculis leo ornare pharetra tristique. Fusce mauris nisl, suscipit id posuere ut, fringilla rhoncus odio.
                        </p>
                        <p>
                        In faucibus augue ut facilisis scelerisque. Sed euismod odio accumsan augue semper feugiat. Proin vitae turpis ligula. Duis nisl massa, cursus eget placerat at, dignissim vel arcu. Nullam cursus ex vel ipsum sodales pulvinar. Nam fermentum nunc velit, quis aliquet arcu finibus eget. Vestibulum sit amet vulputate enim. Vivamus euismod tristique tortor. Maecenas congue eros et eros aliquet mattis. Curabitur ultrices metus elit, vel varius quam laoreet a. Donec lobortis tincidunt nunc, vitae hendrerit libero dictum eget. Proin auctor leo ut est consequat, a vestibulum lectus vehicula. Nunc id maximus nulla.
                        </p>
                        <br/>
                    </div>
                </div>

                <div className="container-auto">
                    <div className="equipe-membre" id="bloc-bastien">
                        <div className="flex-column-20 vertical-align flex-justify-center">
                            <img src={BastienIMG} alt="bastien" className="image-auto-fit"/>
                        </div>
                        <div className="flex-column-80 vertical-align">
                            <div>
                            <h3>Bastien COLLIGNON</h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec in purus semper ligula facilisis interdum. 
                            Donec interdum leo at lacinia finibus. 
                            Donec sit amet sapien nec lacus suscipit imperdiet quis quis augue. 
                            Ut sed lectus ac dui condimentum efficitur non ut augue. 
                            Fusce egestas nulla iaculis porta dapibus. Aenean ac odio elit. 
                            Nam sed maximus arcu. Morbi efficitur ex erat, id mattis ipsum dictum nec. 
                            Donec in scelerisque mauris, nec dignissim justo. 
                            Vivamus sodales nisl consectetur ante elementum tempor. 
                            Nam ultrices consequat magna quis pretium. Maecenas nibh turpis, porttitor in urna non, ullamcorper tincidunt tortor. 
                            Aenean non mauris at augue mollis venenatis sed quis metus. 
                            Curabitur iaculis leo ornare pharetra tristique. 
                            Fusce mauris nisl, suscipit id posuere ut, fringilla rhoncus odio.
                            </div>
                        </div>
                    </div>
                    <div className="equipe-membre" id="bloc-malo">
                        <div className="flex-column-80 vertical-align">
                            <div className="align-left">
                            <h3>Malo BEHR</h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec in purus semper ligula facilisis interdum. 
                            Donec interdum leo at lacinia finibus. 
                            Donec sit amet sapien nec lacus suscipit imperdiet quis quis augue. 
                            Ut sed lectus ac dui condimentum efficitur non ut augue. 
                            Fusce egestas nulla iaculis porta dapibus. Aenean ac odio elit. 
                            Nam sed maximus arcu. Morbi efficitur ex erat, id mattis ipsum dictum nec. 
                            Donec in scelerisque mauris, nec dignissim justo. 
                            Vivamus sodales nisl consectetur ante elementum tempor. 
                            Nam ultrices consequat magna quis pretium. Maecenas nibh turpis, porttitor in urna non, ullamcorper tincidunt tortor. 
                            Aenean non mauris at augue mollis venenatis sed quis metus. 
                            Curabitur iaculis leo ornare pharetra tristique. 
                            Fusce mauris nisl, suscipit id posuere ut, fringilla rhoncus odio.
                            </div>
                        </div>
                        <div className="flex-column-20 vertical-align flex-justify-center">
                            <img src={MaloIMG} alt="malo" className="image-auto-fit"/>
                        </div>  
                    </div>
                    <div className="equipe-membre" id="bloc-dylan">
                        <div className="flex-column-20 vertical-align flex-justify-center">
                            <img src={DylanIMG} alt="dylan" className="image-auto-fit"/>
                        </div>
                        <div className="flex-column-80 vertical-align">
                            <div>
                            <h3>Dylan SCHMIDT</h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec in purus semper ligula facilisis interdum. 
                            Donec interdum leo at lacinia finibus. 
                            Donec sit amet sapien nec lacus suscipit imperdiet quis quis augue. 
                            Ut sed lectus ac dui condimentum efficitur non ut augue. 
                            Fusce egestas nulla iaculis porta dapibus. Aenean ac odio elit. 
                            Nam sed maximus arcu. Morbi efficitur ex erat, id mattis ipsum dictum nec. 
                            Donec in scelerisque mauris, nec dignissim justo. 
                            Vivamus sodales nisl consectetur ante elementum tempor. 
                            Nam ultrices consequat magna quis pretium. Maecenas nibh turpis, porttitor in urna non, ullamcorper tincidunt tortor. 
                            Aenean non mauris at augue mollis venenatis sed quis metus. 
                            Curabitur iaculis leo ornare pharetra tristique. 
                            Fusce mauris nisl, suscipit id posuere ut, fringilla rhoncus odio.
                            </div>
                        </div>
                    </div>
                    <div className="equipe-membre" id="bloc-tom">
                    <div className="flex-column-80 vertical-align">
                        <div className="align-left">
                            <h3>Tom DUSSAUSSOIS</h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec in purus semper ligula facilisis interdum. 
                            Donec interdum leo at lacinia finibus. 
                            Donec sit amet sapien nec lacus suscipit imperdiet quis quis augue. 
                            Ut sed lectus ac dui condimentum efficitur non ut augue. 
                            Fusce egestas nulla iaculis porta dapibus. Aenean ac odio elit. 
                            Nam sed maximus arcu. Morbi efficitur ex erat, id mattis ipsum dictum nec. 
                            Donec in scelerisque mauris, nec dignissim justo. 
                            Vivamus sodales nisl consectetur ante elementum tempor. 
                            Nam ultrices consequat magna quis pretium. Maecenas nibh turpis, porttitor in urna non, ullamcorper tincidunt tortor. 
                            Aenean non mauris at augue mollis venenatis sed quis metus. 
                            Curabitur iaculis leo ornare pharetra tristique. 
                            Fusce mauris nisl, suscipit id posuere ut, fringilla rhoncus odio.
                            </div>
                        </div>
                        <div className="flex-column-20 vertical-align flex-justify-center">
                            <img src={DussIMG} alt="tom" className="image-auto-fit"/>
                        </div> 
                    </div>
                    <div className="equipe-membre" id="bloc-clement">
                        <div className="flex-column-20 vertical-align flex-justify-center">
                            <img src={ClementIMG} alt="clement" className="image-auto-fit"/>
                        </div>
                        <div className="flex-column-80 vertical-align">
                            <div>
                            <h3>Clément ZINGRAFF</h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec in purus semper ligula facilisis interdum. 
                            Donec interdum leo at lacinia finibus. 
                            Donec sit amet sapien nec lacus suscipit imperdiet quis quis augue. 
                            Ut sed lectus ac dui condimentum efficitur non ut augue. 
                            Fusce egestas nulla iaculis porta dapibus. Aenean ac odio elit. 
                            Nam sed maximus arcu. Morbi efficitur ex erat, id mattis ipsum dictum nec. 
                            Donec in scelerisque mauris, nec dignissim justo. 
                            Vivamus sodales nisl consectetur ante elementum tempor. 
                            Nam ultrices consequat magna quis pretium. Maecenas nibh turpis, porttitor in urna non, ullamcorper tincidunt tortor. 
                            Aenean non mauris at augue mollis venenatis sed quis metus. 
                            Curabitur iaculis leo ornare pharetra tristique. 
                            Fusce mauris nisl, suscipit id posuere ut, fringilla rhoncus odio.
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}