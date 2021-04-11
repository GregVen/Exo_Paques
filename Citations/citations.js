// Tableau de citations
let citations = [
    ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi","https://www.buboquote.com/images/author_picture/Gandhi.png"],
    // ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg", "https://medias.liberation.fr/photo/1244075-le-pdg-de-facebook-au-musee-de-l-histoire-de-l-ordinateur.jpg"],
    ["Méritez votre statut de leader chaque jour.", "Mickael Jordan", "https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg"],
    ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi","https://www.buboquote.com/images/author_picture/Gandhi.png"],
    ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain", "https://voyageurslecteurs.fr/wp-content/uploads/2018/04/Mark-Twain-1-e1523432526715.jpg"],
    ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot", "https://upload.wikimedia.org/wikipedia/commons/2/26/Thomas_Stearns_Eliot_by_Lady_Ottoline_Morrell_%281934%29.jpg"],
    ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais", "https://www.proverbemalin.fr/images/proverbe-japonais-tatouage_4.jpg"],
    ["Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain", "https://voyageurslecteurs.fr/wp-content/uploads/2018/04/Mark-Twain-1-e1523432526715.jpg"],
    ["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.", "Brian Tracy", "https://live.staticflickr.com/2430/3594775876_bcef985b2b_b.jpg"],
    ["Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.", "P.T. Barnum", "https://en.wikipedia.org/wiki/P._T._Barnum#/media/File:PT_Barnum_1851-crop.jpg"],
    ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher", "https://www.basicbananas.com/wp-content/uploads/2013/04/BS039.jpg"],
    ["Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.", "Anita Roddick", "https://upload.wikimedia.org/wikipedia/en/c/c4/Anita_Roddick.jpg"],
    ["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson", "https://fr.web.img6.acsta.net/pictures/13/12/16/19/50/163165.jpg"],
    ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso", "https://uploads4.wikiart.org/00115/images/pablo-picasso/iuyqtex0.jpeg!Portrait.jpeg"],
    ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill", "https://p8.storage.canalblog.com/88/21/369885/118265946.jpg"],
    ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki", "https://richesse-et-finance.com/wp-content/uploads/2016/02/kiyosaki-t-robert.jpg"],
    ["Ne vous découragez pas, c’est souvent la dernière clef du trousseau qui ouvre la porte.", "Zig Ziglar", "https://veeroesquotes.com/wp-content/uploads/2019/06/zig-zagler2.png"],
    ["Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.", "Brian Tracy", "https://live.staticflickr.com/2430/3594775876_bcef985b2b_b.jpg"],
    ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt", "https://upload.wikimedia.org/wikipedia/commons/7/79/FDRoosevelt1938.png"],
    ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis", "https://af62359ed6764b37dd8d-a09ab6654f67c1c7801ec2e0698b9db1.ssl.cf2.rackcdn.com/images/Screen_Shot_2019-09-12_at_9.58.50_AM.png"],
    ["Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.", "Winston Churchill", "https://p8.storage.canalblog.com/88/21/369885/118265946.jpg"]
  ];
let citation = document.querySelector('#citation');
let auteur = document.querySelector('#auteur');
let photo = document.querySelector('#portrait2');
let button = document.querySelector('#nouveau');

function choix(){
    let hasard = parseInt(Math.random() * (citations.length - 0) + 0);
    c1 = citations[hasard][0];
    c2 = citations[hasard][1];
    c3 = citations[hasard][2];
    citation.textContent = `"${c1}"`;
    document.getElementById("citation") == `${citation}`;
    auteur.textContent = `${c2}`;
    document.getElementById("auteur") == `${auteur}`;
    photo.innerHTML = `<img src="${c3}" alt="" id="portrait">`;

}
  
button.onclick = () => { 
    choix();
};





















//   let button = document.querySelector('#nouveau');

//   button.onclick = () => { 
//     document.body.style.backgroundColor="yellow";
// };