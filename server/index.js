const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static(
    path.join(__dirname, '../dist/app')
));

const indexFilePath = '../dist/app/index.html';

app.use('/', (req, res) => {
    fs.readFile(path.join(__dirname, indexFilePath ), (err, data) => {
       
        res.send(data.toString());
    });
});

app.listen(4001, () => {
    console.log('server started at 4001');
});