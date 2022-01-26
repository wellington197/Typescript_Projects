let num1=document.getElementById('num1');
let num2=document.getElementById('num2');
let botao=document.getElementById('calcular');
let res=document.getElementById('resultado');

function calcular(n1,n2){
    return n1+n2;
}

botao.addEventListener('click', function(){
    res.innerHTML=calcular(num1.value,num2.value);
});