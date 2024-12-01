const mongoose = require('mongoose');

const disciplinaSchema = new mongoose.Schema({
  nome: String,
  ementa: String,
  carga_horaria: Number,
  professores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Professor' }],
});

module.exports = mongoose.model('Disciplina', disciplinaSchema);
