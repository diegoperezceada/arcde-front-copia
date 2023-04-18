import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './common/layout/layout.component';
import { LoginPageComponent } from './common/login_page/login-page.component';
import { JuegoComponent } from './juego/juego.component';
import { LoginformComponent } from './loginform/loginform.component';
import { NewGameComponent } from './new-game/new-game.component';
import { OptionsComponent } from './options/options.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { StartComponent } from './start/start.component';
import { JuegosComponent } from './juegos/juegos.component';
import { PlayersComponent } from './players/players.component';
import { SliderJuegosComponent } from './slider-juegos/slider-juegos.component';
import { ResultadoComponent } from "./resultado/resultado.component";
import { MatchformComponent } from './matchform/matchform.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, children:[
    { path: '', redirectTo: 'start', pathMatch: 'full' },
    {path: 'start', component: StartComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'newgame', component: NewGameComponent},
    {path: 'options', component: OptionsComponent},
    {path: 'loginform', component: LoginformComponent},
    {path: 'registerform', component: RegisterformComponent},
    {path: 'juego', component: JuegoComponent},
    {path: 'juegos', component: JuegosComponent},
    {path: 'player', component: PlayersComponent},
    {path: 'slider', component: SliderJuegosComponent},
    {path: 'result', component: ResultadoComponent},
    {path: 'matchform/:id', component: MatchformComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
