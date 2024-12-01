const express = require('express');
const router = express.Router();
const Curso = require('../models/curso');

// Criar um novo Curso
router.post('/', (req, res) => {
  const novoCurso = new Curso(req.body);
  novoCurso.save()
    .then((curso) => res.json(curso))
    .catch((err) => res.status(500).send(err));
});

// Obter todos os Cursos
router.get('/', (req, res) => {
  Curso.find()
    .populate('disciplinas') // Popula as disciplinas associadas (opcional)
    .then((cursos) => res.json(cursos))
    .catch((err) => res.status(500).send(err));
});

// Atualizar um Curso existente
router.put('/:id', (req, res) => {
  Curso.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((curso) => res.json(curso))
    .catch((err) => res.status(500).send(err));
});

// Deletar um Curso
router.delete('/:id', (req, res) => {
  Curso.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Curso excluído' }))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
