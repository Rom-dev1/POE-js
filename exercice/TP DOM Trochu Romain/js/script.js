// création du footer
let footer = document.createElement('footer');
document.querySelector('body').append(footer);

// création des 2 nav
for(let j = 1; j <= 2; j++){
    footer.append(document.createElement('nav'))
}

// ajout des classes respectives à chaque nav
footer.firstChild.classList.add('social_nav');
footer.lastChild.classList.add('other_nav');
// contenu de la 1ere nav
let socialList = document.createElement('ul');
document.querySelector('.social_nav').append(socialList);
// boucle pour creer li, a et i
for(let i = 0; i <= 2; i++){
    let logo = ['facebook', 'instagram', 'pinterest'];
    let contentSocialList = document.createElement('li');
    socialList.append(contentSocialList);
    let linkSocialList = document.createElement('a');
    linkSocialList.setAttribute('href', '#');
    linkSocialList.setAttribute('title', logo[i]);
    contentSocialList.append(linkSocialList);
    let icon = document.createElement('i');
    icon.classList.add('fa-brands', 'fa-' + logo[i])
    linkSocialList.append(icon);
}

// contenu 2nd nav
let infoNav = document.createElement('ul');
document.querySelector('.other_nav').append(infoNav);

// copyright
let copyright = document.createElement('li');
copyright.classList.add('copyright');
let linkCopyright = document.createElement('span');
linkCopyright.textContent = '@copyright HedghogInLove';
copyright.append(linkCopyright);
infoNav.append(copyright);

// CGU
let cgu = document.createElement('li');
let linkCgu = document.createElement('a');
linkCgu.setAttribute('href', '#');
linkCgu.textContent = 'CGU';
cgu.append(linkCgu);
infoNav.append(cgu);

// Mentions légales
let legalNotice = document.createElement('li');
let linkLegalNotice = document.createElement('a');
linkLegalNotice.setAttribute('href', '#');
linkLegalNotice.textContent = 'Mentions Légales';
legalNotice.append(linkLegalNotice);
infoNav.append(legalNotice);


