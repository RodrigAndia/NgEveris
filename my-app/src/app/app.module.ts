import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './compartida/aside/aside.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { HeaderComponent } from './compartida/header/header.component';
import { MainBodyComponent } from './general/main-body/main-body.component';
import { LoginComponent } from './general/login/login.component';
import { RegisterComponent } from './general/register/register.component';
import { ProductoComponent } from './general/producto/producto.component';
import { SearchComponent } from './general/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    MainBodyComponent,
    LoginComponent,
    RegisterComponent,
    ProductoComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
