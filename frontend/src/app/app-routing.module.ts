import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlunoComponent } from './components/lista-aluno/lista-aluno.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component';
import { CadastroCursoComponent } from './components/cadastro-curso/cadastro-curso.component';
import { CadastroDisciplinasComponent } from './components/cadastro-disciplina/cadastro-disciplina.component';
import { CadastroProfessorComponent } from './components/cadastro-professor/cadastro-professor.component';

const routes: Routes = [
{ path: 'aluno-lista', component: ListaAlunoComponent },
{ path: 'aluno-cadastro', component: CadastroAlunoComponent },
{ path: 'curso-cadastro', component: CadastroCursoComponent },
{ path: 'disciplina-cadastro', component: CadastroDisciplinasComponent },
{ path: 'professor-cadastro', component: CadastroProfessorComponent }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}
