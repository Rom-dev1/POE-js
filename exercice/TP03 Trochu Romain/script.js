
document.addEventListener('DOMContentLoaded', () => {

    // Écouteur d'évènement sur le premier rectangle

    let firstRectangle = document.querySelector('#click');
    firstRectangle.addEventListener('click', () => {
        firstRectangle.classList.toggle('button')
        firstRectangle.classList.toggle('bgPurple');
    })

    // Écouteur d'évènement sur le deuxième rectangle

    let secondRectangle = document.querySelector('#double-click');
    secondRectangle.addEventListener('dblclick', () => {
        secondRectangle.classList.toggle('rotate')
    })


    // Écouteurs d'évènements sur le troisième rectangle

    let thirdRectangle = document.querySelector('#mouse');

    thirdRectangle.addEventListener('mouseenter', () => {
        thirdRectangle.classList.add('zoom')
    })
    thirdRectangle.addEventListener('mouseleave', () => {
        thirdRectangle.classList.remove('zoom')
    })


    // Écouteur d'évènement sur le 4ème rectangle

    let fourthRectangle = document.querySelector('#copy');
    fourthRectangle.addEventListener('copy', () => {
        fourthRectangle.textContent = '......'
    })

    // Écouteur d'évènement sur le 5ème rectangle

    let fifth = document.querySelector('input');
    let output = document.querySelector('#live > p')

    fifth.addEventListener('keydown', () => {
        console.log(fifth.value);
        output.textContent = fifth.value;
    })
})