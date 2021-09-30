import { Component, Input, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { formatDate } from '@angular/common';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // Titulo: string = 'Curso de Angular Básico';
  // Titulo2: string= 'Alerta';
  // Detalle: string = 'Esta a punto de realizar cambios en los productos';
  // Accion: string = 'Guardar Producto';

  @Input() lista_compras: Producto[]=[];


  constructor(public productoService: ProductoService) {}

  ngOnInit(): void {
  }

}