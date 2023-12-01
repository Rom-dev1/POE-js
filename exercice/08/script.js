let verif = confirm('Ajouter un nouveau prénom ?');
let firstname = prompt('Quel prénom souhaitez vous ajouter');
let allFirstname = [];
allFirstname.push(firstname);

while(verif){
    verif = confirm('Ajouter un nouveau prénom ?');
    if(verif){
        firstname = prompt('Quel prénom souhaitez vous ajouter');
        if(firstname !== null){
            allFirstname.push(firstname);
        } else {
            alert('Aucune saisie')
        }
    } else
    alert('Merci!')
}