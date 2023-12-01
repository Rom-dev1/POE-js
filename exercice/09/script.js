// let cat = {
//     type: 'chat',
//     from: 'Asie',
//     character: 'calme',
//     age: '2',
//     eat: function(){
//         alert(this.type + ' est entrain de manger');
//     },
//     drink: function(){
//         alert(this.type + ' est entrain de boire');
//     }
// }

// alert(`Il s'agit d'un ${cat.type} originaire de ${cat.from}. Il a un caractère plutot ${cat.character} et il à ${cat.age} ans.`)
// cat.eat()

let cat = {
    type: ['chat', 'chien']
}

console.log(cat.type[Math.floor(Math.random())*cat.type.length])