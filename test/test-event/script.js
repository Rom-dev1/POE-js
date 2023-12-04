document.querySelector('h1').addEventListener('click', function(){
    document.querySelector('h2').style.color = 'red'
    this.style.color('blue')
    // this coresspond au h1
})

// stopper le document par défaut d'un element html écouté
document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
})
// param e est une méthode de l'addeventlistener

// suppression

document.querySelector('a').removeEventListener()

// event permettant d'attendre que le dom est fini de charger et éxécuté ce qu'il il ya dans la fonction

document.addEventListener('DOMContentLoaded', () => {
    // on y place l'ensemble de nos fonction et eécoute
})