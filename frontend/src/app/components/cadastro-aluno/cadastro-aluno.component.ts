import { Component, OnInit } from '@angular/core';
import { AlunoService, Aluno } from '../../services/aluno.service';
import { CursoService, Curso } from '../../services/curso.service';

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
      curso: []
    };
  
    cursosDisponiveis: Curso[] = [];
  
    constructor(
      private alunoService: AlunoService,
      private cursoService: CursoService
    ) {}
  
    ngOnInit(): void {
      this.obterCursos();
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
            curso: []
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