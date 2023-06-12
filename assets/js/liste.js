// Sélectionnez l'élément de liste (ul) par son id
let maListe = document.getElementById("maListe");
// Créez cinq éléments de liste (li) et ajoutez du texte à l'intérieur
  
      for (let i = 1; i <= 5; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = "List item" + i;
        // Ajoutez chaque nouvel élément à la liste (ul)
        maListe.appendChild(listItem);
      }
    
