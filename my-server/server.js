const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/data', (req, res) => {
    const data = {
        title: 'Hello World',
        description: 'This is data from the server'
    };
    res.json(data);
});

const port = process.env.PORT || 4000;

app.listen(port, ()=>{
    console.log('Server is listening on port ' + port);
});