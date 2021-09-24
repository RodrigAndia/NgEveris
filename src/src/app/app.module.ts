import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './compartida/aside/aside.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { HeaderComponent } from './compartida/header/header.component';
import { LoginComponent } from './general/login/login.component';
import { RegisterComponent } from './general/register/register.component';
import { ProductoComponent } from './general/producto/producto.component';
import { SearchComponent } from './general/search/search.component';
import { HomeComponent } from './page/home/home.component';
import { ProductosComponent } from './page/productos/productos.component';
import { BuscadorComponent } from './page/buscador/buscador.component';
import { RegistroComponent } from './page/registro/registro.component';
import { IngresoComponent } from './page/ingreso/ingreso.component';
import { NotFoundComponent } from './page/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ProductoComponent,
    SearchComponent,
    HomeComponent,
    ProductosComponent,
    BuscadorComponent,
    RegistroComponent,
    IngresoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
