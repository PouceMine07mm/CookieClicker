//Au chargement de la page, charge l'ancienne sauvegarde dans le stockage du naviguateur web


//Variables
var nbrbiscuit = 0;
var increment = 1;
//Fonctions
function add() {
  nbrbiscuit = nbrbiscuit + 1;
  document.getElementById("text").value = nbrbiscuit;
}

function save(){
  localStorage.setItem("nbrbiscuit", nbrbiscuit)
}

function load(){
  nbrbiscuit = localStorage.getItem("nbrbiscuit")
  nbrbiscuit = parseInt(nbrbiscuit)
  document.getElementById("text").value = nbrbiscuit;
}