import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/enviroments/enviroment';


@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent {

  datos = {
    name: '',
    telephone: '',
    password: ''
    
  };
  
  constructor(private http: HttpClient, private  router: Router) {}

  enviardatos(){
    this.http.post(`${environment.apiEndpoint}/register`, this.datos).subscribe(respuesta=>{
      this.router.navigate(['/', 'juego'])
    })
  }



  submit(){
    this.enviardatos();
  }
}
