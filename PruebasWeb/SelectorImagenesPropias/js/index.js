document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Obtener el archivo seleccionado

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const fileType = file.type.split('/')[0];
            const imageDisplay = document.getElementById('imageDisplay');
            const videoDisplay = document.getElementById('videoDisplay');
            const audioDisplay = document.getElementById('audioDisplay');

            if (fileType === 'image') {
                // Mostrar imagen
                imageDisplay.src = e.target.result;
                imageDisplay.style.display = 'block';
                videoDisplay.style.display = 'none'; // Ocultar video
                audioDisplay.style.display = 'none'; // Ocultar audio
            } else if (fileType === 'video') {
                // Mostrar video
                videoDisplay.src = e.target.result;
                videoDisplay.style.display = 'block';
                imageDisplay.style.display = 'none'; // Ocultar imagen
                audioDisplay.style.display = 'none'; // Ocultar audio
            } else if (fileType === 'audio') {
                // Mostrar audio
                audioDisplay.src = e.target.result;
                audioDisplay.style.display = 'block';
                imageDisplay.style.display = 'none'; // Ocultar imagen
                videoDisplay.style.display = 'none'; // Ocultar video
            }
        };

        reader.readAsDataURL(file); // Leer el archivo como una URL de datos
    }
});

