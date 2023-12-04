function downloadApk() {
    var userAgent = navigator.userAgent.toLowerCase();

    // Verifica si el usuario está utilizando un navegador móvil
    var isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

    if (isMobile) {
        // Si es un navegador móvil, redirige a la descarga del APK
        window.location.href = 'ruta/del/tu-aplicacion.apk';
    } else {
        // Si es un navegador de escritorio, muestra un mensaje de error
        alert('La descarga solo está disponible desde dispositivos móviles.');
    }
}
