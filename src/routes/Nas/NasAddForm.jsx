function ValidateButton({CreateNas}){
    return(
        <div className="form-item">
            <button width='100' id='valider' className="button-default" onClick={CreateNas}>Valider</button>
        </div>
    )
}

export default function NasAddForm(){
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

                        //On passe la chaine en JSON
                        var json = JSON.stringify(jsonString)

                        //On crée le fichier
                        const blob = new Blob([json], { type: 'application/json' });
                        const url = URL.createObjectURL(blob);
                        
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = 'data.json';
                        a.click();
                        
                        URL.revokeObjectURL(url);
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
                        CreateNas={CreateNas}
                    />

                </div>
            </div>
            
        </div>
    )
}