import { Component } from '@angular/core';
import { DisciplinaService, Disciplina } from '../../services/disciplina.service';

@Component({
  selector: 'app-cadastro-disciplina',
  templateUrl: './cadastro-disciplina.component.html',
  styleUrls: ['./cadastro-disciplina.component.css']
})
export class CadastroDisciplinaComponent {
  disciplina: Disciplina = {
    nome: '',
    ementa: '',
    carga_horaria: 0,
    professores: ''
  };

  constructor(private disciplinaService: DisciplinaService) {}

  salvar() {
    this.disciplinaService.createDisciplina(this.disciplina).subscribe((res) => {
      console.log('Disciplina cadastrada:', res);
      this.disciplina = {
        nome: '',
        ementa: '',
        carga_horaria: 0,
        professores: ''
      };
    });
  }
}
