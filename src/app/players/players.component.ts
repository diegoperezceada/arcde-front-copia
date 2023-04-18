import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/enviroments/enviroment';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  
})

export class PlayersComponent {
  
  data_player= {
    player1_id: null,
    player2_id:null,
    game_id:null,
    
  };
  
    datos = {
    game_id: '',
    title: '',
    url: '',
  
  };

  public respuesta :any
  public imageUrl: any[] = [];

  public user_names: any[] = [];
  
  constructor( private http: HttpClient, private router: Router) { }
  
  ngOnInit() {
    this.http.get(`${environment.apiEndpoint}/users`).subscribe((data: any) => {
      this.user_names = data;
    });
    
    this.http.get(`${environment.apiEndpoint}/games`).subscribe((data: any) => {
      this.imageUrl = data;
    });


  }

  enviardatos(){
    let body = {

      player1_id: this.data_player.player1_id ? this.data_player.player1_id['id'] : [],
      player2_id: this.data_player.player2_id ? this.data_player.player2_id['id'] : [],
      game_id: this.data_player.game_id ? this.data_player.game_id['game_id']: []

    }

    this.http.post(`${environment.apiEndpoint}/matchs`, body ).subscribe((respuesta:any)=>{
      console.log(respuesta)
      this.click(respuesta.id)
    })


  }


  onclick(){

  }

  click(id: number){

    localStorage.setItem('datitos', JSON.stringify(this.data_player))
    console.log(localStorage)
    this.router.navigateByUrl('/matchform/'+id);
  }
}


