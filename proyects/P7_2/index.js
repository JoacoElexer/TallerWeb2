let resultado = document.getElementById('resultado');

function asignar(valor){
    resultado.value += valor;
    //resultado.value = resultado.value + valor;
}

function calcular(){
    resultado.value = eval(resultado.value);
}

//Asigna la función a una variable
/*let calcular2 = () => {
    resultado.value = eval(resultado.value);
}*/

function limpiar(){
    resultado.value = '';
}