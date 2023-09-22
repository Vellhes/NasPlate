import './App.css';

function App() {
  return (
    // div for the background image
    <div className="background_image">
      <div className="background_login">
        <div className="login_input">
          <label for='identifiant'>Identifiant</label>
          <input id='identifiant' type='text' placeholder='Votre identifiant'></input>
          <label for='password'>Mot de passe</label>
          <input id='password' type='password' placeholder='Votre mot de passe'></input>
          {/* l'input n'a pas envie de se mettre, j'ai une erreur comme quoi le type radio a besoin d'un enfant
          <input type='radio' name='souvenir'>Se souvenir de moi
            <label>Se souvenir de moi</label>
          </input> */}
          <a href='gfdhjg'>Mot de passe oublié</a>
          <button className='login_button'>Se connecter</button>
        </div>
        <div className="login_information">

        </div>
      </div>
    </div>
  );
}

export default App;