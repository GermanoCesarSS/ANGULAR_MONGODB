import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Curso {
  _id?: string;
  nome: string;
  descricao: string;
  carga_horaria_total: number;
  disciplinas: string[]; 
}

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = 'http://localhost:3000/cursos'; // URL do backend para cursos

  constructor(private http: HttpClient) {}

  // Método para buscar todos os cursos
  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiUrl);
  }

  // Método para criar um novo curso
  createCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.apiUrl, curso);
  }

  // Método para atualizar um curso existente
  updateCurso(curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${this.apiUrl}/${curso._id}`, curso);
  }

  // Método para deletar um curso pelo ID
  deleteCurso(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
