let secondes = 10;
  
function affiche(){
      
    console.log(secondes);
   
    let decompte = document.querySelector('.decompte');
    decompte.textContent = `${secondes}`;
    document.body.append(decompte);
    secondes--;
    console.log(secondes);
    
}


function start (){
    console.log(secondes);
        setTimeout(() => affiche(), 0);
        let interval = setInterval(() => {affiche()}, 1000);
        setTimeout(() => {clearInterval(interval)}, 10000);
};

let button = document.querySelector('.buttonDecompte');

button.onclick = () => { 
    start();
};