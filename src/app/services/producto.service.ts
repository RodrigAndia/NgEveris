import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
    providedIn: 'root'
})

export class ProductoService {
    lista_productos: Producto[] = [];
    lista_productos_view: Producto[] = [];
    lista_compras: Producto[] = [];

    constructor(private http: HttpClient){
        this.cargarProductos();
    }
    
    public cargarProductos(){
        this.http.get('assets/data/producto.json').subscribe( (respuesta: Producto|any) => {
            this.lista_productos=respuesta.productos;
            console.log(this.lista_productos)
        });
    }

    public existElement(id:number):number|null
    {
        console.log("PREVIA DEL EXIST",this.lista_compras)
        for (let index = 0; index < this.lista_compras.length; index++) {
            const element = this.lista_compras[index];
            if (Number(element.id) == id)
            {
                console.log(id);
                return index;
            } 
        }
        return -1;
    }

    // public filter(category:string)
    // {
    //     if(category!="")
    //     {
                // Uso de Pipe
    //     }
    // } 

    public comprar(index:number|undefined)
    {
        this.lista_productos.forEach(element => {
        if(element.id == Number(index))
        {
            var tmp_index = this.existElement(element.id)
            console.log("VARIABLE RECIBIDA",tmp_index)
            if (Number(tmp_index)!=-1)
            {
                //console.log("SI EXISTE EN COMPRAS EL PRODUCTO"+ element.nombre);
                if(Number(element.cantidad)>0) //El elemento aun tiene unidades para comprar
                {
                    element.cantidad = Number(element.cantidad)-1;
                    this.lista_compras[Number(tmp_index)].cantidad = Number(this.lista_compras[Number(tmp_index)].cantidad)+1;
                }
            }
            else
            {
                //console.log("NO EXISTE EN COMPRAS EL PRODUCTO"+ element.nombre);
                var newElement = Object.assign({} , element);
                newElement.cantidad=1;
                this.lista_compras.push(newElement);
                element.cantidad = Number(element.cantidad)-1;
            }
            console.log(this.lista_compras);
        }
        });
    }

    public eliminar(index:number|undefined)
    {
        var cantidad_elemento = 0;
        this.lista_compras.forEach(element => { //Buscamos el producto a eliminar en las compras
            if(element.id == Number(index))
            {
                cantidad_elemento=Number(element.cantidad);
                if(Number(element.cantidad)>0)
                {
                    element.cantidad = Number(element.cantidad)-1; //Le restamos al producto
                }
            }
        });

        this.lista_productos.forEach(element => { //Buscamos la ubicacion del elemento eliminado
            if(cantidad_elemento>0)
            {
                if(element.id == Number(index))
                {
                    element.cantidad = Number(element.cantidad)+1; //Le sumamos al producto la cantidad
                }
            }
        });
    }

}