import {Component, OnInit} from '@angular/core';
import {Pessoa, PessoaService} from "../../services/pessoa.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {

  pessoa: Pessoa = {capital: null, dataNascimento: null, id: null, idade: null, nome: null};

  constructor(private service: PessoaService, private route: Router) {
  }

  ngOnInit(): void {
  }

  salvar() {
    this.service.salvar(this.pessoa).subscribe({error: (e) => console.error(e), complete: () => this.navegar()});
  }

  voltar() {
    this.navegar();
  }

  private navegar() {
    this.route.navigate(['pessoa'])
  }
}
