// Etape 1 - Sélectionner nos éléments
let prix = document.querySelector('#prix');
let form = document.querySelector('.formulaire_parent');
let text_danger = document.querySelector('.text-danger');


let coups = 0;
let nombreChoisi;
let randomNumber = entierAleatoire(0, 1001);
// console.log(randomNumber);


// Etape 2 - Cacher l'erreur

text_danger.style.display = 'none';

// Etape 3 - Générer un nombre aléatoire

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min)) + min;
}


// Etape 4 - Vérifier que l'utilisateur donne bien un nombre

prix.addEventListener('keyup', () => {
if (isNaN(prix.value)) {
    text_danger.style.display = 'inline';
}
else
text_danger.style.display = 'none';
})

// Etape 5 - Agir à l'envoi du formulaire

form.addEventListener('submit', (e) => {
e.preventDefault();

if (isNaN(prix.value) || prix.value =="") {
    prix.style.borderColor = "#FF0000";
    prix.style.borderWidth = "5px";
}
else
{
    coups ++;
    prix.style.borderColor ="silver";
    nombreChoisi = prix.value;
    prix.value = "";
    verifier(nombreChoisi);
}
});

// Etape 6 - Créer la fonction vérifier

function verifier(nbr){

    let inst = document.createElement('div');

    if (nbr < randomNumber){
        inst.textContent = "#" + coups + " (" + nombreChoisi + ") : C'est plus ... ";
        inst.className = "instruction plus";
      
    }
    else if (nbr > randomNumber){
        inst.textContent = "#" + coups + " (" + nombreChoisi + ") : C'est moins ... ";
        inst.className = "instruction moins";
     
    }
    else {
        inst.textContent = "#" + coups + " (" + nombreChoisi + ") : FELICITATIONS VOUS AVEZ TROUVE LE JUSTE PRIX ! ";
        inst.className = "instruction fini";
    }
    document.querySelector("#instructions").prepend(inst);
}
