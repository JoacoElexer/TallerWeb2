document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Obtener el archivo seleccionado

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
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
