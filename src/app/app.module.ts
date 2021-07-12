import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PessoaFormComponent} from './pessoa/pessoa-form/pessoa-form.component';
import {PessoaListComponent} from './pessoa/pessoa-list/pessoa-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormComponent} from './shared/forms/form/form.component';
import {FormInputComponent} from './shared/forms/form-input/form-input.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRouterModule} from "./router/app-router.module";

@NgModule({
  declarations: [
    AppComponent,
    PessoaFormComponent,
    PessoaListComponent,
    FormComponent,
    FormInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
