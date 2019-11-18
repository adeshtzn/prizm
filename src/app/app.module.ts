import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';
import { Login3Component } from './login3/login3.component';
import { Login4Component } from './login4/login4.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    LoginComponent,
    Login1Component,
    Login2Component,
    Login3Component,
    Login4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
