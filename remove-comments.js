const fs = require('fs');
const path = require('path');

// Función para eliminar comentarios de un archivo
function removeCommentsFromFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    // Eliminar comentarios de línea y bloque
    const noComments = fileContent.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '');
    fs.writeFileSync(filePath, noComments, 'utf-8');
    console.log(`Procesado: ${filePath}`);
}

// Función para recorrer un directorio
function processDirectory(directoryPath) {
    const files = fs.readdirSync(directoryPath);

    files.forEach(file => {
        const fullPath = path.join(directoryPath, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Si es un directorio, procesar recursivamente
            processDirectory(fullPath);
        } else if (path.extname(fullPath) === '.js') {
            // Si es un archivo JavaScript, eliminar comentarios
            removeCommentsFromFile(fullPath);
        }
    });
}

// Ruta del directorio del proyecto
const projectPath = path.resolve(__dirname, 'src'); // Cambia 'src' por la carpeta raíz de tu proyecto

processDirectory(projectPath);
console.log('Todos los comentarios han sido eliminados.');
