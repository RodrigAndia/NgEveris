import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component'
import { BuscadorComponent } from './page/buscador/buscador.component'
import { IngresoComponent } from './page/ingreso/ingreso.component'
import { RegistroComponent } from './page/registro/registro.component'
import { ProductosComponent } from './page/productos/productos.component'
import { NotFoundComponent } from './page/not-found/not-found.component'


//Referencia a los componentes (importar)
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'productos', component: ProductosComponent},
  {path:'ingreso', component: IngresoComponent},
  {path:'registro', component: RegistroComponent},
  {path:'buscador', component: BuscadorComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'},
];

//Decorador, no olvidar importar.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
