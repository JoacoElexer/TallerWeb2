let formulario = document.getElementById('formulario');
    let formularioEditar = document.getElementById('formularioEditar');
    let nombre = document.getElementById('nombre');
    let fecha = document.getElementById('fecha');
    let descripcion = document.getElementById('descripcion');
    let foto = document.getElementById('foto');
    let video = document.getElementById('video');
    let audio = document.getElementById('audio');   
    let idTarea = document.getElementById('idTarea');
 
    let tareas = [
    {   
        nombre : "Josafat" ,
        fecha : "2023-12-31",
        descripcion : "Hola mundo",
        foto : "images.jpeg",
        video : "https://youtu.be/GqdpZaFcETw",
        audio : "Daft Punk - Instant Crush (Lyrics) ft. Julian Casablancas.mp3"
    },
    {   
        nombre : "Abraham" ,
        fecha : "2024-10-21",
        descripcion : "Hola mundo1",
        foto : "images.jpeg",
        video : "https://youtu.be/dzXPqtHaptU",
        audio : "Lady Gaga - Judas (Audio).mp3"
    } ,
    {
        nombre : "Fer" ,
        fecha : "2025-12-27",
        descripcion : "Hola mundo2",
        foto : "images.jpeg",
        video : "https://youtu.be/dzXPqtHaptU",
        audio : "Katy Perry ft Kanye West - E.T. (lyrics).mp3"
    }];
 
    let listaTareas = document.getElementById("listaTareas");
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
                <div class='col-4 border p-3'>
                    <image>${ tarea.foto }</image>
                </div>
                <div class='col-4 border p-3'>
                    <video>${ tarea.video }</video>
                </div>
                <div class='col-4 border p-3'>
                    <audio>${ tarea.audio }</audio>
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
 
    mostrarTareas();
 
    let editarTarea = (indice) => {
        nombreEditar.value = tareas[indice].nombre;
        fechaEditar.value = tareas[indice].fecha;
        descripcionEditar.value = tareas[indice].descripcion;
        fotoEditar.value = tareas[indice].foto;
        videoEditar.value = tareas[indice].video;
        audioEditar.value = tareas[indice].audio;
        idTarea.value = indice;
    }
 
    formularioEditar.addEventListener("submit", (e)=>{
        e.preventDefault();
        let indice = idTarea.value;
        tareas[indice].nombre = nombreEditar.value;
        tareas[indice].fecha = fechaEditar.value;
        tareas[indice].descripcion = descripcionEditar.value;
        tareas[indice].foto = fotoEditar.value;
        tareas[indice].video = videoEditar.value;
        tareas[indice].audio = audioEditar.value;
        mostrarTareas();
        cerrarModalEditar();
    });
 
    let agregarDatos = ()=> {
        let datos = {
            nombre: nombre.value,
            fecha: fecha.value,
            descripcion: descripcion.value,
            foto : foto.value,
            video: video.value,
            audio: audio.value
        }
        tareas.push(datos);
        mostrarTareas();
    }
    
    let cerrarModal = ()=> {
        btnGuardar.setAttribute("data-bs-dismiss","modal");
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
 
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        agregarDatos();
        cerrarModal();
        formulario.reset();
    });
 
 