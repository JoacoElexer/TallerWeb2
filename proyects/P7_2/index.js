let resultado = document.getElementById('resultado');
let input = document.getElementById('resultado');

function asignar(valor){
    resultado.value += valor;
    //resultado.value = resultado.value + valor;
}

function calcular(){
    if (input.value === '') {
        alert('Ingrese un número válido');
    } else {
    resultado.value = eval(resultado.value);
    }
}

//Asigna la función a una variable
/*let calcular2 = () => {
    resultado.value = eval(resultado.value);
}*/

function raizCuadrada() {
    let valor = parseFloat(resultado.value);
    if (input.value === '') {
        alert('Ingrese un número válido');
    } else {
        resultado.value = Math.sqrt(valor);
    }
}

function sen() {
    let valor = parseFloat(resultado.value);
    if (input.value === '') {
        alert('Ingrese un número válido');
    } else {
        resultado.value = Math.sin(valor);
    }
}

function cos() {
    let valor = parseFloat(resultado.value);
    if (input.value === '') {
        alert('Ingrese un número válido');
    } else {
        resultado.value = Math.cos(valor);
    }
}

function logaNat(){
    let valor = parseFloat(resultado.value);
    if (input.value === '') {
        alert('Ingrese un número válido');
    } else {
        resultado.value = Math.log(valor);
    }
}

function porcentaje(){
    let valor = parseFloat(resultado.value);
    if (input.value === '') {
        alert('Ingrese un número válido');
    } else {
        resultado.value = Math.pow(valor(50)) / 100;
    }
}

function limpiar(){
    if (input.value === '') {
        alert('No hay nada que borrar');
    }else{
        resultado.value = '';
    }
}