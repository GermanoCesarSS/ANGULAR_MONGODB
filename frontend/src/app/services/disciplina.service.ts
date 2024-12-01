import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Disciplina {
  _id?: string;
  nome: string;
  ementa: string;
  carga_horaria: number;
  professores: string[];
}

@Injectable({
  providedIn: 'root',
})
export class DisciplinaService {
  private apiUrl = 'http://localhost:3000/disciplinas';

  constructor(private http: HttpClient) {}

  getDisciplinas(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(this.apiUrl);
  }

  createDisciplina(disciplina: Disciplina): Observable<Disciplina> {
    return this.http.post<Disciplina>(this.apiUrl, disciplina);
  }

  updateDisciplina(disciplina: Disciplina): Observable<Disciplina> {
    return this.http.put<Disciplina>(`${this.apiUrl}/${disciplina._id}`, disciplina);
  }

  deleteDisciplina(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
