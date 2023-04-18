import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../enviroments/enviroment";
import { Router } from '@angular/router';
import { JuegoComponent } from '../juego/juego.component';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
  private isLoggedIn: boolean = false;

  datos = {
    name: '',
    telephone: '',
    password: ''

  };
  
  constructor(private http: HttpClient, public router: Router) {}

  enviardatos(){
    this.http.post(`${environment.apiEndpoint}/login`, this.datos).subscribe(respuesta=>{
      this.isLoggedIn = true;
    })
  }

  
  getToken() {
  }


  islogged(){
    if(this.isLoggedIn == true){
      this.router.navigate(['/', 'juego'])
    }

    else{
      alert("Error al iniciar sesión")
    }
  }

  submit(){
    this.enviardatos();
    this.islogged()
  }
}
