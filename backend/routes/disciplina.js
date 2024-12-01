const express = require('express');
const router = express.Router();
const Disciplina = require('../models/disciplina');

// Criar uma nova Disciplina
router.post('/', (req, res) => {
  const novaDisciplina = new Disciplina(req.body);
  novaDisciplina.save()
    .then((disciplina) => res.json(disciplina))
    .catch((err) => res.status(500).send(err));
});

// Obter todas as Disciplina
router.get('/', (req, res) => {
  Disciplina.find()
    .then((disciplina) => res.json(disciplina))
    .catch((err) => res.status(500).send(err));
});

// Atualizar uma Disciplina existente
router.put('/:id', (req, res) => {
  Disciplina.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((disciplina) => res.json(disciplina))
    .catch((err) => res.status(500).send(err));
});

// Deletar uma Disciplina
router.delete('/:id', (req, res) => {
  Disciplina.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Disciplina excluída' }))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
