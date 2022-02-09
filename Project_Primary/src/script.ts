let num1=document.getElementById('num1') as HTMLInputElement;
let num2=document.getElementById('num2') as HTMLInputElement;
let botao=document.getElementById('calcular');
let res=document.getElementById('resultado');

function calcular(n1: number,n2: number){
    return n1+n2;
}

botao.addEventListener('click', function(){
    res.innerHTML=calcular(+num1.value,+num2.value).toString();
});


/* 3 principais tipagens*/

let name: string[]= ['Bonieki', 'Lacerda'];
let idade: number[]= [90,15];





