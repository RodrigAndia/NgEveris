import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(){
  // constructor(){
    //carga de archivos o data (json,api)
    console.log("App Component");
  }
}
