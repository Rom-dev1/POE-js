// function avec fichier css
//function createOverlay(){
//     let newDiv = document.createElement('div');
//     newDiv.innerHTML= '<h2>Coucou l\'overlay<h2>';
//     document.querySelector('body').append(newDiv);
//     newDiv.classList.add('overlay');
// }

// function avec création propriété CSS en js
function createOverlay(){
    let newDiv = document.createElement('div');
    newDiv.setAttribute('style', 'backgroundColor: 000000d4; position: fixed; top: 0; bottom: 0; left: 0; right: 0');
    document.querySelector('body').append(newDiv);
    newDiv.classList.add('overlay');
}

function removeOverlay(){
    document.querySelector('.overlay').classList.remove('overlay');
}