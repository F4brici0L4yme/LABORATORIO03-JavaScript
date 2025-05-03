const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/e1', express.static(path.join(__dirname, 'e1')));
app.use('/e2', express.static(path.join(__dirname, 'e2')));
app.use('/e3', express.static(path.join(__dirname, 'e3')));

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
