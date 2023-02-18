<script setup>
// -- import de la fonction permettant de déclarer
//   une variable comme une variable d'ETAT
import { reactive, onMounted } from "vue";

// -- les 2 sous composants utilisés
import LivreItem from "./LivreItem.vue";
import LivreForm from "./LivreForm.vue.vue";

// -- la classe Livre
import Livre from "../Livre";

// -- la liste des livres
// --> donnée réactive = l'affichage sera actualisée automatiquement à chque cght dans la liste

const listeL = reactive([]);
const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/7/livres";

// -- fonction pour récupérer les données de l'API
function getLivre() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // vider la liste
      listeC.splice(0, listeL.length);
      dataJSON.forEach((v) => listeL.push(new Livre(v.id, v.libelle, v.fait)));
    })
    .catch((error) => console.log(error));
}

onMounted(() => {
  getToDos();
});


// -- handle pour supprimer un livre à prtir de l'index dans la liste
function handlerDelete(id) {
  console.log(id);
  const fetchOptions = {
    method: "DELETE",
  };
  const url =
    "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/7/livres" + "/" + id;
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
    })
    .catch((error) => console.log(error));
}
// -- handler pour ajouter un nouveau livre à partir du titre saisi dans le formulaire qui se retrouve en paramétre
function handlerAdd(titre) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ titre: titre }),
  };
  // -- il faut créer une nouvelle instance de la classe
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getLivres();
    })
    .catch((error) => console.log(error));
}
</script>

<template>
  <h3>Liste des livres</h3>
  <!-- Utiliser le composant "livreform" pour saisir le titre du livre
       il faut écouter l'event "addc" émis par la composant pour prévenir que la saisie est terminée  -->
  <LivreForm @addc="handlerAdd"></LivreForm>
  <ul>
    <!-- 
      le composant todolivre sert à afficher un livre ;
      en paramètre d'entrée, il a besoin de 2 elts appelés "props"
         - le livre à afficher et l'index dans le tableau listeL
      il comporte 1 bouton pour supprimer
      il émet un event quand le bouton est cliqué
        "deletec" pour la supression
    -->
    <LivreItem
      v-for="(livre, index) of listeL"
      :key="livre.id"
      :livre="livre"
      :indexc="index"
      @deletec="handlerDelete"
    />

    <!-- afficher la liste sans le composant "todolistitem"
    <li v-for="(chose, index) of listeC" :key="chose.id">
      {{ chose.pourAfficher() }}
      <button @click="handlerDelete(index)">Supprimer</button>
      <button @click="handlerFaire(index)">Faire</button>
    </li>
    -->
  </ul>
</template>

<style scoped>
</style>
