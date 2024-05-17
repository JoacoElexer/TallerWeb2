let formulario = document.getElementById('formulario');
let nombre = document.getElementById('nombre');
let fecha = document.getElementById('fecha');
let descripcion = document.getElementById('descripcion');
let formularioEditar = document.getElementById('formularioEditar');
let idTarea = document.getElementById('idTarea');
let archivo = document.getElementById('urlInput');

let tareas = [
{nombre: 'Tarea 1', fecha: '2024-10-10', descripcion: 'Lorem ipsum'},
{nombre: 'Tarea 2', fecha: '2024-08-17', descripcion: 'Lorem ipsum'},
{nombre: 'Tarea 3', fecha: '2024-06-17', descripcion: 'Lorem ipsum'},
];

let listaTareas = document.getElementById('listaTareas');
let btnGuardar = document.getElementById('btnGuardar');
let btnGuardarEditar = document.getElementById('btnGuardarEditar');

function mostrarTareas(){
    listaTareas.innerHTML = "";
    tareas.forEach((tarea,indice) => {
        listaTareas.innerHTML += `
        <div class='row'>
            <div class='col-3 border p-3'>
                <strong>${ tarea.nombre }</strong>
            </div>
            <div class='col-3 border p-3'>
                <strong>${ tarea.fecha }</strong>
            </div>
            <div class='col-4 border p-3'>
                <strong>${ tarea.descripcion }</strong>
            </div>
            <div>
            <img id="imageDisplay" src="tarea.archivo" alt="Imagen seleccionada" style="max-width: 500px; max-height: 500px; display: none;">
            <video id="videoDisplay" controls style="max-width: 500px; max-height: 500px; display: none;"></video>
            <audio id="audioDisplay" controls style="display: none;"></audio>
            <div id="youtubeDisplay" style="display: none;">
                <iframe id="youtubeIframe" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </div>
            <div class='col-1 border p-3 text-center'>
                <button class='btn btn-success' data-bs-toggle="modal" data-bs-target="#editarTarea" onclick="editarTarea(${ indice })">Editar</button>
            </div>
            <div class='col-1 border p-3 text-center'>
                <button class='btn btn-danger' onClick="borrarTarea(${ indice })">Borrar</button>
            </div>
        </div>
        `;
    });
}

let editarTarea = (indice) => {
    nombreEditar.value = tareas[indice].nombre;
    fechaEditar.value = tareas[indice].fecha;
    descripcionEditar.value = tareas[indice].descripcion;
    idTarea.value = indice;
}

formularioEditar.addEventListener("submit", (e)=>{
    e.preventDefault();
    let indice = idTarea.value;
    tareas[indice].nombre = nombreEditar.value;
    tareas[indice].fecha = fechaEditar.value;
    tareas[indice].descripcion = descripcionEditar.value;
    mostrarTareas();
    cerrarModalEditar();
});

let agregarDatos = ()=>{
    alert('Datos guardados con éxito');
    let datos = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value,
        archivo: archivo.value
    };
    tareas.push(datos);
    console.log(tareas);
    mostrarTareas();
}

let cerrarModal = ()=>{
    btnGuardar.setAttribute('data-bs-dismiss', 'modal');
    btnGuardar.click();
}

let cerrarModalEditar = ()=> {
    btnGuardarEditar.setAttribute("data-bs-dismiss","modal");
    btnGuardarEditar.click();
}

let borrarTarea = (indice)=> {
    tareas.splice(indice,1);
    console.log(tareas);
    mostrarTareas();
}

//Intento de leer y agregar archivos
let LeerYAgregarArchivo = ()=>{
    document.getElementById('fileInput').addEventListener('change', function (event) {
        const file = event.target.files[0]; // Obtener el archivo seleccionado

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const fileType = file.type.split('/')[0];
                const imageDisplay = document.getElementById('imageDisplay');
                const videoDisplay = document.getElementById('videoDisplay');
                const audioDisplay = document.getElementById('audioDisplay');
                const youtubeDisplay = document.getElementById('youtubeDisplay');

                if (fileType === 'image') {
                    // Mostrar imagen
                    imageDisplay.src = e.target.result;
                    imageDisplay.style.display = 'block';
                    videoDisplay.style.display = 'none'; // Ocultar video
                    audioDisplay.style.display = 'none'; // Ocultar audio
                    youtubeDisplay.style.display = 'none'; // Ocultar YouTube
                } else if (fileType === 'video') {
                    // Mostrar video
                    videoDisplay.src = e.target.result;
                    videoDisplay.style.display = 'block';
                    imageDisplay.style.display = 'none'; // Ocultar imagen
                    audioDisplay.style.display = 'none'; // Ocultar audio
                    youtubeDisplay.style.display = 'none'; // Ocultar YouTube
                } else if (fileType === 'audio') {
                    // Mostrar audio
                    audioDisplay.src = e.target.result;
                    audioDisplay.style.display = 'block';
                    imageDisplay.style.display = 'none'; // Ocultar imagen
                    videoDisplay.style.display = 'none'; // Ocultar video
                    youtubeDisplay.style.display = 'none'; // Ocultar YouTube
                }
            };

            reader.readAsDataURL(file); // Leer el archivo como una URL de datos
        }
    });

    function loadFromUrl() {
        const url = document.getElementById('urlInput').value;
        const imageDisplay = document.getElementById('imageDisplay');
        const videoDisplay = document.getElementById('videoDisplay');
        const audioDisplay = document.getElementById('audioDisplay');
        const youtubeDisplay = document.getElementById('youtubeDisplay');
        const youtubeIframe = document.getElementById('youtubeIframe');

        // Determinar el tipo de archivo por la extensión de la URL
        const fileExtension = url.split('.').pop().toLowerCase();
        const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
        const videoExtensions = ['mp4', 'webm', 'ogg'];
        const audioExtensions = ['mp3', 'wav', 'ogg'];

        if (imageExtensions.includes(fileExtension)) {
            // Mostrar imagen
            imageDisplay.src = url;
            imageDisplay.style.display = 'block';
            videoDisplay.style.display = 'none'; // Ocultar video
            audioDisplay.style.display = 'none'; // Ocultar audio
            youtubeDisplay.style.display = 'none'; // Ocultar YouTube
        } else if (videoExtensions.includes(fileExtension)) {
            // Mostrar video
            videoDisplay.src = url;
            videoDisplay.style.display = 'block';
            imageDisplay.style.display = 'none'; // Ocultar imagen
            audioDisplay.style.display = 'none'; // Ocultar audio
            youtubeDisplay.style.display = 'none'; // Ocultar YouTube
        } else if (audioExtensions.includes(fileExtension)) {
            // Mostrar audio
            audioDisplay.src = url;
            audioDisplay.style.display = 'block';
            imageDisplay.style.display = 'none'; // Ocultar imagen
            videoDisplay.style.display = 'none'; // Ocultar video
            youtubeDisplay.style.display = 'none'; // Ocultar YouTube
        } else if (url.includes('youtube.com') || url.includes('youtu.be')) {
            // Mostrar YouTube
            const videoId = getYouTubeVideoId(url);
            if (videoId) {
                youtubeIframe.src = `https://www.youtube.com/embed/${videoId}`;
                youtubeDisplay.style.display = 'block';
                imageDisplay.style.display = 'none'; // Ocultar imagen
                videoDisplay.style.display = 'none'; // Ocultar video
                audioDisplay.style.display = 'none'; // Ocultar audio
            } else {
                alert('URL de YouTube no válida.');
            }
        } else {
            alert('Tipo de archivo no soportado. Por favor, ingresa una URL válida.');
        }
    }

    function getYouTubeVideoId(url) {
        const urlObj = new URL(url);
        if (urlObj.hostname === 'youtu.be') {
            return urlObj.pathname.slice(1);
        } else if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
            return urlObj.searchParams.get('v');
        }
        return null;
    }
}

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    agregarDatos();
    cerrarModal();
    LeerYAgregarArchivo();
    formulario.reset();
});