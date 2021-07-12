import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {


  constructor(private http: HttpClient) {
  }

  private readonly url = 'http://localhost:8080/pessoa';

  salvar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post(this.url, pessoa).pipe(map(p => p as Pessoa));
  }

  findAll(): Observable<Pessoa[]> {
    return this.http.get(this.url).pipe(map(p => p as Pessoa[]))
  }

}

export interface Pessoa {
  nome: string | null;
  idade: number | null;
  dataNascimento: Date | null;
  capital: number | null;
  id: number | null;
}
