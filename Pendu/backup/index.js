// function redir() {
//     location.href = './PenduV4.html';
// }

let nbLettres
let button5 = document.querySelector('#cinq');
let button6 = document.querySelector('#six');
let button7 = document.querySelector('#sept');
let button8 = document.querySelector('#huit');
let button9 = document.querySelector('#neuf');
let button10 = document.querySelector('#dix');

function lettres(){
    button5.onclick = () => { 
    nbLettres = 5;
    console.log(nbLettres);
    return nbLettres;  
    // location.href = './PenduV4.html';
    };
}
console.log(nbLettres);

function nombreLettres(){
    
    lettres();
    console.log(nbLettres);

    

    
    

    button6.onclick = () => { 
        nbLettres = 6;
        console.log(nbLettres);
    };

    button7.onclick = () => { 
        nbLettres = 7;
        console.log(nbLettres);
    };

    button8.onclick = () => { 
        nbLettres = 8;
        console.log(nbLettres);
    };

    button9.onclick = () => { 
        nbLettres = 9;
        console.log(nbLettres);
    };

    button10.onclick = () => { 
        nbLettres = 10;
        console.log(nbLettres);
    };

    console.log(nbLettres);
    // 
}

nombreLettres();


