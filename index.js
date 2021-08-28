const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Whatsapp API...')
})

app.get('/api/test', (req, res) => {
    res.send([1, 2, 3])
})

// Rida@6363

//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


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})