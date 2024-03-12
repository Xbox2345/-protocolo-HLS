// En tu archivo hola.js
function toggleStreaming() {
    var streamSection = document.getElementById('stream-section');
    if (streamSection.style.display === 'none') {
        streamSection.style.display = 'block';
    } else {
        streamSection.style.display = 'none';
    }
}
