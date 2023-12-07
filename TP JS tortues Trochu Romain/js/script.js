// created div with overlay & empty img

let zoomCards = document.createElement('div');
zoomCards.classList.add('overlay');
let zoomTurtle = document.createElement('img');

// function display turtle big size

function displayTurtle(dataname){
    // introduction div at first div
    document.querySelector('#main-meet').prepend(zoomCards);
    // introduction data-name of one img to display the right img
    zoomTurtle.setAttribute('src', './assets/zoom-turles/turtle-' + dataname + '.png');
    // add img to display big size img to div recently create
    zoomCards.append(zoomTurtle);
}

// function to remove big size turtle

function removeTurtle(param){
    param.remove();
}

// get content-form to add after messageErrorContainer;
let field = document.querySelector(`#content-form`);
let inputEmail = document.querySelector('#newsletter');
let inputSubmit = document.querySelector('input[type=submit]');

function errors(param1){

    // add class on input to display errors
    inputEmail.classList.add('input-error-email')
    inputSubmit.classList.add('input-error-btn')

    // create div to display error message
    let messageErrorContainer = document.createElement('div');
    messageErrorContainer.classList.add('text-error');
    let messageError = messageErrorContainer.appendChild(document.createElement('p'));

    // error message is in param to do modify easier & adapt message of type of error
    messageError.textContent = param1;
    field.after(messageErrorContainer);
}

// function remove error to remove error message & the addition of errors class on input

function removeError(){
    if(document.querySelector('.text-error')){
        inputEmail.classList.remove('input-error-email');
        inputSubmit.classList.remove('input-error-btn');
        document.querySelector('.text-error').remove();
    }
}

// function valid to display a congratulations message & remove input newsletter

function valid(){
    // create div to display valid message
    let messageValidContainer = document.createElement('div');
    let messsageValid = messageValidContainer.appendChild(document.createElement('p'));

    // add class valid to div & p
    messsageValid.classList.add('valid');
    messsageValid.classList.add('message-valid');
    // content valid message

    messsageValid.textContent = 'Vous avez bien été inscrits à la newsletter !';
    field.after(messageValidContainer);
    field.remove();
}

document.addEventListener('DOMContentLoaded', () => {
    // get all turtles & listen the event on which target turtle
    document.querySelectorAll('img').forEach((element) => {

        element.addEventListener('click', () => {

            // element.dataset.name get the data-name to pass to function displayTurtle to know which turtle need to display
            displayTurtle(element.dataset.name);

            // listen event on div create recently who display turtle & delete this div
            zoomCards.addEventListener('click', () => {
                removeTurtle(zoomCards);
            });
        });
    });

    document.querySelector('input[type=submit]').addEventListener('click', (e) => {
        // stop send form
        e.preventDefault();
        // removeError to delete all errors, if they are present
        removeError();

        let email = document.querySelector('input[type=email]');
        // get value of input
        if(email.value.length < 10){
            errors(`l'${email.name} doit contenir au moins 10 caractères`)
        } else {
            valid();
        }
    })
})