import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from "../../enviroments/enviroment";

@Component({
  selector: 'app-slider-juegos',
  templateUrl: './slider-juegos.component.html',
  styleUrls: ['./slider-juegos.component.css']
})
export class SliderJuegosComponent{
  
  datos = {
    title: '',
    url: '',
  
  };

  public imageUrl: any[] = [];

  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    this.http.get(`${environment.apiEndpoint}/games`).subscribe((data: any) => {
      this.imageUrl = data;

      console.log(data)

    });
  }

}

