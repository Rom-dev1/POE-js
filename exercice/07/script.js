function sum(param1, param2){
    return param1 + param2
}


let nb1 = parseFloat(prompt('Saisir un chiffre'))
let nb2 = parseFloat(prompt('Saisir un second chiffre'))
console.log(`La somme de ${nb1} et ${nb2} est ${sum(nb1, nb2)}`)
