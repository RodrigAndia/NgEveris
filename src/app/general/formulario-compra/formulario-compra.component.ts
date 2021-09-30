import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-compra',
  templateUrl: './formulario-compra.component.html',
  styleUrls: ['./formulario-compra.component.css']
})
export class FormularioCompraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tarjeta: string = "";;
  nombre: string = "";;
  numero: string = "";
  codigo: string = "";
  expiracion: string = "";
  in_process = true;
  mensaje="";

  insertar(){
    if(this.validateLength(this.tarjeta,10,1,"Numero tarjeta") &&
        this.validateLength(this.nombre,20,4,"Nombre propietario") &&
        this.validateLength(this.numero,20,13,"Numero tarjeta") &&
        this.validateLength(this.codigo,4,3,"Codigo de verificacion") &&
        this.validateEspacios(this.nombre,"Nombre propietario"))
    {
      this.sendData(this.tarjeta,this.nombre,this.numero,this.codigo,this.expiracion);
      this.in_process=false;
    }

    console.log("insertado");
  }

  validateLength(valor:string,maxLength:number,minLength:number,nombre:string)
  {
    var validate = true;
    if(valor.length < minLength)
    {
      this.mensaje=nombre +" "+ valor+" debe tener minimo "+minLength+" caracteres";
      console.log("Bad minLength or null");
      validate = false;
    }
    if(valor.length > maxLength)
    {
      this.mensaje=nombre +" "+ valor+" debe tener maximo "+maxLength+" caracteres";
      console.log("Bad maxLength");
      validate = false;
    }
    return validate;
  }

  validateNumber(valor:any, nombre:string)
  {
    if (typeof valor === 'number') {
      return true;
    }
    else
    {
      this.mensaje=nombre +" "+ valor+" NO es un numero";
      return false;
    }
  }

  validateEspacios(valor:string, nombre:string){
    var validate = true;
    
    if(valor.indexOf(" ")!=-1)
    {
      this.mensaje=nombre +" "+ valor+" contiene espacios";
      console.log("Bad espacios");
      validate=false;
    }
    return validate;
  }

  sendData(tarjeta: any, nombre: any, numero: any, codigo: any, expiracion: any):void 
  {
    console.log("Enviar!");
  }

}



