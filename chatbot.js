const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/chatbot', (req, res) => {
    const { message } = req.body;
    let response = '';

    if (message.includes('hello')) {
        response = 'Hello! How can I assist you today?';
    } else {
        response = 'I am not sure how to respond to that.';
    }

    res.json({ response });
});

app.listen(PORT, () => {
    console.log(`Chatbot server running on http://localhost:${PORT}`);
});
