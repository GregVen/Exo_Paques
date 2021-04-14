function game(){
    let mots_7 = ["abeille","abricot","abriter","acheter","adresse","affaire","affiche","afrique","ajouter","algebre","aliment","alliage","allumer","ampoule","amusant","analyse","ancetre","anglais","animaux","appeler","appetit","appuyer","armoire","arreter","arriere","arriver","arroser","article","asseoir","associe","astraux","automne","avancer","bagarre","baigner","bailler","baisser","balayer","baleine","barrage","barreau","bassine","bengali","biberon","bientot","bifteck","biscuit","bizarre","blesser","blottir","boisson","boucher","bouchon","bouquet","branche","briller","buisson","cabinet","cadenas","cagoule","caillou","caliner","caprice","caresse","carotte","carreau","cederom","celibat","cerceau","cereale","cerveau","chaises","chaleur","chambre","chameau","changer","chanson","chanter","chapeau","charger","chariot","chasser","chateau","chemise","chiffon","chiffre","chimere","chinois","choisir","cholera","cigogne","ciseaux","clocher","cocotte","coffret","coiffer","collant","collier","colline","combien","comment","compose","compter","connard","content","corbeau","coucher","couette","couleur","couloir","cousine","coussin","couteau","couvert","couvrir","cracher","crapaud","cravate","creuser","crochet","croiser","croquer","cuisine","culotte","curieux","cuvette","dauphin","decorer","defiler","demolir","dernier","dessert","dessous","detroit","diamant","dinette","divorce","docteur","dossier","doucher","drapeau","ecarter","echarpe","echasse","echelle","eclater","eclipse","ecouter","ecraser","effacer","effraye","egalite","element","emmener","endroit","energie","enfiler","enlever","ennuyer","envoler","envoyer","epingle","essayer","essence","essuyer","estomac","etagere","ethique","etudier","excuser","facteur","falaise","falloir","famille","fantome","fatigue","fenetre","fermier","feuille","fevrier","ficelle","flotter","frapper","fratrie","fromage","frotter","galaxie","galette","galoper","gardien","gentile","glacier","glisser","gobelet","gonfler","goudron","gouffre","gouttes","graines","grandir","gratter","gravite","griffer","griller","grimace","grimper","gronder","guetter","habiter","hamster","haricot","hauteur","hesiter","heureux","hopital","horloge","iceberg","immense","inonder","insecte","inviter","italien","janvier","jongler","journee","juillet","justice","laisser","langues","largeur","lecture","lessive","lexique","liberte","licorne","liquide","logique","lumiere","machine","magasin","magenta","maillot","maladie","manquer","manteau","marcher","mariage","marteau","matelas","matiere","mauvais","mechant","medecin","mesurer","million","mineral","modeler","moineau","monnaie","montrer","morceau","moucher","mouette","mouille","musique","neutron","nombres","nonante","nourrir","nouveau","nuageux","obesite","obliger","occuper","oceanie","octante","octobre","optique","oreille","oublier","ouragan","ouvrier","panneau","parasol","parente","parking","passage","patient","paysage","pecheur","pedaler","peindre","peluche","pencher","pendant","pendule","penseur","percher","petrole","pinceau","piscine","placard","plafond","planche","planete","planter","plateau","pleurer","plonger","poignet","poireau","poisson","pompier","pousser","poussin","pouvoir","prairie","premier","prendre","present","presque","presser","profond","prudent","quitter","racisme","realite","recette","reciter","reculer","refuser","regaler","remplir","rentree","rentrer","reparer","repeter","reposer","reptile","reussir","revenir","riviere","robinet","ronfler","roulade","rouleau","rugueux","saigner","saisons","sardine","seconde","secouer","semaine","semelle","separer","serieux","serpent","serrure","sexisme","siffler","sifflet","silence","soigner","sommeil","sourcil","sourire","souvent","suivant","surdite","surface","tableau","tablier","tailler","tambour","tartine","tempete","terrain","terrier","theorie","torchon","tornade","toucher","tourner","tousser","trainer","tranche","travail","travaux","tremper","tricher","tromper","trousse","trouver","tsunami","univers","vampire","variole","vegetal","village","visiter","vitesse","voiture","volonte","vouloir","voyager"];

    let mot = "";
    let tableauLettre = [];
    let score = 10;
    let lettreJoueur;
    let trouvé = false;
    let reponse = 0;
    let button = document.querySelector('#bouton');
    let photoPendu = document.querySelector('#imagePendu');
    let texteFinal = document.querySelector('#texteFin');
    
    function newGame(){
        texteFinal.innerHTML = `<p> </p>`;/*met la valeur " " au p*/
        photoPendu.innerHTML = `<img src="./img/pendu000.png" alt="pendu">` ;
        let hasard = parseInt(Math.random() * (mots_7.length - 0) + 0);
        mot = mots_7[hasard];
        console.log(mot);
        for(i = 0; i < mot.length; i++){
            tableauLettre[i] = "-";
        }
        
        choisirLettre();
    } 
    
    function motATrouver(){
        mot2 = document.querySelector('#lettresManquantes');
        mot2.textContent = `${tableauLettre.join(" ")}`;
    }

    function nbEssai(){
        nEssai = document.querySelector('#essai');
        nEssai.textContent = `${score}`;
    }

    function lettreJ(){
        lettreJoueur = document.querySelector('#input').value;
        console.log(lettreJoueur);
        if(!isNaN(lettreJoueur)){
            texteFinal.innerHTML = `<p id="badLetter">vous n'avez pas entré une lettre</p>`;
            choisirLettre();
        }
    }
    
    function choisirLettre(){
            motATrouver();
            console.log(mot);
            nbEssai();
            console.log(lettreJoueur);
            button.onclick = () => { 
                lettreJ();
                motATrouver();
                console.log(mot);
                nbEssai();
                console.log(lettreJoueur);
                verifierLettre(lettreJoueur);
                document.querySelector('#input').value="";
            };
    
    }
   
    function verifierLettre(x){
        for(i = 0; i <= 6; i++){
            console.log(i);
            if(mot[i] == x){
                trouvé = true;
                tableauLettre[i] = x;
            }
        }
        if (trouvé == false && isNaN(lettreJoueur)){
            score--;
            texteFinal.innerHTML = `<p id="badLetter"> la lettre " ${lettreJoueur} " n'est pas dans le mot</p>`;
        }
        checkTableau();
    }
   

    function checkTableau(){
        trouvé = false;
        if(score == 0){
            texteFinal.innerHTML = `<p id="jeuPerdu"> Vous avez perdu\nLe mot était " ${mot} "</p>`;
            photoPendu.innerHTML = `<img src="./img/pendu010.png" alt="pendu">`;
        } else {
            reponse = 0;
            if(score == 9){
               photoPendu.innerHTML = `<img src="./img/pendu001.png" alt="pendu">`;
            } else if (score == 8){
                photoPendu.innerHTML = `<img src="./img/pendu002.png" alt="pendu">`;
            } else if (score == 7){
                photoPendu.innerHTML = `<img src="./img/pendu003.png" alt="pendu">`;
            } else if (score == 6){
                photoPendu.innerHTML = `<img src="./img/pendu004.png" alt="pendu">`;
            } else if (score == 5){
                photoPendu.innerHTML = `<img src="./img/pendu005.png" alt="pendu">`;
            } else if (score == 4){
                photoPendu.innerHTML = `<img src="./img/pendu006.png" alt="pendu">`;
            } else if (score == 3){
                photoPendu.innerHTML = `<img src="./img/pendu007.png" alt="pendu">`;
            } else if (score == 2){
                photoPendu.innerHTML = `<img src="./img/pendu008.png" alt="pendu">`;
            } else if (score == 1){
                photoPendu.innerHTML = `<img src="./img/pendu009.png" alt="pendu">`;
            };
            for (i=0; i < tableauLettre.length; i++){
               if(tableauLettre[i] != '-'){
                    reponse++;
                }
            }
            if(reponse == mot.length){
                mot2.textContent = `${tableauLettre.join(" ")}`;
                texteFinal.innerHTML = `<p id="jeuGagne"> Vous avez gagné\nLe mot était bien " ${mot} "</p>`;
            } else{
                choisirLettre();
            }
        }
    }

    newGame();
}

game();