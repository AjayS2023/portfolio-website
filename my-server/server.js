require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { getAllProjects } = require('./controllers/projectController');
const projectRoutes = require('./routes/projectRoutes');
const Project = require('./models/projectModel');

const app = express();

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to the database');
        app.listen(process.env.PORT, () => {
            console.log('Server is listening on port ' + process.env.PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    })

// app.get('/api/projects', projectRoutes);
app.get('/api/projects', async (req, res) => {
    try {
      const projects = await Project.find();
      res.json(projects);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  

app.get('/api/data', (req, res) => {
    const data = {
        title: 'Hello World',
        description: 'This is data from the server'
    };
    res.json(data);
});