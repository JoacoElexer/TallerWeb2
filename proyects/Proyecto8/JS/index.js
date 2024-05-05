let formulario = document.getElementById('formulario');
let nombre = document.getElementById('nombre');
let fecha = document.getElementById('fecha');
let descripcion = document.getElementById('descripcion');

let tareas = [];
let listaTareas = document.getElementById('listaTareas');
let btnGuardar = document.getElementById('btnGuardar');

function mostrarTareas(){
    listaTareas.innerHTML = '';
    tareas.forEach((tarea,indice)=>{
    listaTareas.innerHTML += `
    <div class='row'>
            <div class='col-3 border p-3'>
                <strong>${tarea.nombre}</strong>
            </div>
            <div class='col-3 border p-3'>
                <strong>${tarea.fecha}</strong>
            </div>
            <div class='col-3 border p-3'>
                <strong>${tarea.descripcion}</strong>
            </div>
            <div class='col-1 border p-3 text-center'>
                <button class='btn btn-success'>Editar</button>
            </div>
            <div class='col-1 border p-3 text-center'>
            <button class='btn btn-danger'>Borrar</button>
        </div>
    </div>
    `
});
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

let cerrarModal = ()=>{
    btnGuardar.setAttribute('data-bs-dismiss', 'modal');
    btnGuardar.click();
}

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    agregarDatos();
    cerrarModal();
});
