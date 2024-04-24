let formulario = document.getElementById('formulario');
let nombre = document.getElementById('nombre');
let fecha = document.getElementById('fecha');
let descripcion = document.getElementById('descripcion');

let tareas = [];
let listaTareas = document.getElementById('listaTareas');
let btnGuardar = document.getElementById('btnGuardar');

function mostrarTareas(){
    listaTareas.innerHTML = 'Lista de tareas: ';
    tareas.forEach((tarea,indice)=>{listaTareas.innerHTML += `<p>${tarea.nombre}<p>`});
}

let agregarDatos = ()=>{
    alert('Datos guardados con éxito');
    let datos = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value
    };
    tareas.push(datos);
    console.log(tareas);
    mostrarTareas();
}

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    agregarDatos();
});