const express = require('express');
const router = express.Router();
const Aluno = require('../models/aluno');
const Disciplina = require('../models/disciplina');

// Importar o modelo Professor para possíveis verificações (opcional)
const Professor = require('../models/professor');

// Criar um novo Aluno
router.post('/', async (req, res) => {
  try {
    console.log('Recebido novo aluno:', req.body);

    // Extrair disciplinas do corpo da requisição
    const disciplinasInput = req.body.disciplinas;

    // Validar e processar cada disciplina
    const disciplinasProcessadas = await Promise.all(disciplinasInput.map(async (disciplinaItem) => {
      const disciplina = await Disciplina.findById(disciplinaItem.disciplina_id).populate('professores');

      if (!disciplina) {
        throw new Error(`Disciplina com ID ${disciplinaItem.disciplina_id} não encontrada.`);
      }

      if (!disciplina.professores || disciplina.professores.length === 0) {
        throw new Error(`Nenhum professor encontrado para a disciplina ${disciplina.nome}.`);
      }

      const professorResponsavel = disciplina.professores[0].nome; // Pegando o nome do primeiro professor

      return {
        disciplina_id: disciplina._id,
        professor: professorResponsavel,
        notas: disciplinaItem.notas
      };
    }));

    // Criar o aluno com disciplinas processadas
    const novoAluno = new Aluno({
      codaluno: req.body.codaluno,
      nomealuno: req.body.nomealuno,
      data_nascimento: req.body.data_nascimento,
      email: req.body.email,
      senha: req.body.senha, // Será hashada pelo middleware
      sexo: req.body.sexo,
      curso: req.body.curso,
      disciplinas: disciplinasProcessadas
    });

    const alunoSalvo = await novoAluno.save();
    console.log('Aluno salvo no banco de dados:', alunoSalvo);
    res.status(201).json(alunoSalvo);
  } catch (err) {
    console.error('Erro ao salvar aluno:', err.message);
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;
