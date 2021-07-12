import {Component, OnInit} from '@angular/core';
import {Pessoa, PessoaService} from "../../services/pessoa.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

  pessoas: Observable<Pessoa[]>;

  constructor(private service: PessoaService, private router: Router) {
    this.pessoas = this.service.findAll();
  }

  ngOnInit(): void {
  }

  navegar() {
    this.router.navigate(['pessoa/form']);
  }
}
