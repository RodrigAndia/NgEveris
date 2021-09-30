import { Component, Input, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() lista_compras: Producto[] = [];
  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {
  }

  capturarVariable(lista_compras: any): void {
    this.lista_compras=lista_compras;
    console.log("capturarVariable...", lista_compras);
  }

}
