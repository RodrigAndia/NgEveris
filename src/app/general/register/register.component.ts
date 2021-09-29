import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  email: string|null = "";;
  dominio: string|null = "";;
  password: string|null = "";
  password2: string|null = "";
  fName: string|null = "";
  lName: string|null = "";

  ngOnInit(): void {
  }

  insertar():void
  {
    console.log(this.email+'@'+this.dominio)
    console.log(this.password+" == "+this.password2)
    console.log(this.fName+" == "+this.lName)
  }

}
