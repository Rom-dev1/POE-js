function errors(param1, param2){
    let field = document.querySelector(`input[name=${param1}]`);
    field.classList.add('field-invalid');
    let messageErrorContainer = document.createElement('div');
    messageErrorContainer.classList.add('error-text');
    let messageError = messageErrorContainer.appendChild(document.createElement('p'));
    messageError.textContent = param2;
    field.after(messageErrorContainer);
}

function removeErrors(){
    document.querySelectorAll('.field-invalid + div').forEach((field) => {
        console.log(field)
        field.remove();
    })
}


document.querySelector('input[type=submit]').addEventListener('click', (e) => {
    removeErrors();
    e.preventDefault();
    document.querySelectorAll('input[type=text]').forEach((element) => {
        if(element.value.length < 2 || element.value.length > 25){
            console.log()
            errors(element.name, `le ${document.querySelector(`label[for=${element.name}]`).textContent} doit contenir entre 2 et 25 caractères`);
        }
    })
})
