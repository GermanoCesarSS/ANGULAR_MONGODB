// src/app/services/aluno.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DisciplinaAluno {
  disciplina_id: string; // ID da disciplina
  professor: string; // Nome do professor (será preenchido pelo backend)
  notas: {
    bimestre1: number;
    bimestre2: number;
    // Adicione mais bimestres conforme necessário
  };
}

export interface Aluno {
  _id?: string;
  codaluno: string;
  nomealuno: string;
  data_nascimento: Date;
  email: string;
  senha: string;
  sexo: string;
  curso: string[]; // IDs dos cursos associados
  disciplinas: DisciplinaAluno[];
}

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private apiUrl = 'http://localhost:3000/alunos';

  constructor(private http: HttpClient) {}

  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.apiUrl);
  }

  getAlunoById(id: string): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.apiUrl}/${id}`);
  }

  createAluno(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.apiUrl, aluno);
  }

  updateAluno(id: string, aluno: Aluno): Observable<Aluno> {
    return this.http.put<Aluno>(`${this.apiUrl}/${id}`, aluno);
  }

  deleteAluno(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
