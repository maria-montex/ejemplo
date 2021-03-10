const express = require('express');
const app = express();
const morgan = require('morgan');

//CONFIGURACIONES
app.set('port', 3000);

//MIDDLEWARES
app.use(morgan('combined'));
app.use(express.json());

//RUTAS
app.use(require('./routes/rutas'));

//EMPEZANDO EL SERVIDOR
app.listen(app.get('port'));
console.log("mi primer servidor");
