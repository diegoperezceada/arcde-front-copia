import { CommonModule } from './common/common.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StartComponent } from './start/start.component';
import { NewGameComponent } from './new-game/new-game.component';
import { OptionsComponent } from './options/options.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ConfigServiceComponent } from './config-service/config-service.component';
import { JuegoComponent } from './juego/juego.component';
import { JuegosComponent } from './juegos/juegos.component';
import { PlayersComponent } from './players/players.component';
import { SliderJuegosComponent } from './slider-juegos/slider-juegos.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { MatchformComponent } from './matchform/matchform.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    NewGameComponent,
    OptionsComponent,
    LoginformComponent,
    RegisterformComponent,
    ConfigServiceComponent,
    JuegoComponent,
    JuegosComponent,
    MatchformComponent,
    PlayersComponent,
    SliderJuegosComponent,
    ResultadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
