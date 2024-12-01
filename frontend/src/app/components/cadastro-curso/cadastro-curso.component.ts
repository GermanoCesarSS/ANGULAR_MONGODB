import { Component, OnInit } from '@angular/core';
import { CursoService, Curso } from '../../services/curso.service';
import { DisciplinaService, Disciplina } from '../../services/disciplina.service';

@Component({
  selector: 'app-cadastro-curso',
  templateUrl: './cadastro-curso.component.html',
  styleUrls: ['./cadastro-curso.component.css']
})
export class CadastroCursoComponent implements OnInit {
  // Objeto para armazenar os dados do curso que será cadastrado
  curso: Curso = {
    nome: '',
    descricao: '',
    carga_horaria_total: 0, // Inicializado com 0 ou outro valor padrão
    disciplinas: []
  };

  // Array para armazenar as disciplinas disponíveis
  disciplinasDisponiveis: Disciplina[] = [];

  // Injeção dos serviços necessários
  constructor(
    private cursoService: CursoService,
    private disciplinaService: DisciplinaService
  ) {}

  // Método chamado quando o componente é inicializado
  ngOnInit(): void {
    this.obterDisciplinas(); // Carrega as disciplinas disponíveis
  }

  // Método para buscar as disciplinas do backend
  obterDisciplinas(): void {
    this.disciplinaService.getDisciplinas().subscribe(
      (disciplinas) => {
        this.disciplinasDisponiveis = disciplinas; // Atribui as disciplinas recebidas ao array
      },
      (erro) => {
        console.error('Erro ao carregar disciplinas:', erro); // Exibe erro no console se ocorrer
      }
    );
  }

  // Método para salvar o curso
  salvar(): void {
    this.cursoService.createCurso(this.curso).subscribe(
      (res) => {
        console.log('Curso cadastrado:', res);
        // Reseta o formulário após o sucesso
        this.curso = {
          nome: '',
          descricao: '',
          carga_horaria_total: 0, // Reinicializar com valor padrão
          disciplinas: []
        };
      },
      (erro) => {
        console.error('Erro ao cadastrar curso:', erro); // Exibe erro no console se ocorrer
      }
    );
  }
}
