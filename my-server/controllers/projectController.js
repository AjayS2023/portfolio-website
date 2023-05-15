const Project = require('../models/projectModel');

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        console.log('Error fetching projects from database:', err);
        res.status(500).json({ error: 'Error fetching projects from database' });
    }
};

