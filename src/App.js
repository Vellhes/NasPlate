//import './temp.css';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Card from "./components/card/Card";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const idNas = 4;
  return (
    <div className="App">
      <Navbar></Navbar>
      <Link to={`/DetailNas?idNas=${idNas}`}>DETAIL NAS</Link>
      <Card
        title="Nom du NAS"
        text="Est-ce qu'on peut pas allé se faire foutre un peu là ?"
        imgSrc="https://via.placeholder.com/150"
        linksConnection={[{ url: "#", text: "Se connecter" }]}
        linksDetail={[{ id: "#"}]}
      />
      <Footer></Footer>
    </div>
  );
}

export default App;
