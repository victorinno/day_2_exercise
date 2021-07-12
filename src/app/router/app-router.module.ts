import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PessoaListComponent} from "../pessoa/pessoa-list/pessoa-list.component";
import {PessoaFormComponent} from "../pessoa/pessoa-form/pessoa-form.component";

const routes: Routes = [
  {path: '', component: PessoaListComponent},
  {path: 'pessoa', component: PessoaListComponent},
  {path: 'pessoa/form', component: PessoaFormComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)//o caminho root da aplicação
  ],
  exports: [RouterModule]
})
export class AppRouterModule {
}
