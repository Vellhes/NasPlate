//import './temp.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Card from './components/card/Card';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <Card
        title="Nom du NAS"
        text="Est-ce qu'on peut pas allé se faire foutre un peu là ?"
        imgSrc="https://via.placeholder.com/150"
        links={[
          { url: '#', text: 'Se connecter' },
        ]}
      />
      <Footer></Footer>
    </div>
  );
}

export default App;