const express = require('express');
const {getAllProjects} = require('../controllers/projectController');

const router = express.Router();

// get all projects
router.get('/', getAllProjects);

module.exports = router;