const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({message: 'olá mundo estou funcionando'});
})

app.get('/olá', (req, res) => {
    res.status(200).send({message: 'olá mundo});
})

app.listen(3001, () => {
    console.log('api rodando na porta 3001');
}) 
