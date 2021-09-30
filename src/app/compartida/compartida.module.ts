import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { AsideComponent } from '../compartida/aside/aside.component';
import { FooterComponent } from '../compartida/footer/footer.component';
import { HeaderComponent } from '../compartida/header/header.component';

@NgModule({
  declarations: [
    AsideComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports:[
    AsideComponent,
    FooterComponent,
    HeaderComponent,
  ]
})
export class CompartidaModule { }
