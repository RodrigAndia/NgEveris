import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './compartida/aside/aside.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { HeaderComponent } from './compartida/header/header.component';
import { LoginComponent } from './general/login/login.component';
import { RegisterComponent } from './general/register/register.component';
import { ProductComponent } from './general/product/product.component';
import { SearchComponent } from './general/search/search.component';
import { HomeComponent } from './page/home/home.component';
import { BuscadorComponent } from './page/buscador/buscador.component';
import { RegistroComponent } from './page/registro/registro.component';
import { IngresoComponent } from './page/ingreso/ingreso.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { ProductoComponent } from './page/producto/producto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    SearchComponent,
    HomeComponent,
    BuscadorComponent,
    RegistroComponent,
    IngresoComponent,
    ProductoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
