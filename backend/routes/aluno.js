const express = require('express');
const router = express.Router();
const Aluno = require('../models/aluno');

// Criar um novo Aluno
router.post('/', (req, res) => {
  const novoAluno = new Aluno(req.body);
  novoAluno.save()
    .then((aluno) => res.json(aluno))
    .catch((err) => res.status(500).send(err));
});

// Obter todos os Alunos
router.get('/', (req, res) => {
  Aluno.find()
    .then((alunos) => res.json(alunos))
    .catch((err) => res.status(500).send(err));
});

// Atualizar um Aluno existente
router.put('/:id', (req, res) => {
  Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((aluno) => res.json(aluno))
    .catch((err) => res.status(500).send(err));
});

// Deletar um Aluno
router.delete('/:id', (req, res) => {
  Aluno.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Aluno excluído' }))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
