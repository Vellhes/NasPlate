function ValidateButton({CreateNas}){
    return(
        <div className="form-item">
            <button width='100' id='valider' className="button-default" onClick={CreateNas}>Valider</button>
        </div>
    )
}

export default function NasAddForm(){
    const handleCreateNas = async () => {
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
                        try {
                            const json = {
                                adresseReseau : adresseReseau,
                                masqueReseau : masqueReseau,
                                gateway : gateway,
                                societe : nomSociete,
                                service : nomService,
                                pays : pays
                            }
                            const response = await fetch('http://localhost:3000/nas',{
                                method: 'POST',
                                headers: {
                                    'Content-type': 'application/json',
                                    'Authorization' : localStorage.getItem("TOKEN")
                                },
                                body: JSON.stringify(json)
                            })
                            console.log(response)
                        }catch(error){
                            console.log("Erreur dans l'ajout du nas", error)
                            alert("Une erreur est survenue : "+error)
                        }
                        
                    }else{
                        alert("Votre masque de sous-réseau ne correspond pas au format attendu 'XXX.XXX.XXX.XXX'");
                    }
                }else{
                    alert("Votre masque de sous-réseau ne correspond pas au format attendu 'XXX.XXX.XXX.XXX'");
                }
            }else{
                alert("Votre adresse réseau ne correspond pas au format attendu 'XXX.XXX.XXX.XXX'")
            }
        }
        

    }
    return(
        <div>
            <div className="body-backOffice">
                <div className="cellDefault">

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

                    <ValidateButton
                        CreateNas={handleCreateNas}
                    />

                </div>
            </div>
            
        </div>
    )
}