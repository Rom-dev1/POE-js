let email = "@";
let mp = "123";

// exercice 3

// let userEmail = prompt('Saisir votre Email');
// let userMp = prompt('Saisir votre mot de passe');

// if(email === userEmail && mp === userMp){
//     alert('Bienvenue dans votre espace client');
// } else {
//     alert('Identifiants incorrects');
// }


// exercice 4

// while(true){
//     let userEmail = prompt('Saisir votre Email');
//     let userMp = prompt('Saisir votre mot de passe');

//     if(email === userEmail && mp === userMp){
//         alert('Bienvenue dans votre espace client');
//         break
//     }
//     alert('Identifiants incorrects, recommencer');
// }

// exercice 5

// let nb = parseFloat(prompt('Saisir un chiffre entre 1 et 3'));

// while(true){
//     if(nb > 1 && nb < 3){
//         alert('bien joué')
//         break
//     }
//     nb = parseFloat(prompt('Erreur, saisir un chiffre entre 1 et 3'))
// }

// exercice 6

let nb = parseFloat(prompt('Saisir un chiffre'))

for(let i = 1; i <=10; i++){
    let sum = i * nb
    console.log(`${nb} x ${i} = ${sum}`)
}
