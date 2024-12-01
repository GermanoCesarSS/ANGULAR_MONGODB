// routes/professores.js

const express = require('express');
const router = express.Router();
const Professor = require('../models/professor');

// Criar um novo Professor
router.post('/', (req, res) => {
  console.log('Recebido novo professor:', req.body); // Debugging

  const novoProfessor = new Professor(req.body);
  novoProfessor.save()
    .then((professor) => {
      console.log('Professor salvo no banco de dados:', professor);
      res.json(professor);
    })
    .catch((err) => {
      console.error('Erro ao salvar professor:', err);
      res.status(500).send(err);
    });
});

// Obter todos os Professores
router.get('/', (req, res) => {
  Professor.find()
    .then((professores) => res.json(professores))
    .catch((err) => res.status(500).send(err));
});

// Obter um Professor pelo ID
router.get('/:id', (req, res) => {
  Professor.findById(req.params.id)
    .then((professor) => {
      if (!professor) {
        return res.status(404).json({ message: 'Professor não encontrado' });
      }
      res.json(professor);
    })
    .catch((err) => res.status(500).send(err));
});


module.exports = router;
