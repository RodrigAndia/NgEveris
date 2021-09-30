import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CompartidaModule } from './compartida/compartida.module';

import { PageModule } from './page/page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PageModule,
    CompartidaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
