import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria.interface';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categ: Categoria = {};

  //ng g s services/categoria
  constructor(private http: HttpClient) { 
    console.log("Constructor CategoriaService");
    this.cargarCategorias();
    this.cargarCategoriasOld();
    //this.cargarCategoriasWeb();
  }

  //estructura base this.http.get('').subscribe( (respuesta) => {});
  private cargarCategorias(){
    console.log("Metodo privado CargarCategorias");

    //lectura de archivo json local
    this.http.get('assets/data/categorias.json')
    .subscribe( (respuesta: Categoria) => {
      this.categ = respuesta;
      console.log("Respuesta: ",this.categ);
    });
  }

  //Version vieja
  private cargarCategoriasOld(){

    //lectura de archivo json local
    this.http.get('assets/data/categorias.json')
    .subscribe( (respuesta: any) => {
      console.log("Respuesta: ",respuesta);
    });
  }

  private cargarCategoriasWeb(){

    this.http.get('https://learsixela.github.io/productos_json/productos.json')
    .subscribe( (respuesta) => {
      console.log("Respuesta desde la web: ",respuesta);
      //console.log("Productos: ",respuesta['productos']);
    });
  }
}