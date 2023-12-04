// selection de toutes les tabs
let allTabs = document.querySelectorAll('.tab');
// selection de toutes les vues
let allViews = document.querySelectorAll('.view')

// boucle pour récupérer chaque tab et faire l'event sur la tab cible
allTabs.forEach((tabView) => {
    tabView.addEventListener('click', () => {
        // suppression de la classe active dans les tabs et les vues
        allTabs.forEach((tab) => {
            tab.classList.remove('active')
        });
        allViews.forEach((view) => {
            view.classList.remove('active')
        })
        tabView.classList.add('active');
        document.querySelector(`#${tabView.dataset.open}`).classList.add('active');
    })
})