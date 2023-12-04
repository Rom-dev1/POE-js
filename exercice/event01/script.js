let elements = document.querySelectorAll('h2');

// 1
// elements.forEach((element) => {
//     element.addEventListener('click', () => {
//         element.style.color = 'red';
//     })
// })

elements.forEach((element) => {
    element.style.cursor = 'pointer';
    element.addEventListener('click', () => {
       if( element.style.color === 'red'){
        element.style.color = 'black'
       } else (
        element.style.color = 'red'
       )
    })
})