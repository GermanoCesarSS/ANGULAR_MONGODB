// models/professor.js

const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  semestre: { type: String, required: true },
});

module.exports = mongoose.model('Professor', professorSchema);
