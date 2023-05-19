const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.set('strictQuery', true);

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    techUsed: {
        type: String,
        required: true
    },
    githubLink: {
        type: String,
        required: true
    }
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
