// src/app/components/cadastro-professor/cadastro-professor.component.ts

import { Component } from '@angular/core';
import { ProfessorService, Professor } from '../../services/professor.service';

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrls: ['./cadastro-professor.component.css']
})
export class CadastroProfessorComponent {
  professor: Professor = {
    nome: '',
    semestre: ''
  };

  constructor(private professorService: ProfessorService) {}

  salvar(): void {
    console.log('Dados do professor antes de salvar:', this.professor); // Debugging

    this.professorService.createProfessor(this.professor).subscribe(
      (res) => {
        console.log('Professor cadastrado:', res);
        // Reseta o formulário após o sucesso
        this.professor = {
          nome: '',
          semestre: ''
        };
        alert('Professor cadastrado com sucesso!');
      },
      (erro) => {
        console.error('Erro ao cadastrar professor:', erro);
        alert('Erro ao cadastrar professor. Verifique o console.');
      }
    );
  }
}
