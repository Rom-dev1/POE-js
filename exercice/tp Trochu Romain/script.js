// nombre aléatoire
let nbTarget = Math.floor(Math.random() * 100 + 1)
// vérification saisie
const regex = /[0-9]/

const valid = confirm('Souhaitez vous démarrer une nouvelle partie ?');

// function de d'indication à l'utilisateur en fonction du param
function askNewNumber(param){
    if(param > nbTarget){
        return alert(`Le chiffre à trouver est plus petit que ${param}`);
    } else {
        return alert(`Le chiffre à trouver est plus grand que ${param}`);
    }
}

if(valid){
    // initialisation du compteur de tour
    let i = 0;
    while(i <= 10){
        let nbUser = prompt(`Choisir un chiffre entre 1 et 100, tour : ${i}/10`);
        //verification saisie utilisateur
        //utilisation isNaN éventuelle
        if(!nbUser.match(regex) || nbUser < 0){
            // annulation de l'incrémentation si erreur de saisie
            i--;
            alert('Erreur de saisie, rééssayer')
        } else {
            if(parseFloat(nbUser) === nbTarget){
                let score = (10 - i)*10;
                alert(`Vous avez trouvé, votre score est de ${score}/100`);
                break
            } else {
                askNewNumber(nbUser);
            }
        }
        i++;
    }
    if(i > 10){
        alert('Trop tard..')
    }
} else {
    alert('Tant pis..')
}