import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(){
  }

  ngOnInit(): void {
  }

  email: string = "";
  dominio: string = "";
  password: string = "";
  mensaje:string = "";

  verificar():void
  {
    let correo = this.email+'@'+this.dominio;
    console.log(this.validateEmail(correo));
    console.log(this.validateLength(correo,20,3));
    console.log(this.validateEspacios(correo));
  }

  validateLength(valor:string,maxLength:number,minLength:number)
    {
      var validate = true;
      if(valor.trim().length < minLength)
      {
        this.mensaje=valor+" debe tener minimo "+minLength+" caracteres";
        console.log("Bad minLength or null");
        validate = false;
      }
      if(valor.trim().length > maxLength)
      {
        this.mensaje=valor+" debe tener maximo "+maxLength+" caracteres";
        console.log("Bad maxLength");
        validate = false;
      }
      return validate;
    }
  
    validateEmail(correo:string) {
      var pattern  = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      var validate = true;
      
      if (!pattern.test(correo)) 
      {
        this.mensaje="Caracteres del correo invalido";
        console.log("Bad email");
        validate =  false;
      }
      return validate
    }
  
    validateTelefono(telefono:string) { 
      var pattern  = new RegExp(/^([0-9])*$/); 
      var validate = true;
      if (!pattern.test(telefono)) 
      {
        this.mensaje="Caracteres del telefono invalidos";
        console.log("Bad telefono");
        validate =  false;
      }
      return validate
    }

    validateEspacios(valor:string){
      var validate = true;
      
      if(valor.indexOf(" ")!=-1)
      {
        this.mensaje=valor+" contiene espacios";
        console.log("Bad espacios");
        validate=false;
      }
      return validate;
    }

}