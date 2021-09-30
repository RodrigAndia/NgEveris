import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/interfaces/producto.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor(public productoService: ProductoService, private router: Router) { }

  @Output() propagar = new EventEmitter<Producto[]>();
  @Input() lista_compras: Producto[]=[];

  ngOnInit(): void {
  }

  enviarDatos(lista_compras:Producto[]): void {
    console.log("enviar datos ", lista_compras)
    this.lista_compras = lista_compras;
    this.propagar.emit(this.lista_compras);
    this.router.navigate(['compra']);
  }

}
