const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/e1', express.static(path.join(__dirname, 'e1')));
app.use('/e2', express.static(path.join(__dirname, 'e2')));
app.use('/e3', express.static(path.join(__dirname, 'e3')));
app.use('/e4', express.static(path.join(__dirname, 'e4')));
app.use('/e5', express.static(path.join(__dirname, 'e5')));
app.use('/e6', express.static(path.join(__dirname, 'e6')));
app.use('/e7', express.static(path.join(__dirname, 'e7')));
app.use('/e8', express.static(path.join(__dirname, 'e8')));
app.use('/e9', express.static(path.join(__dirname, 'e9')));
app.get('/e10', (req, res) => {
    res.sendFile(path.join(__dirname, 'e10/cd_catalog.xml'));
});
app.use('/e11', express.static(path.join(__dirname, 'e11')));
app.use('/e12', express.static(path.join(__dirname, 'e12')));
app.use('/e13', express.static(path.join(__dirname, 'e13')));
app.use('/e14', express.static(path.join(__dirname, 'e14')));

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
