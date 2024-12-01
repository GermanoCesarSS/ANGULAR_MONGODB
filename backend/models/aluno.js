const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // Importar o bcrypt

const disciplinaNotaSchema = new mongoose.Schema({
  disciplina_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Disciplina', required: true },
  professor: { type: String, required: true },
  notas: {
    bimestre1: { type: Number, required: true },
    bimestre2: { type: Number, required: true },
    // Adicione mais bimestres conforme necessário
  }
}, { _id: false });

const alunoSchema = new mongoose.Schema({
  codaluno: String,
  nomealuno: String,
  data_nascimento: String,
  email: String,
  senha: String,
  sexo: { type: String, enum: ['Masculino', 'Feminino', 'Outro'], required: true },
  curso: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Curso' }],
  disciplinas: [disciplinaNotaSchema]
});

// Middleware para hash da senha antes de salvar
alunoSchema.pre('save', async function(next) {
  try {
    // Verifica se a senha foi modificada (ou é nova)
    if (!this.isModified('senha')) {
      return next();
    }

    // Define o número de saltos (quanto maior, mais seguro, mas mais lento)
    const saltRounds = 10;

    // Gera o hash da senha
    const hashedPassword = await bcrypt.hash(this.senha, saltRounds);

    // Substitui a senha pela versão hashada
    this.senha = hashedPassword;

    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('Aluno', alunoSchema);
