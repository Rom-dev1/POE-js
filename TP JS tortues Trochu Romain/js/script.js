

let zoomCards = document.createElement('div');
zoomCards.classList.add('overlay');
let zoomTurtle = document.createElement('img');

function displayTurtle(dataname){
    document.querySelector('#main-meet').prepend(zoomCards);
    zoomTurtle.setAttribute('src', './assets/zoom-turles/turtle-' + dataname + '.png');
    zoomCards.append(zoomTurtle);
}

function removeTurtle(param){
    param.remove();
}

let field = document.querySelector(`#content-form`);
let inputEmail = document.querySelector('#newsletter');
let inputSubmit = document.querySelector('input[type=submit]');

function errors(param1){
    inputEmail.classList.add('input-error-email')
    inputSubmit.classList.add('input-error-btn')
    let messageErrorContainer = document.createElement('div');
    messageErrorContainer.classList.add('text-error');
    let messageError = messageErrorContainer.appendChild(document.createElement('p'));
    messageError.textContent = param1;
    field.after(messageErrorContainer);
}

function removeError(){
    if(document.querySelector('.text-error')){
        inputEmail.classList.remove('input-error-email');
        inputSubmit.classList.remove('input-error-btn');
        document.querySelector('.text-error').remove();
    }
}

function valid(){
    let messageValidContainer = document.createElement('div');
    let messsageValid = messageValidContainer.appendChild(document.createElement('p'));
    messsageValid.classList.add('valid')
    messsageValid.classList.add('message-valid');
    messsageValid.textContent = 'Vous avez bien été inscrits à la newsletter !';
    field.after(messageValidContainer);
    field.remove();
}

document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('img').forEach((element) => {
        element.addEventListener('click', () => {
            displayTurtle(element.dataset.name);
            zoomCards.addEventListener('click', () => {
                removeTurtle(zoomCards);
            });
        });
    });

    document.querySelector('input[type=submit]').addEventListener('click', (e) => {
        e.preventDefault();
        removeError();
        let email = document.querySelector('input[type=email]');
        if(email.value.length < 10){
            errors(`l'${email.name} doit contenir au moins 10 caractères`)
        } else {
            valid();
        }
    })
})