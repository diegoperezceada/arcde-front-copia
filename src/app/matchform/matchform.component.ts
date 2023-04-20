import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/enviroments/enviroment';
import { Input } from "@angular/core";
import { PlayersComponent } from '../players/players.component';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-matchform',
  template:'<app-player [data]="data"></app-player>',
  templateUrl: './matchform.component.html',
  styleUrls: ['./matchform.component.css'],
  
})
export class MatchformComponent {
  
  datos = {
    score1: "",
    score2: '',
    winner_id: '',
    game_id:'',
    _method:'put'
  };
  
  datos_id={
    id:''
  }

  public id: any
  
  public imageUrl: any[] = [];
  
  public id_list: any[] = [];
  private itworks: boolean = false;
  route: any;
  
  constructor(private http: HttpClient, private  router: Router, private routes: ActivatedRoute) {
   this.id = this.routes.snapshot.paramMap.get('id');
  }
  
  ngOnInit() {

    let perfil = localStorage.getItem('datitos')
    console.log(perfil)

  }
 
  submit(){

    console.log(this.datos)
    this.http.post(`${environment.apiEndpoint}/matchs/`+this.id, this.datos).subscribe(respuesta=>{




      this.router.navigateByUrl('result');
    })

  }
}
