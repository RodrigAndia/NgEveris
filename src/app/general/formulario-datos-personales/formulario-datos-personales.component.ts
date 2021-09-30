import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-formulario-datos-personales',
  templateUrl: './formulario-datos-personales.component.html',
  styleUrls: ['./formulario-datos-personales.component.css']
})
export class FormularioDatosPersonalesComponent implements OnInit {

  pais: string = "";;
  ciudad: string = "";;
  region: string = "";
  cPostal: string = "";
  calle: string = "";

  @Output() propagar = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  insertar(){
    console.log("insertado");
    this.propagar.emit(this.pais);
  }
}
