const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const users = [];

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const user = { username, password };
    users.push(user);
    res.status(201).send('User registered');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ username }, 'secret_key');
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
