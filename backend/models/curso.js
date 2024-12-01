const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  carga_horaria_total: Number,
  disciplinas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Disciplina' }],
});

module.exports = mongoose.model('Curso', cursoSchema);
