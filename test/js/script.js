// selectionner tout les p
document.querySelectorAll('section .box-test p');

// let test = document.querySelector('.div-test')
// test.children

let elementsChild = document.querySelector('.div-test').children; // selectionne tous les enfants

let firstElementChild = document.querySelector('.div-test').firstElementChild;
let lastElementChild = document.querySelector('.div-test').lastElementChild;

let choiceElementChild = document.querySelector('.div-test').children[1]; // selection d'un enfant en particulier

// selectionner le voisin suivant et précédent

choiceElementChild.previousElementSibling;
choiceElementChild.nextElementSibling;

let test = document.querySelector('p');
let testText = test.textContent;
test.textContent = 'Je suis le nouveau texte';
let test02 = document.querySelector('h3');
// let newTest = test02.innerHtml;
test02.innerHTML = '<h2 class="test">test<h2>'

// modifier des attr particuliers

let newSection = document.querySelector('section')
newSection.id = 'newSection'
newSection.className('newClass')
newSection.classList.add('ajoutClass')
newSection.classList.remove('cibleClass')
newSection.classList.replace('cibleClass', 'newClass')

// getAttribute permet de récupérer la valeur d'un attribut et setAttribute de le mettre à jour
// element.setAttribute('src','cible.png')

// duplication d'un élément possible avec cloneNode() préciser true dans les param si souhait de copier les enfants