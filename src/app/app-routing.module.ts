import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SiteComponent} from './site/site.component';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';
import { Login3Component } from './login3/login3.component';
import { Login4Component } from './login4/login4.component';
import { MainloginComponent } from './mainlogin/mainlogin.component';


const routes: Routes = [
  {path : '', component:SiteComponent},
  {path : 'login', component:LoginComponent},
  {path : 'login1', component:Login1Component},
  {path : 'login2', component:Login2Component},
  {path : 'login3', component:Login3Component},
  {path : 'login4', component:Login4Component},
  {path : 'mainlogin', component:MainloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
