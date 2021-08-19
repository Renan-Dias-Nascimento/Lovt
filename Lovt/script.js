// console.log ("Arquivo carregado") 

let btnToggleTheme = document.querySelector('.toggleTheme')

// console.log (btnToggleTheme);
let body = document.querySelector('body');
let iframe = document.querySelector('iframe');


//if ternário: (condição) ? true : false;
// Arrow Function: Sintaxe sofisticada de function;
btnToggleTheme.onclick = function(event){
    body.classList.toggle("dark-Theme");

}
