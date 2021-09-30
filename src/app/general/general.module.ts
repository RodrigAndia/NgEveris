import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';

import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from '../general/register/register.component';
import { ModalComponent } from './modal/modal.component';
import { FormularioCompraComponent } from './formulario-compra/formulario-compra.component';
import { FormularioDatosPersonalesComponent } from './formulario-datos-personales/formulario-datos-personales.component';


@NgModule({
  declarations: [
    LoginComponent,
    ProductComponent,
    RegisterComponent,
    SearchComponent,
    ModalComponent,
    FormularioCompraComponent,
    FormularioDatosPersonalesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  exports:[
    RegisterComponent,
    LoginComponent,
    ProductComponent,
    SearchComponent,
    ModalComponent,
    ModalComponent,
    FormularioCompraComponent,
    FormularioDatosPersonalesComponent,
  ]
})
export class GeneralModule { }
