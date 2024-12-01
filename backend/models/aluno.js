const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
  codaluno: String,
  nomealuno: String,
  data_nascimento: String,
  email: String,
  senha: String,
  sexo: { type: String, enum: ['Masculino', 'Feminino', 'Outro'], required: true },
  curso: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Aluno' }],

});

module.exports = mongoose.model('Aluno', alunoSchema);
