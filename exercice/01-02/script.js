let nb1 = 2;
let nb2 = 5;
const sum = nb1 + nb2;
alert('Bienvenue sur la page du formulaire');
console.log(nb1);
console.log(nb2);
console.log(`Le résultat est ${sum}`);

let distance = parseInt(prompt('Distance parcourut ?'));
let time = parseInt(prompt('Durée ?'));
let rst = distance/time

console.log(Math.round(rst) + 'm/s')

if(sum){
    console.log('coucou')
}