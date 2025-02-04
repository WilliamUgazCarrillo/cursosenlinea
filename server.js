const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Global',
  password: '123',
  database: 'contacto'
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos');
});

// Ruta GET para /guardar
app.get('/guardar', (req, res) => {
  res.send('Esta ruta solo acepta solicitudes POST. Usa el formulario para enviar datos.');
});

// Ruta POST para /guardar
app.post('/guardar', (req, res) => {
  const { nombre, apellido, telefono, email } = req.body;

  const query = 'INSERT INTO cliente (nombre, apellido, telefono, email) VALUES (?, ?, ?, ?)';
  connection.query(query, [nombre, apellido, telefono, email], (err, result) => {
    if (err) {
      console.error('Error al guardar los datos:', err);
      return res.status(500).send('Error al guardar los datos');
    }
    console.log('Datos guardados correctamente:', result);
    res.status(200).send('Datos guardados correctamente');
  });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});