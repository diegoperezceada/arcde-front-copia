import { NgModule } from '@angular/core';
import { CommonModule as AngularCommon } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginPageComponent } from './login_page/login-page.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ButtonComponent,
    LayoutComponent,
    LoginPageComponent
  ],
  imports: [
    AngularCommon,
    AppRoutingModule,

  ],
  exports:[ButtonComponent, LayoutComponent]

})
export class CommonModule { }
