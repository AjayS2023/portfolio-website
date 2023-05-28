require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const projectRoutes = require('./routes/projectRoutes');
const path = require('path');



const app = express();

app.use(cors());

// app.get('/', (req, res) =>{
//     res.send('Hello. Welcome to the website.');
// });

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

app.use('/api/portfolio', projectRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to the database');

        app.use(express.static(path.join(__dirname, 'my-app', 'build')));

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'my-app', 'build', 'index.html'));
        });

        app.listen(process.env.PORT, () => {
            console.log('Server is listening on port ' + process.env.PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    });