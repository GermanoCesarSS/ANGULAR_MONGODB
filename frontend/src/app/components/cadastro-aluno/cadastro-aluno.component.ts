// src/app/components/cadastro-aluno/cadastro-aluno.component.ts

import { Component, OnInit } from '@angular/core';
import { AlunoService, Aluno, DisciplinaAluno } from '../../services/aluno.service';
import { CursoService, Curso } from '../../services/curso.service';
import { DisciplinaService, Disciplina } from '../../services/disciplina.service';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {
  aluno: Aluno = {
    codaluno: '',
    nomealuno: '',
    data_nascimento: new Date(),
    email: '',
    senha: '',
    sexo: '',
    curso: [],
    disciplinas: []
  };

  cursosDisponiveis: Curso[] = [];
  disciplinasDisponiveis: Disciplina[] = [];

  constructor(
    private alunoService: AlunoService,
    private cursoService: CursoService,
    private disciplinaService: DisciplinaService
  ) {}

  ngOnInit(): void {
    this.obterCursos();
    this.obterDisciplinas();
  }

  obterCursos(): void {
    this.cursoService.getCursos().subscribe(
      (cursos) => {
        this.cursosDisponiveis = cursos;
        console.log('Cursos disponíveis carregados:', this.cursosDisponiveis);
      },
      (erro) => {
        console.error('Erro ao carregar cursos:', erro);
      }
    );
  }

  obterDisciplinas(): void {
    this.disciplinaService.getDisciplinas().subscribe(
      (disciplinas) => {
        this.disciplinasDisponiveis = disciplinas;
        console.log('Disciplinas disponíveis carregadas:', this.disciplinasDisponiveis);
      },
      (erro) => {
        console.error('Erro ao carregar disciplinas:', erro);
      }
    );
  }

  adicionarDisciplina(): void {
    this.aluno.disciplinas.push({
      disciplina_id: '',
      professor: '',
      notas: {
        bimestre1: 0,
        bimestre2: 0
        // Adicione mais bimestres conforme necessário
      }
    });
  }

  removerDisciplina(index: number): void {
    this.aluno.disciplinas.splice(index, 1);
  }

  salvar(): void {
    console.log('Dados do aluno antes de salvar:', this.aluno); // Debugging

    this.alunoService.createAluno(this.aluno).subscribe(
      (res) => {
        console.log('Aluno cadastrado:', res);
        // Reseta o formulário após o sucesso
        this.aluno = {
          codaluno: '',
          nomealuno: '',
          data_nascimento: new Date(),
          email: '',
          senha: '',
          sexo: '',
          curso: [],
          disciplinas: []
        };
        alert('Aluno cadastrado com sucesso!');
      },
      (erro) => {
        console.error('Erro ao cadastrar aluno:', erro);
        alert('Erro ao cadastrar aluno. Verifique o console.');
      }
    );
  }
}
