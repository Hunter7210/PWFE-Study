import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curriculo } from '../models/curriculo.model';

@Injectable({
  providedIn: 'root',
})
export class CurriculoService {
  private apiUrl = 'http://localhost:3000/curriculo'; // Caminho para o arquivo JSON

  //Construtor
  constructor(private http: HttpClient) {} //http é um obj de HttpClient //HttpClient com Classe que permite fazer as conexões com o banco de dados
  // Obtém a lista de curriculos a partir do arquivo JSON

  //Metodos para pegar os curriculos
  getCurriculos(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.apiUrl);
  }

  //Cadastrar um novo curriculo no server
  cadastrarCurriculo(curriculo: Curriculo): Observable<Curriculo[]> {
    return this.http.post<Curriculo[]>(this.apiUrl, curriculo);
  } //Criação de um obj chamado curriculo da classe curriculo //Observable funciona como um cara para pegar todas as informações e meio que traduzilas para o TypeScript

  //Atualizar curriculo ja exitente
  atualizarCurriculo(id: any, curriculo: Curriculo): Observable<Curriculo[]> {
    const urlAtualizar = `${this.apiUrl}/${id}`;
    return this.http.put<Curriculo[]>(urlAtualizar, curriculo);
  }

  //Remover um curriculo do servidor
  removerCurriculo(id: any): Observable<Curriculo[]> {
    const urlDeletar = `${this.apiUrl}/${id}`;
    return this.http.delete<Curriculo[]>(urlDeletar);
  }


}
