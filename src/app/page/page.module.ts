import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralModule } from '../general/general.module';
import { CompartidaModule } from '../compartida/compartida.module';

import { BuscadorComponent } from './buscador/buscador.component';
import { HomeComponent } from './home/home.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductoComponent } from './producto/producto.component';
import { RegistroComponent } from './registro/registro.component';
import { FormularioCComponent } from './formulario-c/formulario-c.component';

@NgModule({
  declarations: [
    BuscadorComponent,
    HomeComponent,
    IngresoComponent,
    NotFoundComponent,
    ProductoComponent,
    RegistroComponent,
    FormularioCComponent,
  ],
  imports: [
    CommonModule,
    GeneralModule,
    CompartidaModule,
  ],
  exports:[
    BuscadorComponent,
    HomeComponent,
    HomeComponent,
    IngresoComponent,
    NotFoundComponent,
    ProductoComponent,
    RegistroComponent,
  ]
})
export class PageModule { }
