import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-c',
  templateUrl: './formulario-c.component.html',
  styleUrls: ['./formulario-c.component.css']
})
export class FormularioCComponent implements OnInit {

  // @Input() lista_compra:any = null;
  constructor() { }

  ngOnInit(): void {
  }

  capturarVariable(pais: any): void {
    console.log("capturarVariable...", pais);
  }

}
