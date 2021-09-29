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

  verificar():void
  {
    let correo = this.email+'@'+this.dominio;
    console.log(this.validateEmail(correo));
    console.log(this.validateLength(correo,20,3));
    console.log(this.validateEspacios(correo));


  }

  validateLength(valor:string,maxLength:number,minLength:number)
  {
    if(valor.trim().length < minLength)
    {
      console.log("Bad minLength or null");
      return false;
    }
    if(valor.trim().length > maxLength)
    {
      console.log("Bad maxLength");
      return false;
    }
    return true;
  }

  validateEmail(correo:string) {
    var pattern  = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var validate = true;
    if (!pattern.test(correo)) 
    {
      console.log("Bad email");
      validate =  false;
    }
    return validate
  }

  validateEspacios(valor:string){
    var espacios = false;
    var cont = 0;
    var validate = true;
    if (valor.length!=0)
    {
      while (!espacios && (cont < valor.length)) 
      {
        if (valor.charAt(cont) == " ")
        { 
          espacios = true;
          cont++;
        }
      }
      
      if (espacios) 
      { 
        alert ("Bad espacios en blanco"); 
        validate = false; 
      }
    }
    return validate;
  }

}