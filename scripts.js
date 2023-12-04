function downloadApk() {
    alert('hola')
    var userAgent = navigator.userAgent.toLowerCase();

    // Verifica si el usuario está utilizando un navegador móvil
    var isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

    if (isMobile) {
        // Si es un navegador móvil, redirige a la descarga del APK
        href = 'AsistenciaDuco.apk'; // Ajusta la ruta según tu estructura
    } else {
        // Si es un navegador de escritorio, muestra un mensaje de error
        alert('La descarga está disponible solo desde dispositivos móviles.');
    }
}
