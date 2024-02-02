import { useState } from 'react';
import Modal from 'react-modal';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Card from '../../components/card/Card';

export default function ListNas() {

    function ValidateButton({CreateNas}){
        return(
            <div className="form-item">
                <button id='valider' className="button-default" onClick={CreateNas}>Valider</button>
            </div>
        )
    }

    function CreateNas(){
        var adresseReseau = document.getElementById('adresseReseau').value;
        var masqueReseau = document.getElementById('masqueReseau').value;
        var gateway = document.getElementById('gateway').value;
        var nomSociete = document.getElementById('nomSociete').value;
        var nomService = document.getElementById('nomService').value;
        var pays = document.getElementById('pays').value;
        const regex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/g;
        if(adresseReseau === "" || masqueReseau === "" || gateway === "" || nomSociete === "" || nomService === "" || pays === ""){
            alert("Veuillez remplir tous les champs");
        }else{
            if(adresseReseau.match(regex)!= null){
                if(masqueReseau.match(regex) != null){
                    if(gateway.match(regex)!= null){
                        //On créé la chaine contenant le JSON
                        var jsonString = {
                            "adresseReseau" : adresseReseau,
                            "masqueReseau" : masqueReseau,
                            "gateway" : gateway,
                            "societe" : nomSociete,
                            "service" : nomService,
                            "pays" : pays
                        }
                    } else {
                        alert("Votre masque de sous-réseau ne correspond pas au format attendu 'XXX.XXX.XXX.XXX'");
                    }
                }else {
                    alert("Votre masque de sous-réseau ne correspond pas au format attendu 'XXX.XXX.XXX.XXX'");
                }
            }else {
                alert("Votre adresse réseau ne correspond pas au format attendu 'XXX.XXX.XXX.XXX'")
            }
        }
        

    }

    const [listNas, setListNas] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleListNas = async () => {
        try {
            await fetch('http://localhost:3000/nas', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization' : localStorage.getItem("AUTH_TOKEN")
                },
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erreur de réponse du serveur")
                }
                return response.json()
            })
            .then(dataNas => {
                setListNas(dataNas.data);
            })
            .catch(error => console.error("Erreur lors du fetch"))
        } catch (error) {
            console.log('Erreur lors de la connexion : ', error);
        }
    }

    return (
        <div>
            <Navbar />
            <div className=''>
                <button onClick={handleListNas}>
                    Je suis le boutton de test
                </button>
                Liste des NAS
                <button onClick={openModal}>Ouvrir la popup</button>
                {listNas.map(nasItem => (
                    <Card 
                        key={nasItem.idNas} 
                        title={nasItem.nomNas}
                        text={nasItem.description}
                        imgSrc="https://via.placeholder.com/250"
                        links={[
                            { url: '#', text: 'Se connecter' },
                        ]}
                    />
                ))}
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                <div className="body-backOffice">
                    <div className="cellDefault">
                        <h2 className="title-modal">Ajouter votre NAS</h2>
                        <div className="form-item">
                            <label >Adresse réseau</label>
                            <input id='adresseReseau' placeholder='xxx.xxx.xxx.xxx' className="input-text"></input>
                        </div>

                        <div className="form-item">
                            <label >Masque de sous-réseau</label>
                            <input id='masqueReseau' placeholder='xxx.xxx.xxx.xxx' className="input-text"></input>
                        </div>

                        <div className="form-item">
                            <label >Gateway</label>
                            <input id='gateway' placeholder='xxx.xxx.xxx.xxx' className="input-text"></input>
                        </div>

                        <div className="form-item">
                            <label >Nom de la société</label>
                            <input id='nomSociete' placeholder='Nom de la société' className="input-text"></input>
                        </div>

                        <div className="form-item">
                            <label >Nom du service</label>
                            <input id='nomService' placeholder='Nom du service' className="input-text"></input>
                        </div>

                        <div className="form-item">
                            <label >Pays</label>
                            <input id='pays' placeholder='Pays' className="input-text"></input>
                        </div>

                        <div className="button-modal">
                            <button className="button-return" onClick={closeModal}>Fermer</button>
                            <ValidateButton
                                CreateNas={CreateNas}
                            />
                        </div>

                    </div>
                </div>
            </Modal>

            <Footer />
        </div>
    )
}