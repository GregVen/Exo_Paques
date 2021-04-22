function horloge(){
    let DateHumaine = new Date(Date.now());
    let secondes = DateHumaine.getSeconds();
    let minutes = DateHumaine.getMinutes();
    let heures = DateHumaine.getHours();
    let afficheSeconde = document.querySelector('#seconde');
    let afficheMinute = document.querySelector('#minute');
    let afficheHeure = document.querySelector('#heure');
    
    if (secondes < 10){
        //modifie le contenu du span selectionner plus haut : seconde
        afficheSeconde.innerHTML = `0${secondes}`;
    }
    else {
        afficheSeconde.innerHTML = `${secondes}`;
    };
    
    if (minutes < 10){
        //modifie le contenu du span selectionner plus haut : minute
        afficheMinute.innerHTML = `0${minutes}`;
    }
    else {
        afficheMinute.innerHTML = `${minutes}`;
    };

    if ( heures < 10){
        //modifie le contenu du span selectionner plus haut : heure
        afficheHeure.innerHTML = `0${heures}`;
    }
    else {
        afficheHeure.innerHTML = `${heures}`;
    };
}

    setTimeout(() => horloge(), 0);
    let interval = setInterval(() => {horloge()}, 1000);
    // setTimeout(() => {clearInterval(interval)}, 10000);
