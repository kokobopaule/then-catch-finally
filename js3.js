console.log("a,b")
const promesse = new Promise((resolve, reject) => {
    const succes = false 
    setTimeout(() => {
        if ( succes) {
            resolve ("Données recues")
            }
            else { reject (" Erreur réseau")
             }
                }, 5000)
            });
                promesse
                .then (( resultat) => {
                    console.log ( 'succès :' , resultat) ;
                })
                .catch ((erreur) => { 
                    console.log ('Echec :' , erreur);
                })
                .finally(() => {
                    console.log("Terminé , quoi qu'il arrive ");
                })
