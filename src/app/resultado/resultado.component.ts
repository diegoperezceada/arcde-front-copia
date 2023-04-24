import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  datos = {
    score1: '',
    score2: '',
    game_id: '',
    player1_id: '',
    player2_id: '',
    user_name:'',
    
  };
  
  game = {
    
    name:''
    
  }
  public table: any[] = [];
  
  public games: any[] = [];
  
  
  
  public datass: any[] =[];
  
  constructor(private http: HttpClient, private  router: Router) {}
  
  ngOnInit() {
    const jugadorString = localStorage.getItem('datitos');


    this.datass.push(jugadorString)
    if (jugadorString !== null) {
      const jugador = JSON.parse(jugadorString);
      const nombreJugador = jugador.name;

      console.log(jugador.name)
    }
    else{
      console.log("dnedwub")
    }
    let resultado = Object.values(localStorage).filter((valor, indice) => indice === 1);

  
    this.http.get(`${environment.apiEndpoint}/games`).subscribe((data: any) => {
      this.games = data;
    })


    this.http.get(`${environment.apiEndpoint}/matchs`).subscribe((data: any) => {
      this.table = data;
      console.log(this.table)
    });
    
  }
}
