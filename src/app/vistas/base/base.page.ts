import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.page.html',
  styleUrls: ['./base.page.scss'],
})
export class BasePage implements OnInit {

  //aquí podemos crear variables, constrantes, listas, arreglos, json, etc:
  //NOMBRE_VARIABLE: TIPO_DATO = VALOR;
  titulo: string = "Login Artemis";
  existe: boolean = true;
  fecha_hoy: Date = new Date();
  nombres: string[] = ["Pedro","Juan","Diego"];
  persona: any = {"nombre":"Jeison", "edad": 5};

  //NgModel:
  email: string = "";
  password: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //método asociado al boton para hacer un login:
  login(){
    if(this.email=="test@gmail.com" && this.password=="Test"){
      this.router.navigate(['/home']); //redirecciona a la página home si los datos son correctos
    }else{
      alert("CORREO O CONTRASEÑA INCORRECTOS!");
    }
  }

}
