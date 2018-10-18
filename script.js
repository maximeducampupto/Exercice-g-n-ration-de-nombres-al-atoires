function genererNombres(nombre_max) {
    for (var i = 0; i < nombre_max; i++) {
        var nombre_aleatoire = Math.floor(Math.random() * 100),
            nombre_conteneur = document.createElement('p');

       if (nombre_aleatoire !== 50) {
           nombre_conteneur.innerHTML =
               i + ' - ' + nombre_aleatoire +  (nombre_aleatoire  <  50 ? ' Le capitaine est jeune' : ' Le capitaine est agé');
       } else {
           nombre_conteneur.innerHTML =
               i + ' - ' + nombre_aleatoire + ' Joyeux 50eme anniversaire !';
       }

        document.getElementById('results_container').append(nombre_conteneur);
    }
}

genererNombres(20);