const express = require('express');
// Ejecuta
const app = express();
const path = require('path');

// Configuracion
app.set('port', 3000);
// path.join convierte el diagonal a diagonal invertida(slash),Se le indica a node donde se encuentra la carpeta 'views'
app.set('views', path.join(__dirname, 'views'));
// Utiliza los archivos .html, sera procesado con ejs y renderizado con el motor de platillas
app.engine('html', require('ejs').renderFile);
// Utilizara el motor de plantillas ejs
app.set('view engine', 'ejs');

// Middleware


// Routes
app.use(require('./routes/index'));

// Static files, css/js/img etc.
app.use(express.static(path.join(__dirname, 'public')));

// Escucha en el servidor con el puerto
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});