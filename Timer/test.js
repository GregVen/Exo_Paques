let secondes;
  
function affiche(){
      
    console.log(secondes);
    secondes--;
    console.log(secondes);
    
}
 function test(){
    secondes = 10;
    let interval = setInterval(() => {affiche()}, 1000);
    setTimeout(() => {clearInterval(interval)}, 11000);
 }

function start (){
    // setTimeout(affiche(), 0);
        // let interval = setInterval(() => {affiche()}, 1000);
        // setTimeout(() => {clearInterval(interval)}, 11000);
        if (secondes > 0) {
            
            test();
        } else {
        console.log("aaa");}
       
};

start();
