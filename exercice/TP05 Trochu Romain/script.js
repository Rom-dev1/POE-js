// get all images
let images = document.querySelectorAll('.gallery > img');

// create cross to closed
let x = document.createElement('span');
x.textContent = 'X';
x.setAttribute('id', 'cross');

// create new div to display image
let showImage = document.createElement('div');
showImage.setAttribute('class', 'showImage');

// create new img from an existing image
let image = document.createElement('img');

// close img
function removeImage(){
    showImage.remove();
}

// display image
function displayImage(data){
    document.querySelector('.gallery').prepend(showImage);
    image.setAttribute('src', './assets/'+data);
    showImage.append(image);
    image.after(x)
}

// close img with key escape
function escape(){
    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape'){
            removeImage();
        }
    })
}

// loop to get à single dataset which image is clicked
images.forEach((image) => {
    image.addEventListener('click', () => {
        displayImage(image.dataset.image);
        escape();
        x.addEventListener('click', () => {
            removeImage();
        })
    })
})