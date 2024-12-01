import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ListaAlunoComponent } from './components/lista-aluno/lista-aluno.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component';
import { EditarAlunoComponent } from './components/editar-aluno/editar-aluno.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroCursoComponent } from './components/cadastro-curso/cadastro-curso.component';
import { CadastroDisciplinasComponent } from './components/cadastro-disciplina/cadastro-disciplina.component';
import { CadastroProfessorComponent } from './components/cadastro-professor/cadastro-professor.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlunoComponent,
    CadastroAlunoComponent,
    EditarAlunoComponent,
    CadastroCursoComponent,
    CadastroDisciplinasComponent,
    CadastroProfessorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
