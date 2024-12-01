const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Importar as rotas
const alunosRoutes = require('./routes/aluno');
const cursosRoutes = require('./routes/curso');
const disciplinasRoutes = require('./routes/disciplina'); 
const professoresRoutes = require('./routes/professor');


// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/escola', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conectado ao MongoDB');
})
.catch((err) => {
  console.log('Erro ao conectar ao MongoDB:', err);
});

// Usar as rotas
app.use('/alunos', alunosRoutes);
app.use('/cursos', cursosRoutes);
app.use('/disciplinas', disciplinasRoutes); 
app.use('/professores', professoresRoutes); 


// Porta onde o servidor vai rodar
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
