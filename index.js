const fs = require('fs');
const path = require('path');
const screenshot = require('screenshot-desktop');

console.log('Servidor => Captura de pantalla')
//local laptop
// Verificar y crear la carpeta 'screenshot/img' si no existe
const dir = path.join(process.cwd(), 'screenshot', 'img');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log('Carpeta creada:', dir);
} else {
    console.log('Carpeta ya existe:', dir);
}

function capturarPantalla() {
    screenshot({ filename: path.join(dir, 'img_captura.png') })
        .then((imgPath) => {
            console.log('Captura de pantalla guardada: ', imgPath);
        })
        .catch((err) => {
            console.error('Error al capturar la pantalla:', err);
        });
}

// Llamada a la función cada 2 segundos
setInterval(capturarPantalla, 1900);

