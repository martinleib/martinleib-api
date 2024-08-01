const express = require('express');
const app = express();
const port = 3000;

const users = [ {name: 'Alice'}, {name: 'Bob'} ];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
    res.send(JSON.stringify(users));
});

app.post('/users/new', (req, res) => {
    users.push({name: req.body.name});
    res.send('OK');
});

app.post('/users/save', (req, res) => {
    users.push({name: req.body.name});
    res.send('OK');
});

app.delete('/users', (req, res) => {
    users.push({name: req.body.name});
    res.send('OK');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//