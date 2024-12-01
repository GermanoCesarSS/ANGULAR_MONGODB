import { Component } from '@angular/core';
import { DisciplinaService, Disciplina } from '../../services/disciplina.service';
import { Professor, ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-cadastro-disciplina',
  templateUrl: './cadastro-disciplina.component.html',
  styleUrls: ['./cadastro-disciplina.component.css']
})
export class CadastroDisciplinasComponent {
  disciplina: Disciplina = {
    nome: '',
    ementa: '',
    carga_horaria: 0,
    professores: []
  };

  professoresDisponiveis: Professor[] = [];

  constructor(private disciplinaService: DisciplinaService, private professorService: ProfessorService) {}
  
  ngOnInit(): void {
    this.obterProfessores();
  }

  obterProfessores(): void {
    this.professorService.getProfessores().subscribe(
      (professores) => {
        this.professoresDisponiveis = professores;
        console.log('Professores disponíveis carregados:', this.professoresDisponiveis);
      },
      (erro) => {
        console.error('Erro ao carregar professores:', erro);
      }
    );
  }

  salvar(): void {
    console.log('Dados da disciplina antes de salvar:', this.disciplina); // Debugging

    this.disciplinaService.createDisciplina(this.disciplina).subscribe(
      (res) => {
        console.log('Disciplina cadastrada:', res);
        // Reseta o formulário após o sucesso
        this.disciplina = {
          nome: '',
          ementa: '',
          carga_horaria: 0,
          professores: []
        };
        alert('Disciplina cadastrada com sucesso!');
      },
      (erro) => {
        console.error('Erro ao cadastrar disciplina:', erro);
        alert('Erro ao cadastrar disciplina. Verifique o console.');
      }
    );
  }
}
